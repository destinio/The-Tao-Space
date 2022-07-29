import mongoose from 'mongoose'
import { chapterModel } from '../models/chapterModel'

mongoose.connect(process.env.MONGO_URI!)

async function getChapter(id: number) {
  const chap = await chapterModel.findOne({ id })
  console.log(chap)
}

export { getChapter }
