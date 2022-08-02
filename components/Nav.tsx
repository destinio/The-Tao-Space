import styled from '@emotion/styled'
import { FaListOl, FaMoon, FaSun } from 'react-icons/fa'
import { useSideMenu } from 'hooks/useSideMenu'
import { useTheme } from 'hooks/useTheme'
import { ChaptersMenu } from './ChaptersMenu'
import { hexColors } from 'styles/GlobalStyles'
import { useApp } from 'hooks/useApp'

const StyledNav = styled.nav`
  position: fixed;
  top: 2rem;
  right: 1rem;
  display: flex;
  gap: 1rem;
  color: #fff;
  z-index: 1;

  /* @media screen and (min-width: 800px) {
    color: ${hexColors.blue};
  } */

  & > svg,
  & > div {
    transition: transform 150ms ease-in-out;
    cursor: pointer;
    &:hover {
      transform: scale(1.2);
    }
  }
`

function Nav() {
  const { openMenuWithContent } = useSideMenu()
  const { changeTheme, currentTheme } = useApp()

  function handleLightDarkChange() {
    if (currentTheme.name === 'light') {
      changeTheme('dark')
      return
    }

    changeTheme('light')
  }

  return (
    <StyledNav>
      <FaListOl
        role="button"
        onClick={() =>
          openMenuWithContent({
            component: <ChaptersMenu />,
            title: 'Chapters',
          })
        }
      />
      <div onClick={handleLightDarkChange}>
        {currentTheme.name === 'light' ? <FaMoon /> : <FaSun />}
      </div>
      {/* <FaCog role="button" /> */}
    </StyledNav>
  )
}

export { Nav }
