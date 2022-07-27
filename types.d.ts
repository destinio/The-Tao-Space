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

export { type Section, type Chapter }
