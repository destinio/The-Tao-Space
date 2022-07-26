// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Chapter, getChapters } from '../../functions/getChapters'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Chapter[]>
) {
  const data = getChapters()

  res.status(200).json(data)
}
