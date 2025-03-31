// src/app/wellness-assessment/route.ts
import { NextResponse } from "next/server";
import WellnessAssessment from "src/app/wellness-assessment/page"; // Adjust the import path if needed

export async function GET() {
  // You can handle any server-side logic here if needed
  return NextResponse.json({ message: "Wellness Assessment Route" });
}

export async function POST() {
  // Handle POST requests here if you need to store or process form submissions, etc.
  return NextResponse.json({ message: "Submitted Wellness Assessment" });
}
