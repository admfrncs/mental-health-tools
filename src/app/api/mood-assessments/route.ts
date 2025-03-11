import { NextResponse } from 'next/server';
import { MoodAssessment } from 'src/lib/types'; // Adjust path as needed
import { v4 as uuidv4 } from 'uuid';

// Temporary in-memory storage (replace with a database in production)
let savedMoodAssessments: MoodAssessment[] = [];

export async function POST(request: Request) {
  try {
    const data: MoodAssessment = await request.json(); // Type assertion to MoodAssessment

    // Add a UUID for uniqueness and a date for consistency
    const newMoodAssessment: MoodAssessment = {
      ...data,
      id: uuidv4(),
      date: new Date().toISOString(), // Set the date when saving
    };

    // Store the new mood assessment (could be replaced with a DB)
    savedMoodAssessments.push(newMoodAssessment);

    // Return the saved data as confirmation
    return NextResponse.json(
      { message: "Mood assessment successfully saved!", data: newMoodAssessment },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving mood assessment:", error);

    // Return an error response if something goes wrong
    return NextResponse.json(
      { error: "Failed to save assessment" },
      { status: 400 }
    );
  }
}

export async function GET() {
  try {
    // Fetch the saved mood assessments (from in-memory storage or DB)
    return NextResponse.json(savedMoodAssessments, { status: 200 });
  } catch (error) {
    console.error("Error fetching mood assessments:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
