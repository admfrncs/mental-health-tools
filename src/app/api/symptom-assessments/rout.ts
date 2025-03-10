import { NextResponse } from 'next/server';
import { SymptomAssessment } from 'src/lib/types';  // Import the type for SymptomAssessment

// Temporary in-memory storage (replace with a database in production)
let savedAssessments: SymptomAssessment[] = [];

// POST route to handle saving the symptom assessment
export async function POST(request: Request) {
  try {
    // Parse the incoming request data
    const data: SymptomAssessment[] = await request.json();

    // Validate that the data is in the correct format
    if (!Array.isArray(data) || data.length === 0) {
      return NextResponse.error({ status: 400, statusText: "Invalid data format" });
    }

    // Save the assessment data (here it's saved in memory, you should replace this with a database)
    savedAssessments.push(...data);

    // Respond with a success message and the saved data
    return NextResponse.json({
      message: 'Symptom assessment successfully saved!',
      data
    });
  } catch (error) {
    console.error('Error saving symptom assessment:', error);
    return NextResponse.error({ status: 500, statusText: 'Internal Server Error' });
  }
}

// GET route to fetch all saved symptom assessments
export async function GET() {
  try {
    // Return the saved symptom assessments
    return NextResponse.json(savedAssessments);
  } catch (error) {
    console.error('Error fetching assessments:', error);
    return NextResponse.error({ status: 500, statusText: 'Internal Server Error' });
  }
}
