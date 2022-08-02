import styled from '@emotion/styled'
import { useChapters } from 'hooks/useChapters'
import { useEffect, useState } from 'react'
import { useApp } from 'hooks/useApp'
import { Chapter } from 'types'
import { Nav } from './Nav'

const StyledChapter = styled.article`
  position: relative;

  h3 {
    margin: 0 0 0.6em;
  }

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
  padding: 1em;

  h2 {
    margin: 0 0 0.5em;
  }

  h3 {
    font-size: 0.8em;
  }

  @media screen and (min-width: 700px) {
    flex-direction: row;
    align-items: center;
    gap: 1em;

    h2 {
      margin: 0;
    }
  }
`

interface StyledChapterContentProps {
  currentTheme: {
    bg: string
    text: string
  }
}

const StyledChapterContent = styled.div<StyledChapterContentProps>(props => ({
  backgroundColor: props.currentTheme.bg,
  color: props.currentTheme.text,
}))

interface ChapterProps {
  chapterId: string
}

function Chapter({ chapterId }: ChapterProps) {
  const [chapter, setChapter] = useState<Chapter>(null!)
  const { getChapter, chaptersLoaded } = useChapters()
  const { currentTheme } = useApp()

  useEffect(() => {
    if (chaptersLoaded) {
      setChapter(getChapter(chapterId))
    }
  }, [chaptersLoaded])

  if (!chaptersLoaded || !chapter) return <h1>Loading...</h1>

  return (
    <StyledChapter>
      <Nav />
      <StyledChapterHeader>
        <h2>Chapter {chapterId}</h2>
        <h3>{chapter.title || ''}</h3>
      </StyledChapterHeader>
      <StyledChapterContent currentTheme={currentTheme}>
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
