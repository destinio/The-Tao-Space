// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getSections } from 'functions/getSections'

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await getSections()

  res.status(200).json(data)
}
