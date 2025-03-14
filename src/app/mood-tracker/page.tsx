"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "src/components/ui/button";
import { Card, CardContent } from "src/components/ui/card";
import { questions, sectionDisplayNames, calculateSectionScores, sections } from "src/lib/questions";

export default function MoodTracker() {
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

    const content = `
Mood Assessment Results
Date: ${new Date().toLocaleDateString()}

Section Scores:
${sectionScores.map((score, index) => `${sectionDisplayNames[index]}: ${score}`).join("\n")}

Total Score: ${totalScore}
    `;

    const blob = new Blob([content], { type: "application/msword" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "mood-assessment.doc";
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
            <h2 className="text-2xl font-bold mb-6">Mood Assessment Results</h2>
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
              <Button variant="outline" onClick={() => router.push("/")}>
                Start New Assessment
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted p-4">
      <Card className="max-w-2xl mx-auto mt-8">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-6">Mood Assessment</h2>
          <div className="space-y-4">
            {questions.map((question, index) => {
              if (index === currentIndex) {
                return (
                  <div key={index}>
                    <div className="text-lg font-medium mb-2">{question.text}</div>
                    <div className="text-sm text-gray-500 mb-4">
                      {sections[question.section]} {/* Citation will be displayed */}
                    </div>
                    <div className="space-y-2">
                      {question.options.map((option, idx) => (
                        <Button key={idx} onClick={() => handleAnswer(option.score)}>
                          {option.text}
                        </Button>
                      ))}
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
