import { NextApiRequest, NextApiResponse } from 'next';
import prisma from 'src/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // Destructure the request body
  const { userId, questionId, score, date } = req.body;

  // Validate required fields
  if (!userId || !questionId || score === undefined || !date) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // Store the response in the database using Prisma
    const response = await prisma.response.create({
      data: {
        userId,
        questionId,
        score,
        date,
      },
    });

    // Respond with the created response
    res.status(200).json(response);
  } catch (error) {
    console.error('Error storing response:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
