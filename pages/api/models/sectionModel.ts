import mongoose from 'mongoose'

const sectionSchema = new mongoose.Schema(
  {
    chapter_id: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    section_number: {
      type: String,
      required: true,
    },
    lines: [String],
  },
  { timestamps: true }
)

const sectionModel = mongoose.model('Section', sectionSchema)

export { sectionModel }
