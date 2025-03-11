import { NextResponse } from "next/server";
import { SymptomAssessment, SelectedSymptom } from "src/lib/types";
import { v4 as uuidv4 } from "uuid"; 

// Temporary in-memory storage (replace with a database in production)
let savedAssessments: SymptomAssessment[] = [];

/**
 * Handles POST requests to save a symptom assessment.
 */
export async function POST(request: Request) {
  try {
    const data: { symptoms: SelectedSymptom[] } = await request.json();

    if (!data || !Array.isArray(data.symptoms) || data.symptoms.length === 0) {
      return NextResponse.json(
        { error: "Invalid data format. Expected an object with a 'symptoms' array." },
        { status: 400 }
      );
    }

    const newAssessment: SymptomAssessment = {
      id: uuidv4(),
      date: new Date().toISOString(),
      symptoms: data.symptoms,
    };

    savedAssessments.push(newAssessment);

    return NextResponse.json(
      {
        message: "Symptom assessment successfully saved!",
        data: newAssessment,
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

/**
 * Handles GET requests to retrieve all saved symptom assessments.
 */
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
