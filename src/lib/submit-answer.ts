import { NextResponse } from "next/server";
import prisma from "src/lib/prisma";

// Handle POST request to store user response
export async function POST(request: Request) {
  try {
    const { userId, questionId, score, date } = await request.json();

    // Validate required fields
    if (!userId || !questionId || score === undefined || !date) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Store response in the database using Prisma
    const response = await prisma.userResponse.create({
      data: {
        userId: parseInt(userId),
        questionId: parseInt(questionId),
        score: parseInt(score),
        date: new Date(date),
      },
    });

    return NextResponse.json(response, { status: 201 });
  } catch (error) {
    console.error("Error storing response:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
