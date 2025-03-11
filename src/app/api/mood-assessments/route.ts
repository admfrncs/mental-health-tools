import { NextResponse } from 'next/server';
import { MoodAssessment } from 'src/lib/types'; // Adjust path as needed

export async function POST(request: Request) {
  try {
    // Parse the incoming JSON body
    const data: MoodAssessment = await request.json(); // Type assertion to MoodAssessment

    // Log the received data to inspect
    console.log("Received Data:", data);

    // In a real application, you would save this data to a database or perform other operations
    // For now, just return the data back to the client as confirmation
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error saving assessment:", error);

    // Return an error response if something goes wrong
    return NextResponse.json(
      { error: "Failed to save assessment" },
      { status: 400 }
    );
  }
}

export async function GET() {
  // In a real app, this would fetch saved assessments from a database
  return NextResponse.json([]);
}
