import { NextResponse } from "next/server";
import { SymptomAssessment } from "src/lib/types"; // Ensure this type exists

// Temporary in-memory storage (replace with a database in production)
let savedAssessments: SymptomAssessment[] = [];

// POST route to handle saving the symptom assessment
export async function POST(request: Request) {
  try {
    const data: SymptomAssessment[] = await request.json();

    if (!Array.isArray(data) || data.length === 0) {
      return NextResponse.json(
        { error: "Invalid data format. Expected an array of symptom assessments." },
        { status: 400 }
      );
    }

    savedAssessments.push(...data);

    return NextResponse.json(
      {
        message: "Symptom assessment successfully saved!",
        data,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving symptom assessment:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// GET route to fetch all saved symptom assessments
export async function GET() {
  try {
    return NextResponse.json(savedAssessments, { status: 200 });
  } catch (error) {
    console.error("Error fetching assessments:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
