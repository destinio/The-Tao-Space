import { createContext, ReactNode, useEffect, useState } from 'react'
import { getChapters } from 'functions/getChapters'
import { ChapterData as Chapter } from 'types'

interface ChaptersCtxValues {
  chapters: Chapter[]
}

const ChaptersCtx = createContext<ChaptersCtxValues>(null!)

interface ChaptersProviderProps {
  children: ReactNode
}

function ChaptersProvider({ children }: ChaptersProviderProps) {
  const [chapters, setChapters] = useState<Chapter[]>(null!)

  async function getData() {
    const data = await getChapters()
    setChapters(data)
  }

  useEffect(() => {
    getData()
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
