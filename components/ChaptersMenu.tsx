import styled from '@emotion/styled'

const StyledChapter = styled.ul``

function ChaptersMenu() {
  return (
    <StyledChapter>
      <li>
        <a href="#chapter-1">1 - Welcome, What is the Tao?</a>
      </li>
      <li>
        <a href="#chapter-2">2 - Opposites / Duality</a>
      </li>
      <li>
        <a href="#chapter-3">3 - Restraint</a>
      </li>
    </StyledChapter>
  )
}

export { ChaptersMenu }
