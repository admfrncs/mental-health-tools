// src/lib/calculate-results.ts
import { prisma } from "src/lib/prisma";

export async function calculateResults(userId: string, responses: number[]) {
  if (!userId) {
    throw new Error("Missing userId");
  }

  try {
    // Retrieve all responses for the user, including related question data
    const userResponses = await prisma.response.findMany({
      where: { userId },
      include: {
        question: true,
      },
    });

    if (userResponses.length === 0) {
      throw new Error("No responses found for this user");
    }

    // Adjust section count based on your assessment
    const sectionScores: number[] = [0, 0, 0];
    let totalScore = 0;

    userResponses.forEach((response) => {
      const questionId = Number(response.question.id);
      if (isNaN(questionId)) {
        console.warn(`Invalid question ID: ${response.question.id}`);
        return;
      }

      // Assuming 4 questions per section, adjust if needed
      const sectionIndex = Math.floor((questionId - 1) / 4);
      if (sectionIndex < sectionScores.length) {
        sectionScores[sectionIndex] += response.score;
      }

      totalScore += response.score;
    });

    return { sectionScores, overallScore: totalScore };
  } catch (error) {
    console.error("Error calculating results:", error);
    throw new Error("Failed to calculate results");
  }
}
