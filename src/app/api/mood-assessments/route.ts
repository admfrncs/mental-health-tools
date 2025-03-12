import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // Ensure Prisma is set up correctly

// GET: Fetch all mood assessments
export async function GET() {
  try {
    const results = await prisma.moodAssessment.findMany();
    return NextResponse.json(results);
  } catch (error) {
    console.error("Error fetching results:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// POST: Save a new mood assessment response
export async function POST(req: Request) {
  try {
    const { userId, questionId, answerId, date } = await req.json();

    if (!userId || !questionId || !answerId) {
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

    return NextResponse.json(assessment);
  } catch (error) {
    console.error("Error saving response:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
