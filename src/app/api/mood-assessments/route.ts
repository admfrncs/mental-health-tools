// src/app/api/calculate-results/route.ts
import { NextResponse } from "next/server";
import { prisma } from "src/lib/prisma";

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
