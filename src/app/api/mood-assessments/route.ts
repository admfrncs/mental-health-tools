import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log("Received Data:", data); // Log the data to check
    // In a real app, this would save to a database
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error saving assessment:", error);
    return NextResponse.json(
      { error: "Failed to save assessment" },
      { status: 400 }
    );
  }
}

export async function GET() {
  // In a real app, this would fetch from a database
  return NextResponse.json([]);
}
