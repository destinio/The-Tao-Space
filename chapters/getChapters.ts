interface Section {
  id: string
  section_number: number
  chapter_id: number
  lines: string[]
}

interface Chapter {
  id: number
  title: string
  sections: Section[]
  notes: string[]
}

const data = [
  {
    id: 1,
    title: 'Welcome, What is the Tao?',
    sections: [
      {
        id: '7c3147b4-758b-4304-beb5-904951b1c950',
        section_number: 1,
        chapter_id: 1,
        lines: [
          'The Tao that can be named is not the enduring and unchanging Tao.',
          'The name that can be named is not the enduring and unchanging name.',
        ],
      },
      {
        id: '7c0d74fc-43f8-4759-9667-88d9339ab446',
        section_number: 2,
        chapter_id: 1,
        lines: [
          'Conceived of having no name, it is the Originator of spirit and earth',
          'Conceived of having a name, it is the Mother of all things.',
        ],
      },
      {
        id: '7c0d74fc-43f8-4759-9667-82d9339ab346',
        section_number: 3,
        chapter_id: 1,
        lines: [
          'Always without desire, we must be found, if we are to find spirituality.',
          'Always with desire, material is all we will see.',
        ],
      },
      {
        id: '7c0d74fc-43f8-4759-9667-88d5334ab445',
        section_number: 4,
        chapter_id: 1,
        lines: [
          'Under these two aspects, it is really the same with different names;',
          'As development takes place, it receives different names.',
        ],
      },
      {
        id: '7c0d74fc-43f8-4759-9667-88c5632ab441',
        section_number: 4,
        chapter_id: 1,
        lines: [
          'Together we call them the Mystery.',
          'This is the mystery of mysteries.',
          'The gateway to spirituality.',
        ],
      },
    ],
    notes: [
      "Unnamed Tao it's just another word for spiritual experiences",
      "To understand the Tao one must partake of it's nature.",
      'Desire is the thing that blocks us from experiencing the unnameable part of the Tao',
      'To see the nameless part of the Tao, we must think and act like the Tao',
      'To see the Material (Named) side of the Tao. Is to live in our lives without growth',
      'Mother of all created things = The Ten Thousand Things = material world',
      'Heaven = Spirit and Earth = Matter',
      'Opposites - two parts of the same thing',
      'Night and Day are opposites, but part of the same day',
      'Desire keeps us from going deeper',
    ],
  },
] as Chapter[]

function getChapters() {
  return data
}

export { getChapters, type Chapter }
