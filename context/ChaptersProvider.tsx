import { createContext, ReactNode, useEffect, useState } from 'react'
import { Chapter } from '../types'

interface ChaptersCtxValues {
  chapters: Chapter[]
  getChapter: (id: string) => void
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

  function getChapter(id: string) {
    if (!chapters) {
      console.log('no chapters from getChapters')
    }

    const foundChapter = chapters.find(c => c.chapter_number.toString() === id)

    console.log(foundChapter)
  }

  const chaptersValues = {
    chapters,
    getChapter,
  }

  return (
    <ChaptersCtx.Provider value={chaptersValues}>
      {children}
    </ChaptersCtx.Provider>
  )
}

export { ChaptersProvider, ChaptersCtx }
