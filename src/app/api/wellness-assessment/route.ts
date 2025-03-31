// src/app/wellness-assessment/route.ts
import { NextResponse } from "next/server";
import { questions, calculateSectionScores } from "src/lib/wellnesQuestions";

export async function GET() {
  // You can handle any server-side logic here if needed
  return NextResponse.json({ message: "Wellness Assessment Route" });
}

export async function POST() {
  // Handle POST requests here if you need to store or process form submissions, etc.
  return NextResponse.json({ message: "Submitted Wellness Assessment" });
}
