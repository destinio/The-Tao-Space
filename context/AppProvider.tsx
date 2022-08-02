import { createContext, Dispatch, ReactNode, useReducer, useState } from 'react'

interface State {
  currentChapter: number
}

interface Action {
  type: string
  payload: any
}

const themes = {
  light: {
    name: 'light',
    bg: '#fafbff',
    text: '#222',
  },
  dark: {
    name: 'dark',
    bg: '#222',
    text: '#fafbff',
  },
}

type ThemeKeys = keyof typeof themes

interface AppProviderValues {
  currentChapter: number
  dispatch: Dispatch<Action>
  changeTheme: (theme: ThemeKeys) => void
  currentTheme: {
    name: string
    bg: string
    text: string
  }
}

const AppCtx = createContext<AppProviderValues>(null!)

function appReducer(state: State, action: Action) {
  switch (action.type) {
    case 'SET_CURRENT_CHAPTER':
      return { ...state, currentChapter: action.payload }
    default:
      return state
  }
}

const initState = {
  currentChapter: 0,
}

interface AppProviderProps {
  children: ReactNode
}

function AppProvider({ children }: AppProviderProps) {
  const [{ currentChapter }, dispatch] = useReducer(appReducer, initState)
  const [currentTheme, setCurrentTheme] = useState(themes.light)

  function changeTheme(theme: ThemeKeys) {
    setCurrentTheme(themes[theme])
  }

  const AppValues = {
    currentChapter,
    dispatch,
    currentTheme,
    changeTheme,
  }

  return <AppCtx.Provider value={AppValues}>{children}</AppCtx.Provider>
}

export { AppProvider, AppCtx }
