import { NextResponse } from "next/server";
import { prisma } from "src/lib/prisma";

export async function POST(req: Request) {
  try {
    const { userId, questionId, answerId, date } = await req.json();

    if (!userId || !questionId || !answerId || !date) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
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
