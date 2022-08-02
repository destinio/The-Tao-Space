import styled from '@emotion/styled'
import { useApp } from 'hooks/useApp'
import { useTheme } from 'hooks/useTheme'
import { useEffect, useState } from 'react'
import { hexColors } from 'styles/GlobalStyles'
import { SectionType } from 'types'

interface StyledSectionsProps {
  currentTheme: {
    name: string
  }
}

const StyledSections = styled.div<StyledSectionsProps>`
  padding: 1rem;

  section {
    padding: 1rem;
    border-radius: 0.5rem;
    &:hover {
      cursor: pointer;
      background-color: #cee3ce;
      color: #111;
    }

    p {
      margin-bottom: 0.75rem;
    }
  }
`
// #cee3ce
interface ChapterSectionProps {
  chapterNumber: string
}

function ChapterSection(props: ChapterSectionProps) {
  const [sections, setSections] = useState<SectionType[]>(null!)
  const { currentTheme } = useApp()

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

  if (!sections) return <h2>loading sections</h2>

  return (
    <StyledSections currentTheme={currentTheme}>
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
