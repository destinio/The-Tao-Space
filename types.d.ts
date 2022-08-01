interface Section {
  section_number: number
  lines: string[]
}

interface Chapter {
  _id: string
  chapter_number: number
  title: string
  notes?: string[] | null
  __v: number
  createdAt: string
  updatedAt: string
}

export { type Section, type Chapter }
