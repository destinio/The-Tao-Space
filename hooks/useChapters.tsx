import { useContext } from 'react'
import { ChaptersCtx } from '../context/ChaptersProvider'

function useChapters() {
  return useContext(ChaptersCtx)
}

export { useChapters }
