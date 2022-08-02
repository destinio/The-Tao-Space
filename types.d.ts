interface Section {
  section_number: number
  lines: string[]
}

interface ChapterType {
  _id: string
  chapter_number: number
  title: string
  notes?: string[] | null
  __v: number
  createdAt: string
  updatedAt: string
}

interface SectionType {
  _id: string
  section_number: number
  chapter_number: number
  lines?: string[] | null
  __v: number
  createdAt: string
  updatedAt: string
}

export { type Section, type ChapterType, type SectionType }
