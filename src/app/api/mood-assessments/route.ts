// app/api/calculate-results/route.ts
import { NextResponse } from "next/server";
import { prisma } from "src/lib/prisma";

// Function to calculate results based on the user's responses
export async function POST(req: Request) {
  try {
    const { userId, responses, date } = await req.json();
    if (!userId || !responses) {
      return NextResponse.json({ error: "Missing userId or responses" }, { status: 400 });
    }

    const sectionScores: number[] = [0, 0, 0];
    let totalScore = 0;

    // Assuming responses have a structure like [{ questionId: number, score: number }]
    responses.forEach((response: { questionId: number; score: number }) => {
      const sectionIndex = Math.floor((response.questionId - 1) / 4);
      if (sectionIndex < sectionScores.length) {
        sectionScores[sectionIndex] += response.score;
      }
      totalScore += response.score;
    });

    return NextResponse.json({ sectionScores, overallScore: totalScore });
  } catch (error) {
    console.error("Error calculating results:", error);
    return NextResponse.json({ error: "Failed to calculate results" }, { status: 500 });
  }
}
