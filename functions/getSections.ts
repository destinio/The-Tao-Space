import mongoose from 'mongoose'
import { sectionModel } from '../models/sectionModel'

mongoose.connect(process.env.MONGO_URI!)

async function getSections() {
  const secs = await sectionModel.find()
  return secs
}

export { getSections }
