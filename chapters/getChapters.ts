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
  {
    id: 2,
    title: 'Opposites / Duality',
    sections: [
      {
        id: '95c40424-3780-4ae0-8d96-fec37a0fa5c6',
        section_number: 1,
        chapter_id: 2,
        lines: [
          'All in the world know the beauty of the beautiful.',
          'Doing so they have the idea of what ugliness is.',
        ],
      },
      {
        id: '95c40424-3780-4ae0-8d96-deb17a0ea5c6',
        section_number: 2,
        chapter_id: 2,
        lines: [
          'They all know the skills of the skilful.',
          'Doing this they have the idea of what the want of skill is.',
        ],
      },
      {
        id: '95c40424-3780-4ae0-8d96-deb17a0ea5c6',
        section_number: 2,
        chapter_id: 2,
        lines: [
          'They all know the skills of the skilful.',
          'Doing this they have the idea of what the want of skill is.',
        ],
      },
      {
        id: '95c40424-3780-4ae0-8d96-cda37a0ea5c6',
        section_number: 3,
        chapter_id: 2,
        lines: [
          'So it is that existence and non-existence gives birth to the idea of the other.',
          'That difficulty and ease produce the idea of the other.',
          'That the ideas of height and lowness arise from the contrast of the other.',
          'That the musical notes and tones become harmonious through the revelation of one with other.',
          'That before and behind give the idea of one following the other.',
          'Therefore the wise manages affairs without doing anything, and conveys his instructions without the use of speech.',
        ],
      },
      {
        id: '95c40424-3780-4ae0-8d96-dde32a0va5c6',
        section_number: 4,
        chapter_id: 2,
        lines: [
          'Troubles spring up, and the wise remain calm',
          'they create, and there is no claim made for their ownership',
          'they go through their processes, and there is no expectation of a reward for the results.',
        ],
      },
      {
        id: '95c40424-3780-3ae0-8d96-ude34a0va2c1',
        section_number: 5,
        chapter_id: 2,
        lines: [
          'The work is accomplished, and there is no resting in it (as an achievement).',
        ],
      },
    ],
    notes: [
      'goodness, if not sincere is not really goodness',
      'lightness/darkness',
      'good/evil',
      'not clear in action and and do not over talk. If at all.',
      'It should not be know that a leader as lead.',
      'create but do not hoard',
      'expect no praise for their actions',
      'create and move on',
    ],
  },
  {
    id: 3,
    title: 'Restraint',
    sections: [
      {
        id: '9d849993-1e31-4218-971b-c91259b2677e',
        section_number: 1,
        chapter_id: 3,
        lines: [
          'Not to value and employ those of superior ability is the way to keep the people from rivalry among themselves.',
          'Not to prize things which are difficult to procure is the way to keep them from becoming thieves.',
          'Not to show them what is likely to excite their desires is the way to keep their minds from disorder.',
        ],
      },
      {
        id: '9d849993-1e32-3218-471b-d91249b2677e',
        section_number: 2,
        chapter_id: 3,
        lines: [
          'Wise leaders, empty the minds of their people, fills their bellies, weakens their ambitions, and strengthens their bones.',
          'They Keep them without knowledge and without desire. There are those who have knowledge, they keep them from presuming to act.',
        ],
      },
      {
        id: '9d849993-1e32-3218-471b-d91349b4677e',
        section_number: 2,
        chapter_id: 3,
        lines: [
          'When there is restraint from action, good order is universal.',
        ],
      },
    ],
    notes: [
      'We also lead our selves. We are both, at one point or another, both leaders and followers',
      'remember to practice this chapter as both the leader and the follower',
      'lead from behind. serve those that are being lead',
      "The wise keep the people free of bad ambition. We want to serve those that we are leading. Or, protect those that follow/look up to us. Don't make those that follow serve.",
      "Don't insert your ego into anything",
      'help to keep others ambitions in place',
    ],
  },
] as Chapter[]

function getChapters() {
  return data
}

export { getChapters, type Chapter }
