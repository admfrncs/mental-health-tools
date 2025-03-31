import { NextResponse } from "next/server";
import { questions, calculateSectionScores } from "src/lib/wellnessQuestions"; // Import the function

export async function POST(req: Request) {
  try {
    const { responses } = await req.json();

    if (!Array.isArray(responses) || responses.length !== questions.length) {
      return NextResponse.json({ error: "Invalid responses format" }, { status: 400 });
    }

    const sectionScores = calculateSectionScores(responses); // Calculate section scores using the function
    const totalScore = sectionScores.reduce((a, b) => a + b, 0); // Sum up the section scores to get the total score

    return NextResponse.json({ sectionScores, totalScore }); // Return the result as JSON
  } catch (err) {
    // Handling the error if needed, otherwise log it for debugging
    console.error(err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
