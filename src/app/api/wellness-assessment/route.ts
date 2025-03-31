import { NextResponse } from "next/server";
import { questions, calculateSectionScores } from "src/lib/wellnessQuestions"; // Fixed the import

export async function POST(req: Request) {
  try {
    const { responses } = await req.json();

    // Ensure the responses match the number of questions
    if (!Array.isArray(responses) || responses.length !== questions.length) {
      return NextResponse.json({ error: "Invalid responses format" }, { status: 400 });
    }

    // Calculate the section scores
    const sectionScores = calculateSectionScores(responses);
    const totalScore = sectionScores.reduce((a, b) => a + b, 0);

    return NextResponse.json({ sectionScores, totalScore });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
