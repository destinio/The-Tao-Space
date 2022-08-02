import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import { SectionType } from 'types'

const StyledSections = styled.div`
  padding: 1rem;

  section {
    padding: 1rem;
    &:hover {
      background-color: #d9dceb;
      cursor: pointer;
    }
  }
`

interface ChapterSectionProps {
  chapterNumber: string
}

function ChapterSection(props: ChapterSectionProps) {
  const [sections, setSections] = useState<SectionType[]>(null!)

  useEffect(() => {
    fetch('/api/sections')
      .then(res => res.json())
      .then(data => {
        const sections = data as SectionType[]

        const foundSection = sections.filter(
          s => s.chapter_number.toString() === props.chapterNumber
        )

        if (foundSection) {
          setSections(foundSection)
        }
      })
  }, [props.chapterNumber])

  if (!sections) return <h2>loading sectio</h2>

  return (
    <StyledSections>
      {sections.map(s => {
        return (
          <section key={s._id}>
            {s.lines?.map(l => (
              <p key={Math.floor(Math.random() * 100000)}>{l}</p>
            ))}
          </section>
        )
      })}
    </StyledSections>
  )
}

export { ChapterSection }
