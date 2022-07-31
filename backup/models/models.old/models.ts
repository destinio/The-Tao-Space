import mongoose from 'mongoose'

const sectionSchema = new mongoose.Schema(
  {
    section_number: {
      type: Number,
      required: true,
    },
    chapter_number: {
      type: Number,
      required: true,
    },
    lines: [String],
  },
  { timestamps: true }
)

const chapterSchema = new mongoose.Schema(
  {
    chapter_number: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    notes: [String],
  },
  { timestamps: true }
)

const chapterModel = mongoose.model('Chapter', chapterSchema)
const sectionModel = mongoose.model('Section', sectionSchema)

export { chapterModel, sectionModel }
