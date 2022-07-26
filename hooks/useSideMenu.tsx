import { useContext } from 'react'
import { SideMenuCtx } from '../context/SideMenuProvider'

export function useSideMenu() {
  return useContext(SideMenuCtx)
}
