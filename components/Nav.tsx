import styled from '@emotion/styled'
import { useState } from 'react'
import { FaCog, FaListOl, FaMoon, FaRegMoon, FaSun } from 'react-icons/fa'
import { useSideMenu } from '../hooks/useSideMenu'
import { useTheme } from '../hooks/useTheme'
import { ChaptersMenu } from './ChaptersMenu'

const StyledNav = styled.nav`
  position: fixed;
  top: 1.5em;
  right: 1em;
  display: flex;
  gap: 1em;
  color: #fff;
  z-index: 1;

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
  const { changeTheme, currentTheme } = useTheme()

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
      <FaCog role="button" />
    </StyledNav>
  )
}

export { Nav }
