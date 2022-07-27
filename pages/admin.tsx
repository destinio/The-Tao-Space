import { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react'
import { Chapter } from '../functions/getChapters'

function Admin() {
  const [isAuth, setIsAuth] = useState(false)
  const [basicInfo, setBasicInfo] = useState<{
    title: string
    chapter_number: string
  }>({
    title: '',
    chapter_number: '0',
  })
  const [created, setCreated] = useState(false)

  const [sections, setSections] = useState<
    { id: string; chapter_id: string; section_id: string; lines: string }[]
  >([])

  const [notes, setNotes] = useState<string[]>([])

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      return setIsAuth(true)
    }
  }, [])

  if (!isAuth) return null

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault()
    setCreated(true)
  }

  function handleBasicInputChange(e: ChangeEvent<HTMLInputElement>) {
    setBasicInfo(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSectionAdd() {
    setSections(prev => [
      ...prev,
      {
        chapter_id: basicInfo.chapter_number,
        section_id: String(sections.length + 1),
        id: 'dhsajdhkasjhdjsakdhasd',
        lines: '',
      },
    ])
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1em',
          maxWidth: '600px',
          margin: '0 0 2em',
        }}
      >
        <input
          type="text"
          name="title"
          onChange={handleBasicInputChange}
          value={basicInfo.title}
          placeholder="chapter title"
        />
        <input
          type="number"
          name="chapter_number"
          onChange={handleBasicInputChange}
          value={basicInfo.chapter_number}
          placeholder="chapter number"
        />
        <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default Admin
