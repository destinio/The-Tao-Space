import styled from '@emotion/styled'
import Link from 'next/link'
import { useChapters } from '../hooks/useChapters'

const StyledChapter = styled.ul``

function ChaptersMenu() {
  const { chapters } = useChapters()

  console.log(chapters)

  if (!chapters) return <h1>loading...</h1>

  console.log(`${chapters[2].chapter_number}`)

  return (
    <StyledChapter>
      {chapters.map((c, i) => (
        <li key={`${Math.floor(Math.random() * 1000000)}`}>
          <Link href={`chapters/${c.chapter_number}`}>
            <span>
              {c.chapter_number} - {c.title}
            </span>
          </Link>
        </li>
      ))}
    </StyledChapter>
  )
}

export { ChaptersMenu }
