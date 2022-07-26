import { createContext, ReactNode, useReducer } from 'react'
import { SideMenu } from '../components/SideMenu'

interface MenuCtxValues {
  isOpen: boolean
  toggleSideMenu: () => void
  openMenuWithContent: (menuData: {
    component: ReactNode
    title: string
  }) => void
  closeSideMenu: () => void
}

const SideMenuCtx = createContext<MenuCtxValues>(null!)

interface SideMenuProviderProps {
  children: ReactNode
}

interface State {
  content: ReactNode
  isOpen: boolean
  title: string
}

interface Action {
  type: string
  payload?: any
}

function sideMenuReducer(state: State, action: Action) {
  switch (action.type) {
    case 'toggle':
      return { ...state, isOpen: !state.isOpen }
    case 'open':
      return { ...state, isOpen: true }
    case 'close':
      return { ...state, isOpen: false }
    case 'set-content':
      return {
        ...state,
        content: action.payload.component,
        title: action.payload.title,
      }
    default:
      return state
  }
}

function SideMenuProvider({ children }: SideMenuProviderProps) {
  const [state, dispatch] = useReducer(sideMenuReducer, {
    content: null!,
    isOpen: false,
    title: '',
  })

  function toggleSideMenu() {
    dispatch({ type: 'toggle' })
  }

  function openMenuWithContent(menuData: {
    component: ReactNode
    title: string
  }) {
    dispatch({ type: 'set-content', payload: menuData })
    dispatch({ type: 'open' })
  }

  function closeSideMenu() {
    dispatch({ type: 'close' })
  }

  const returnValues = {
    toggleSideMenu,
    isOpen: state.isOpen,
    openMenuWithContent,
    closeSideMenu,
  }

  return (
    <SideMenuCtx.Provider value={returnValues}>
      {state.isOpen && <SideMenu content={state.content} title={state.title} />}
      {children}
    </SideMenuCtx.Provider>
  )
}

export { SideMenuCtx, SideMenuProvider }
