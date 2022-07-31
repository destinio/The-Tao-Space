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

const sectionModel =
  mongoose.models.Section || mongoose.model('Section', sectionSchema)

export { sectionModel }
