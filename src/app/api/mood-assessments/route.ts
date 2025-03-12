import { NextResponse } from "next/server";
import prisma from "src/lib/prisma";
import { v4 as uuidv4 } from "uuid";

// Handle POST request to save a new user response (mood assessment)
export async function POST(request: Request) {
  try {
    const data = await request.json(); // Get data from request body

    // Ensure all required fields are present
    if (!data.userId || data.questionId === undefined || data.answerId === undefined || !data.date) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create a new user response in the database
    const newUserResponse = await prisma.userResponse.create({
      data: {
        userId: data.userId,
        questionId: data.questionId,
        answerId: data.answerId,
        // You can add a date or timestamp if needed
      },
    });

    return NextResponse.json(
      { message: "Mood assessment successfully saved!", data: newUserResponse },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving mood assessment:", error);
    return NextResponse.json(
      { error: "Failed to save assessment" },
      { status: 400 }
    );
  }
}

// Handle GET request to fetch all mood assessments (optional)
export async function GET() {
  try {
    const moodAssessments = await prisma.userResponse.findMany(); // Fetch all records from DB
    return NextResponse.json(moodAssessments, { status: 200 });
  } catch (error) {
    console.error("Error fetching mood assessments:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
