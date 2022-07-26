import { ReactNode } from 'react'

import styled from '@emotion/styled'
import { useTheme } from '../hooks/useTheme'

const StyledChapter = styled.article`
  position: relative;

  h3 {
    margin: 0 0 0.6em;
  }

  span {
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
  id: string
  title: string
  children: ReactNode
}

function Chapter({ id, title, children }: ChapterProps) {
  const { currentTheme } = useTheme()

  return (
    <StyledChapter id={`chapter-${id}`} data-chapter-id={`chapter-${id}`}>
      <StyledChapterHeader>
        <h2 data-chapter-id={id}>Chapter {id}</h2>
        <h3>{title}</h3>
      </StyledChapterHeader>
      <StyledChapterContent currentTheme={currentTheme}>
        {children}
      </StyledChapterContent>
    </StyledChapter>
  )
}

export { Chapter }
