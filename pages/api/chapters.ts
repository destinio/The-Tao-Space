// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { connectToDatabase } from 'functions/connectDB'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const { db } = await connectToDatabase()

  const chaps = await db.collection('chapters').find({}).toArray()

  res.status(200).json(chaps)
}
