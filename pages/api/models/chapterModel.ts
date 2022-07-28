import mongoose from 'mongoose'

const chapterSchema = new mongoose.Schema(
  {
    chapter_number: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

const chapterModel = mongoose.model('Chapter', chapterSchema)

export { chapterModel }
