import { Chapter } from 'components/Chapter'
import { useRouter } from 'next/router'

export default function Chapters() {
  const {
    query: { id },
  } = useRouter()

  if (!id) return <h1>Loading...</h1>

  return <Chapter chapterId={id} />
}

export { Chapters }
