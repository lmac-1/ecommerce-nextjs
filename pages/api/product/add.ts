// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

// POST /api/addproduct
// Required fields in body: name, price
// Optional fields in body: description, image
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const result = await prisma.product.create({
    data: {
      ...req.body,
      currency: 'GBP',
    },
  });
  res.json(result);
}
