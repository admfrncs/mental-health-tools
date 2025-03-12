import { NextApiRequest, NextApiResponse } from 'next';
import prisma from 'src/lib/prisma';

// Only allow POST requests
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Validate the method
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
    const response = await prisma.userResponse.create({
      data: {
        userId: parseInt(userId), // Ensure it's the correct type
        questionId: parseInt(questionId),
        score: parseInt(score),
        date: new Date(date), // Convert date to Date object if it's a string
      },
    });

    // Respond with the created response
    res.status(200).json(response);
  } catch (error) {
    console.error('Error storing response:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
