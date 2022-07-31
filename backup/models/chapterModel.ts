import mongoose from 'mongoose'

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

const chapterModel =
  mongoose.models.Chapter || mongoose.model('Chapter', chapterSchema)

export { chapterModel }
