import { NextResponse } from "next/server";
import { prisma } from "src/lib/prisma";
import { calculateResults } from "src/lib/calculate-results";

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

    const result = await calculateResults(userId);
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error calculating results:", error);
    return NextResponse.json({ error: "Failed to calculate results" }, { status: 500 });
  }
}
