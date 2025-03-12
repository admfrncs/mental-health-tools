// src/app/api/mood-assessment/route.ts
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
    const { userId, questionId, answerId, date } = await req.json();

    if (!userId || !questionId || !answerId || !date) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await prisma.moodAssessment.create({
      data: {
        userId,
        questionId,
        answerId,
        date: new Date(date),
      },
    });

    return NextResponse.json({ message: "Assessment saved successfully" });
  } catch (error) {
    console.error("Error saving mood assessment:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// POST: Calculate Results
export async function POST(req: Request) {
  try {
    const { userId } = await req.json();
    if (!userId) return NextResponse.json({ error: "Missing userId" }, { status: 400 });

    const responses = await prisma.response.findMany({
      where: { userId },
      include: { question: true },
    });

    if (responses.length === 0) {
      return NextResponse.json({ error: "No responses found" }, { status: 404 });
    }

    const sectionScores: number[] = [0, 0, 0];
    let totalScore = 0;

    responses.forEach((response) => {
      const questionId = Number(response.question.id);
      if (!isNaN(questionId)) {
        const sectionIndex = Math.floor((questionId - 1) / 4);
        if (sectionIndex < sectionScores.length) {
          sectionScores[sectionIndex] += response.score;
        }
      }
      totalScore += response.score;
    });

    return NextResponse.json({ sectionScores, totalScore });
  } catch (error) {
    console.error("Error calculating results:", error);
    return NextResponse.json({ error: "Failed to calculate results" }, { status: 500 });
  }
}
