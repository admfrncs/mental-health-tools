// src/app/api/mood-assessments/route.ts
import { NextResponse } from "next/server";
import { prisma } from "src/lib/prisma";
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { userId, responses, date } = req.body;

      // Process the request and calculate results
      // For example, calculate section scores and overall score
      const sectionScores = calculateSectionScores(responses);
      const overallScore = calculateOverallScore(responses);

      return res.status(200).json({
        sectionScores,
        overallScore
      });
    } catch (error) {
      console.error('Error calculating mood assessment:', error);
      return res.status(500).json({ error: 'Failed to calculate the results' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}

function calculateSectionScores(responses: number[]) {
  // Dummy calculation for section scores
  return [responses.reduce((a, b) => a + b, 0)]; // Example: sum of all responses as a single section score
}

function calculateOverallScore(responses: number[]) {
  // Dummy calculation for overall score
  return responses.reduce((a, b) => a + b, 0);
}

// Function to calculate results based on the user's responses
export async function POST(req: Request) {
  try {
    const { userId, responses, date } = await req.json();

    if (!userId || !responses) {
      return NextResponse.json({ error: "Missing userId or responses" }, { status: 400 });
    }

    // Fetching responses from the database
    const dbResponses = await prisma.response.findMany({
      where: { userId },
      include: { question: true },
    });

    if (dbResponses.length === 0) {
      return NextResponse.json({ error: "No responses found for this user" }, { status: 404 });
    }

    const sectionScores: number[] = [0, 0, 0];
    let totalScore = 0;

    dbResponses.forEach((response) => {
      const questionId = Number(response.question.id);
      if (!isNaN(questionId)) {
        const sectionIndex = Math.floor((questionId - 1) / 4);
        if (sectionIndex < sectionScores.length) {
          sectionScores[sectionIndex] += response.score;
        }
      }
      totalScore += response.score;
    });

    return NextResponse.json({ sectionScores, overallScore: totalScore });
  } catch (error) {
    console.error("Error calculating results:", error);
    return NextResponse.json({ error: "Failed to calculate results" }, { status: 500 });
  }
}
