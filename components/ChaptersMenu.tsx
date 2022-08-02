import styled from '@emotion/styled'
import Link from 'next/link'
import { useChapters } from 'hooks/useChapters'
import { useRouter } from 'next/router'
import { useSideMenu } from 'hooks/useSideMenu'

const StyledChapter = styled.ul``

function ChaptersMenu() {
  const { chapters } = useChapters()
  const { closeSideMenu } = useSideMenu()

  if (!chapters) return <h1>loading...</h1>

  return (
    <StyledChapter>
      {chapters.map(c => {
        const urlString = `/chapters/${c.chapter_number}`
        return (
          <li key={`${Math.floor(Math.random() * 1000000)}`}>
            <Link href={urlString}>
              <span onClick={closeSideMenu}>
                {c.chapter_number} - {c.title}
              </span>
            </Link>
          </li>
        )
      })}
    </StyledChapter>
  )
}

export { ChaptersMenu }
