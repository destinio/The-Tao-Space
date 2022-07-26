import styled from '@emotion/styled'
import { ReactNode } from 'react'
import { FaTimes } from 'react-icons/fa'
import { useSideMenu } from '../hooks/useSideMenu'

const mainColor = '#7cbd13'

const StyledMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  max-width: 400px;
  background-color: #fafbff;
  border-left: 4px solid ${mainColor};
  z-index: 2;
`

const StyledMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  background-color: ${mainColor};
  color: #fff;
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

  return (
    <StyledMenu>
      <StyledMenuHeader>
        <h2>{title}</h2>
        <StyledCloseIcon onClick={closeSideMenu} />
      </StyledMenuHeader>
      <StyledContent>{content}</StyledContent>
    </StyledMenu>
  )
}

export { SideMenu }
