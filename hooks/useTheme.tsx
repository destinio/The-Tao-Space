import { useContext } from 'react'
import { ThemeCtx } from '../context/ThemeProvider'

export function useTheme() {
  return useContext(ThemeCtx)
}
