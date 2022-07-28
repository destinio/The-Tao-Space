import mongoose from 'mongoose'

const notesSchema = new mongoose.Schema(
  {
    chapter_id: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    notes: [String],
  },
  { timestamps: true }
)

const notesModel = mongoose.model('Note', notesSchema)

export { notesModel }
