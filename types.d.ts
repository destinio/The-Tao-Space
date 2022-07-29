interface Section {
  section_number: number
  lines: string[]
}

interface Chapter {
  id: number
  title: string
  sections: Section[]
  notes: string[]
}

export interface ChapterData {
  _id: string
  chapter_number: number
  title: string
  notes: string[]
  __v: number
  createdAt: string
  updatedAt: string
}

export { type Section, type Chapter, type ChapterData }
