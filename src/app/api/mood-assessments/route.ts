import { NextResponse } from "next/server";
import prisma from "src/lib/prisma";
import { v4 as uuidv4 } from "uuid";

// Handle POST request to save a new mood assessment
export async function POST(request: Request) {
  try {
    const data = await request.json(); // Get data from request body

    // Create a new mood assessment in the database
    const newMoodAssessment = await prisma.moodAssessment.create({
      data: {
        id: uuidv4(), // Generate a UUID
        mood: data.mood, // Assuming "mood" is a field
        score: data.score, // Adjust fields based on your Prisma schema
        date: new Date().toISOString(), // Store current timestamp
      },
    });

    return NextResponse.json(
      { message: "Mood assessment successfully saved!", data: newMoodAssessment },
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

// Handle GET request to fetch all mood assessments
export async function GET() {
  try {
    const moodAssessments = await prisma.moodAssessment.findMany(); // Fetch all records from DB
    return NextResponse.json(moodAssessments, { status: 200 });
  } catch (error) {
    console.error("Error fetching mood assessments:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
