// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getChapters } from '../../../functions/getChapters'
import { Chapter } from '../../../types'

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Chapter[]>
) {
  const data = getChapters()

  res.status(200).json(data)
}
