import styled from '@emotion/styled'
import { useTheme } from '../hooks/useTheme'
import { Chapter as ChapterType } from '../types'

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
  data: ChapterType
}

function Chapter({ data }: ChapterProps) {
  const { currentTheme } = useTheme()

  return (
    <StyledChapter
      id={`chapter-${data.id}`}
      data-chapter-id={`chapter-${data.id}`}
    >
      <StyledChapterHeader>
        <h2 data-chapter-id={data.id}>Chapter {data.id}</h2>
        <h3>{data.title}</h3>
      </StyledChapterHeader>
      <StyledChapterContent currentTheme={currentTheme}>
        {data.sections.map(s => {
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
        })}

        <section className="notes">
          <h3>Notes:</h3>
          <div>
            {data.notes.map(n => (
              <p key={Math.floor(Math.random() * 100000)}>{n}</p>
            ))}
          </div>
        </section>
      </StyledChapterContent>
    </StyledChapter>
  )
}

export { Chapter }
