"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "src/components/ui/button";
import { Card, CardContent } from "src/components/ui/card";
import { questions, sectionDisplayNames, calculateSectionScores } from "src/lib/wellnessQuestions";

export default function WellnessAssessment() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [responses, setResponses] = useState<number[]>(Array(questions.length).fill(0));
  const [completed, setCompleted] = useState(false);

  const handleAnswer = (score: number) => {
    setResponses((prevResponses) => {
      const updatedResponses = [...prevResponses];
      updatedResponses[currentIndex] = score;
      return updatedResponses;
    });

    setCurrentIndex((prevIndex) => {
      if (prevIndex < questions.length - 1) {
        return prevIndex + 1;
      } else {
        setCompleted(true);
        return prevIndex;
      }
    });
  };

  const exportToWord = () => {
    const sectionScores = calculateSectionScores(responses);
    const totalScore = sectionScores.reduce((a, b) => a + b, 0);

    const content = `Dimensions of Wellness Assessment Results\nDate: ${new Date().toLocaleDateString()}\n\nSection Scores:\n${sectionScores.map((score, index) => `${sectionDisplayNames[index]}: ${score}`).join("\n")}\n\nTotal Score: ${totalScore}`;

    const blob = new Blob([content], { type: "application/msword" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "wellness-assessment.doc";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (completed) {
    const sectionScores = calculateSectionScores(responses);
    const totalScore = sectionScores.reduce((a, b) => a + b, 0);

    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-muted p-4">
        <Card className="max-w-2xl mx-auto mt-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-6">Dimensions of Wellness Assessment Results</h2>
            <ul className="mb-4">
              {sectionScores.map((score, index) => (
                <li key={index} className="mb-2">
                  <strong>{sectionDisplayNames[index]}:</strong> {score}
                </li>
              ))}
            </ul>
            <p className="font-bold mb-4">Total Score: {totalScore}</p>

            <div className="flex gap-4">
              <Button onClick={exportToWord}>Export to Word</Button>
              <Button variant="outline" onClick={() => router.push("/")}>Start New Assessment</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted p-4">
      <Card className="max-w-2xl mx-auto mt-8">
        <CardContent className="p-6">
          <div className="mb-4 h-2 bg-gray-200 rounded-full">
            <div className="h-2 bg-blue-500 rounded-full" style={{ width: `${progress}%` }}></div>
          </div>
          <h2 className="text-lg font-bold mb-4">{currentQuestion.text}</h2>
          <div className="space-y-2">
            {currentQuestion.options.map((option, index) => (
              <Button
                key={index}
                className="w-full py-3 px-4 border rounded-md text-left bg-gray-100 hover:bg-gray-200 text-black"
                onClick={() => handleAnswer(option.score)}
              >
                {option.text}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
