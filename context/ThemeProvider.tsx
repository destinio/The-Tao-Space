import { createContext, ReactNode, useState } from 'react'

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

interface ThemeCtxValues {
  changeTheme: (theme: ThemeKeys) => void
  currentTheme: {
    name: string
    bg: string
    text: string
  }
}
const ThemeCtx = createContext<ThemeCtxValues>(null!)

interface ThemeProviderProps {
  children: ReactNode
}

function ThemeProvider({ children }: ThemeProviderProps) {
  const [currentTheme, setCurrentTheme] = useState(themes.light)

  function changeTheme(theme: ThemeKeys) {
    setCurrentTheme(themes[theme])
  }

  const returnValues = {
    currentTheme,
    changeTheme,
  }

  return (
    <ThemeCtx.Provider value={returnValues}>
      <div>{children}</div>
    </ThemeCtx.Provider>
  )
}

export { ThemeProvider, ThemeCtx }
