import { MongoClient } from 'mongodb'

const MONGO_URI = process.env.MONGO_URI
const DB_NAME = process.env.DB_NAME

export async function connectToDatabase() {
  const client = new MongoClient(MONGO_URI!)

  await client.connect()

  const db = client.db(DB_NAME)

  return {
    client,
    db,
  }
}
