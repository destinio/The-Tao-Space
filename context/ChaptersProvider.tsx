import { createContext, ReactNode, useEffect, useState } from 'react'
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
    setChapters([])
    fetch('/api/chapters')
      .then(data => data.json())
      .then((data: Chapter[]) => {
        setChapters(data.sort((a, b) => a.chapter_number - b.chapter_number))
      })
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
