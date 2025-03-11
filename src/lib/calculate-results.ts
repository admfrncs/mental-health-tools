import { NextApiRequest, NextApiResponse } from 'next';
import prisma from 'src/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { userId } = req.body;

  if (!userId) {
    return res.status(400).json({ error: 'Missing userId' });
  }

  try {
    // Retrieve all responses for the user
    const responses = await prisma.response.findMany({
      where: { userId },
      include: {
        question: true, // Ensures question details are included
      },
    });

    if (!responses.length) {
      return res.status(404).json({ error: 'No responses found for this user' });
    }

    // Assuming 3 sections, adjust as needed
    const sectionScores: number[] = [0, 0, 0];
    let totalScore = 0;

    responses.forEach((response) => {
      const questionId = Number(response.question.id); // Ensure it's a number
      if (isNaN(questionId)) {
        console.warn(`Invalid question ID: ${response.question.id}`);
        return;
      }

      // Determine section index (assuming 4 questions per section)
      const sectionIndex = Math.floor((questionId - 1) / 4); 
      if (sectionIndex < sectionScores.length) {
        sectionScores[sectionIndex] += response.score; // Using `score`, not `answer`
      }

      totalScore += response.score;
    });

    return res.status(200).json({
      message: 'Results calculated successfully',
      sectionScores,
      totalScore,
    });
  } catch (error) {
    console.error('Error calculating results:', error);
    return res.status(500).json({ error: 'Failed to calculate results' });
  }
}
