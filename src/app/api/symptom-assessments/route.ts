import { NextResponse } from "next/server";
import { SymptomAssessment } from "src/lib/types";
import { v4 as uuidv4 } from "uuid";

// Temporary in-memory storage (replace with a database in production)
const savedAssessments: SymptomAssessment[] = [];

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!Array.isArray(body) || body.length === 0) {
      return NextResponse.json({ error: "Invalid request data" }, { status: 400 });
    }

    const newAssessment: SymptomAssessment = {
      id: uuidv4(),
      date: new Date().toISOString(),
      symptoms: body,
    };

    savedAssessments.push(newAssessment);

    return NextResponse.json(
      { message: "Symptom assessment successfully saved!", data: newAssessment },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving symptom assessment:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function GET() {
  try {
    return NextResponse.json(savedAssessments, { status: 200 });
  } catch (error) {
    console.error("Error fetching assessments:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
