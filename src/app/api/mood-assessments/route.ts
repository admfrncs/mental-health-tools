import { NextResponse } from "next/server";
import { questions, calculateSectionScores } from "src/lib/questions";

export async function POST(req: Request) {
  try {
    const { responses } = await req.json();

    if (!Array.isArray(responses) || responses.length !== questions.length) {
      return NextResponse.json({ error: "Invalid responses format" }, { status: 400 });
    }

    const sectionScores = calculateSectionScores(responses);
    const totalScore = sectionScores.reduce((a, b) => a + b, 0);

    return NextResponse.json({ sectionScores, totalScore });
  } {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
