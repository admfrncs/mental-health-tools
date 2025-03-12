import prisma from 'src/lib/prisma';

export async function calculateResults(userId: string) {
  if (!userId) {
    throw new Error('Missing userId');
  }

  try {
    // Retrieve all responses for the user
    const responses = await prisma.response.findMany({
      where: { userId },
      include: {
        question: true,
      },
    });

    if (!responses.length) {
      throw new Error('No responses found for this user');
    }

    // Assuming 3 sections, adjust as needed
    const sectionScores: number[] = [0, 0, 0];
    let totalScore = 0;

    responses.forEach((response) => {
      const questionId = Number(response.question.id);
      if (isNaN(questionId)) {
        console.warn(`Invalid question ID: ${response.question.id}`);
        return;
      }

      const sectionIndex = Math.floor((questionId - 1) / 4);
      if (sectionIndex < sectionScores.length) {
        sectionScores[sectionIndex] += response.score;
      }

      totalScore += response.score;
    });

    return { sectionScores, totalScore };
  } catch (error) {
    console.error('Error calculating results:', error);
    throw new Error('Failed to calculate results');
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { userId } = req.body;

  try {
    const results = await calculateResults(userId);
    return res.status(200).json({ message: 'Results calculated successfully', ...results });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
