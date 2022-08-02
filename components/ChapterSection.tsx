import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import { SectionType } from 'types'

const StyledSections = styled.div`
  section {
    margin: 0 0 1rem;
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
          <section>
            {s.lines?.map(l => (
              <p>{l}</p>
            ))}
          </section>
        )
      })}
    </StyledSections>
  )
}

export { ChapterSection }
