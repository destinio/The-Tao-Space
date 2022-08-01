import { MongoClient } from 'mongodb'

const MONGO_URI = process.env.MONGO_URI
const DB_NAME = process.env.DB_NAME

export async function connectToDatabase() {
  let client = new MongoClient(MONGO_URI!)

  await client.connect().then(() => console.log('connected'))
  let db = client.db(DB_NAME)

  return {
    client,
    db,
  }
}
