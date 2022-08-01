import { useRouter } from 'next/router'

export default function Chapters() {
  const {
    query: { id },
  } = useRouter()

  return <>Chapter {id}</>
}

export { Chapters }
