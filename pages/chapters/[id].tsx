import { Chapter } from 'components/Chapter'
import { useRouter } from 'next/router'

export default function Chapters() {
  const router = useRouter()

  const chapterNumber = router.query.id as string

  if (!router) return <h1>Loading...</h1>

  // return <h1>Chapter</h1>
  return <Chapter chapterId={chapterNumber} />
}

export { Chapters }
