// src/app/wellness-assessment/route.ts
import { NextResponse } from "next/server";
import { wellnessQuestions, calculateWellnessSectionScores } from "src/lib/wellnessQuestions";

export async function POST(req: Request) {
  try {
    const { responses } = await req.json();

    if (!Array.isArray(responses) || responses.length !== wellnessQuestions.length) {
      return NextResponse.json({ error: "Invalid responses format" }, { status: 400 });
    }

    const sectionScores = calculateWellnessSectionScores(responses);
    const totalScore = sectionScores.reduce((a, b) => a + b, 0);

    return NextResponse.json({ sectionScores, totalScore });
  } catch {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
