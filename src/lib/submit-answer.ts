import { NextApiRequest, NextApiResponse } from 'next';
import prisma from 'src/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // Destructure the request body
  const { userId, questionId, answerId, date } = req.body;

  // Validate required fields
  if (!userId || !questionId || !answerId || !date) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // Store the response in the database using Prisma
    const response = await prisma.userResponse.create({
      data: {
        userId,
        questionId,
        answerId,
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

// Named export for submitAnswer
export async function submitAnswer(userId: string, questionId: string, answerId: string, date: string) {
  if (!userId || !questionId || !answerId || !date) {
    throw new Error('Missing required fields');
  }

  try {
    const response = await prisma.userResponse.create({
      data: {
        userId: parseInt(userId), // Ensure it's the correct type if coming from a string
        questionId: parseInt(questionId),
        answerId: parseInt(answerId),
        date: new Date(date), // Convert date to Date object if it's a string
      },
    });
    
    console.log('Response:', response); // Log the response to check data
    return response;
    
  } catch (error) {
    console.error('Error storing response:', error);
    throw new Error('Internal Server Error');
  }
}
