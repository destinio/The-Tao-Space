import styled from '@emotion/styled'
import { useChapters } from 'hooks/useChapters'
import { useEffect, useState } from 'react'
import { useApp } from 'hooks/useApp'
import { ChapterType } from 'types'
import { Nav } from './Nav'

interface StyledChapterProps {
  currentTheme: {
    bg: string
    text: string
  }
}

const StyledChapter = styled.article<StyledChapterProps>`
  position: relative;
  background-color: ${props => props.currentTheme.bg};
  color: ${props => props.currentTheme.text};
  height: 100vh;

  p {
    margin: 0 0 0.25em;
  }
`

const StyledChapterHeader = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  background-color: #1982c4;
  color: snow;
  top: 0;
  padding: 2rem;
  gap: 1em;

  h2 {
    font-size: 1.3rem;
  }

  h3 {
    font-size: 2rem;
  }

  @media screen and (min-width: 700px) {
    flex-direction: row;
    align-items: center;

    h2 {
      margin: 0;
    }
  }
`

const StyledChapterContent = styled.div``

interface ChapterProps {
  chapterId: string
}

function Chapter({ chapterId }: ChapterProps) {
  const [chapter, setChapter] = useState<ChapterType | undefined>(null!)
  const { getChapter, chaptersLoaded } = useChapters()
  const { currentTheme } = useApp()

  useEffect(() => {
    if (chaptersLoaded) {
      setChapter(getChapter(chapterId))
    }
  }, [chaptersLoaded, chapterId])

  if (!chaptersLoaded || !chapter) return <h1>Loading...</h1>

  return (
    <StyledChapter currentTheme={currentTheme}>
      <Nav />
      <StyledChapterHeader>
        <h2>Chapter {chapterId}</h2>
        <h3>{chapter.title || ''}</h3>
      </StyledChapterHeader>
      <StyledChapterContent>
        {/* {data.sections.map(s => {
          return (
            <section
              key={Math.floor(Math.random() * 100000)}
              data-section-id={s.section_number}
            >
              {s.lines.map(l => {
                return <p key={`${Math.floor(Math.random() * 100000)}`}>{l}</p>
              })}
            </section>
          )
        })} */}

        <section className="notes">
          <h3>Notes:</h3>
          {/* <div>
            {data.notes.map(n => {
              if (n.length === 0) {
                return <br key={Math.floor(Math.random() * 100000)} />
              }

              return <p key={Math.floor(Math.random() * 100000)}>{n}</p>
            })}
          </div> */}
        </section>
      </StyledChapterContent>
    </StyledChapter>
  )
}

export { Chapter }
