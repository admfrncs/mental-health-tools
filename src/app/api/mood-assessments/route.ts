import { NextResponse } from "next/server";
import { prisma } from "src/lib/prisma";

// GET: Fetch all mood assessments
export async function GET() {
  try {
    const results = await prisma.moodAssessment.findMany();
    return NextResponse.json(results);
  } catch (error) {
    console.error("Error fetching mood assessments:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// POST: Save a new mood assessment response
export async function POST(req: Request) {
  try {
    const { userId, questionId, answerId, date, calculateResults } = await req.json();

    if (!userId || !questionId || !answerId || !date) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const assessment = await prisma.moodAssessment.create({
      data: {
        userId,
        questionId,
        answerId,
        date: new Date(date),
      },
    });

    // If requested, calculate results
    if (calculateResults) {
      const results = await calculateUserResults(userId);
      return NextResponse.json({ assessment, results });
    }

    return NextResponse.json(assessment);
  } catch (error) {
    console.error("Error saving mood assessment:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// Function to calculate results (moved from calculate-results.ts)
async function calculateUserResults(userId: string) {
  if (!userId) {
    throw new Error("Missing userId");
  }

  try {
    const responses = await prisma.response.findMany({
      where: { userId },
      include: { question: true },
    });

    if (responses.length === 0) {
      throw new Error("No responses found for this user");
    }

    const sectionScores: number[] = [0, 0, 0];
    let totalScore = 0;

    responses.forEach((response) => {
      const questionId = Number(response.question.id);
      if (isNaN(questionId)) {
        console.warn(`Invalid question ID: ${response.question.id}`);
        return;
      }

      const sectionIndex = Math.floor((questionId - 1) / 4);
      if (sectionIndex < sectionScores.length) {
        sectionScores[sectionIndex] += response.score;
      }

      totalScore += response.score;
    });

    return { sectionScores, totalScore };
  } catch (error) {
    console.error("Error calculating results:", error);
    throw new Error("Failed to calculate results");
  }
}
