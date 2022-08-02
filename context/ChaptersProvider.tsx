import { createContext, ReactNode, useEffect, useState } from 'react'
import { Chapter } from '../types'

interface ChaptersCtxValues {
  chapters: Chapter[]
  getChapter: (id: string) => Chapter
  chaptersLoaded: boolean
}

const ChaptersCtx = createContext<ChaptersCtxValues>(null!)

interface ChaptersProviderProps {
  children: ReactNode
}

function ChaptersProvider({ children }: ChaptersProviderProps) {
  const [chapters, setChapters] = useState<Chapter[]>(null!)
  const [chaptersLoaded, setChaptersLoaded] = useState(false)

  useEffect(() => {
    fetch('/api/chapters')
      .then(data => data.json())
      .then((data: Chapter[]) => {
        setChapters(data.sort((a, b) => a.chapter_number - b.chapter_number))
        setChaptersLoaded(true)
      })
  }, [])

  function getChapter(id: string) {
    return chapters.find(c => c.chapter_number.toString() === id)
  }

  const chaptersValues = {
    chapters,
    getChapter,
    chaptersLoaded,
  }

  return (
    <ChaptersCtx.Provider value={chaptersValues}>
      {children}
    </ChaptersCtx.Provider>
  )
}

export { ChaptersProvider, ChaptersCtx }
