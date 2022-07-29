// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getChapter } from '../../../functions/getChapter'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query

  getChapter(Number(id))

  res.status(200).json({ id })
}
