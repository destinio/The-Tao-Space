// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { connectToDatabase } from 'functions/connectDB'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getChapters } from '../../functions/getChapters'
import { Chapter } from '../../types'

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const { db } = await connectToDatabase()

  const secs = await db.collection('sections').find({}).toArray()

  res.status(200).json(secs)
}
