// app/api/calculate-results/route.ts
import { NextResponse } from "next/server";
import { calculateResults } from "src/lib/calculate-results";  // Import the function from calculate-results.ts

export async function POST(req: Request) {
  try {
    const { userId } = await req.json();
    if (!userId) return NextResponse.json({ error: "Missing userId" }, { status: 400 });

    // Call the calculateResults function from calculate-results.ts
    const { sectionScores, overallScore } = await calculateResults(userId);

    return NextResponse.json({ sectionScores, overallScore });
  } catch (error) {
    console.error("Error calculating results:", error);
    return NextResponse.json({ error: "Failed to calculate results" }, { status: 500 });
  }
}
