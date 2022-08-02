import styled from '@emotion/styled'
import { useApp } from 'hooks/useApp'
import { ReactNode } from 'react'
import { FaTimes } from 'react-icons/fa'
import { hexColors } from 'styles/GlobalStyles'
import { useSideMenu } from '../hooks/useSideMenu'

interface Props {
  currentTheme: {
    bg: string
    text: string
  }
}

const StyledMenu = styled.div<Props>`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  max-width: 400px;
  background-color: ${props => props.currentTheme.bg};
  color: ${props => props.currentTheme.text};
  border-left: 4px solid ${hexColors.green};
  z-index: 2;
`

const StyledMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  background-color: ${hexColors.green};
  color: ${hexColors.white};
`

const StyledContent = styled.nav`
  padding: 1em;
`

const StyledCloseIcon = styled(FaTimes)`
  cursor: pointer;
  transition: transform 150ms ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`

interface SideMenuProps {
  content: ReactNode
  title: string
}

function SideMenu({ content, title }: SideMenuProps) {
  const { closeSideMenu } = useSideMenu()
  const { currentTheme } = useApp()

  return (
    <StyledMenu currentTheme={currentTheme}>
      <StyledMenuHeader>
        <h2>{title}</h2>
        <StyledCloseIcon onClick={closeSideMenu} />
      </StyledMenuHeader>
      <StyledContent>{content}</StyledContent>
    </StyledMenu>
  )
}

export { SideMenu }
