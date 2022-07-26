import styled from '@emotion/styled'
import { useChapters } from '../hooks/useChapters'

const StyledChapter = styled.ul``

function ChaptersMenu() {
  const { chapters } = useChapters()

  if (!chapters) return <h1>loading...</h1>

  return (
    <StyledChapter>
      {chapters.map(c => (
        <li key={`${c.id}-${Math.floor(Math.random() * 1000000)}`}>
          <a href={`/#chapter-${c.id}`}>
            {c.id} - {c.title}
          </a>
        </li>
      ))}
    </StyledChapter>
  )
}

export { ChaptersMenu }
