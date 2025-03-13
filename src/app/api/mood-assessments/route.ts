// src/app/api/mood-assessments/route.ts
import { NextResponse } from "next/server";
import { prisma } from "src/lib/prisma";
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { userId, responses, date } = req.body;

      if (!userId || !responses || !date) {
        return res.status(400).json({ error: "Missing userId, responses, or date" });
      }

      // Store responses in the database
      await storeResponses(userId, responses, date);

      // Calculate results from responses
      const sectionScores = await calculateSectionScores(userId);
      const overallScore = sectionScores.reduce((a, b) => a + b, 0); // Sum of section scores for the overall score

      return res.status(200).json({
        sectionScores,
        overallScore,
      });
    } catch (error) {
      console.error('Error calculating mood assessment:', error);
      return res.status(500).json({ error: 'Failed to calculate the results' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}

async function storeResponses(userId: number, responses: number[], date: string) {
  // Store each response in the database
  for (let i = 0; i < responses.length; i++) {
    await prisma.moodAssessment.create({
      data: {
        userId,
        questionId: i + 1, // Assuming question IDs start from 1
        answerId: responses[i],
        date: new Date(date),
      },
    });
  }
}

async function calculateSectionScores(userId: number) {
  // Fetch the responses for the user from the database
  const responses = await prisma.response.findMany({
    where: { userId },
    include: { question: true },
  });

  const sectionScores: number[] = [0, 0, 0]; // Assuming 3 sections for this example
  responses.forEach((response) => {
    const questionId = response.questionId;
    const sectionIndex = Math.floor((questionId - 1) / 4); // Divide by 4 to group questions into 3 sections
    if (sectionIndex < sectionScores.length) {
      sectionScores[sectionIndex] += response.score;
    }
  });

  return sectionScores;
}
