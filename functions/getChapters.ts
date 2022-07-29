import { chapterModel } from 'models/chapterModel'
// import { data } from './data'

async function getChapters() {
  const chaps = await chapterModel.find()
  return chaps
}

export { getChapters }
