// src/app/wellness-assessment/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/router';
import { wellnessQuestions, calculateSectionScores } from 'src/lib/wellnessQuestions';
import { Button } from 'src/components/ui/button';
import { Card, CardContent } from 'src/components/ui/card';

export default function WellnessAssessment() {
  const [responses, setResponses] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [scores, setScores] = useState<Record<string, number>>({});
  const router = useRouter();

  const handleAnswerChange = (category: string, questionIndex: number, value: string) => {
    setResponses((prev) => ({
      ...prev,
      [`${category}-${questionIndex}`]: value,
    }));
  };

  const handleSubmit = () => {
    const calculatedScores = calculateSectionScores(responses);
    setScores(calculatedScores);
    setShowResults(true);
  };

  return (
    <div className="space-y-4">
      {!showResults ? (
        <div>
          <h1 className="text-2xl font-bold">Wellness Assessment</h1>
          {wellnessQuestions.map((section, sectionIndex) => (
            <Card key={sectionIndex}>
              <CardContent>
                <h2 className="text-xl font-semibold">{section.category}</h2>
                {section.questions.map((question, questionIndex) => (
                  <div key={questionIndex} className="mt-4">
                    <p>{question.question}</p>
                    <div className="flex space-x-4">
                      {question.options.map((option, optionIndex) => (
                        <label key={optionIndex} className="flex items-center">
                          <input
                            type="radio"
                            name={`${section.category}-${questionIndex}`}
                            value={String.fromCharCode(65 + optionIndex)} // 'A', 'B', 'C', 'D'
                            onChange={() => handleAnswerChange(section.category, questionIndex, String.fromCharCode(65 + optionIndex))}
                            checked={responses[`${section.category}-${questionIndex}`] === String.fromCharCode(65 + optionIndex)}
                          />
                          <span className="ml-2">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
          <Button onClick={handleSubmit}>Submit</Button>
        </div>
      ) : (
        <div>
          <h1 className="text-2xl font-bold">Assessment Results</h1>
          {Object.entries(scores).map(([category, score]) => (
            <div key={category}>
              <h2 className="text-xl font-semibold">{category}</h2>
              <p>Score: {score}</p>
            </div>
          ))}
          <Button onClick={() => setShowResults(false)}>Go Back</Button>
        </div>
      )}
    </div>
  );
}
