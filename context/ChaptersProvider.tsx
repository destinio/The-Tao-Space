import { createContext, ReactNode, useEffect, useState } from 'react'
import { getChapters } from '../pages/api/functions/getChapters'
import { Chapter } from '../types'

interface ChaptersCtxValues {
  chapters: Chapter[]
}

const ChaptersCtx = createContext<ChaptersCtxValues>(null!)

interface ChaptersProviderProps {
  children: ReactNode
}

function ChaptersProvider({ children }: ChaptersProviderProps) {
  const [chapters, setChapters] = useState<Chapter[]>(null!)

  useEffect(() => {
    const data = getChapters()
    setChapters(data)
  }, [])

  const chaptersValues = {
    chapters,
  }

  return (
    <ChaptersCtx.Provider value={chaptersValues}>
      {children}
    </ChaptersCtx.Provider>
  )
}

export { ChaptersProvider, ChaptersCtx }
