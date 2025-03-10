import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    // In a real app, this would save to a database
    // For now, we'll just return the data
    return NextResponse.json(data);
  } catch (error) {
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
