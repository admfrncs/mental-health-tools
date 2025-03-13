import { useState } from "react";
import { questions, sectionDisplayNames, calculateSectionScores } from "src/lib/questions";
import { Button } from "src/components/ui/button";

export default function MoodTracker() {
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

  if (completed) {
    const sectionScores = calculateSectionScores(responses);
    const totalScore = sectionScores.reduce((a, b) => a + b, 0);

    return (
      <div className="p-4">
        <h2 className="text-xl font-bold">Results</h2>
        <ul className="mt-2">
          {sectionScores.map((score, index) => (
            <li key={index} className="mt-2">
              {sectionDisplayNames[index]}: {score}
            </li>
          ))}
        </ul>
        <p className="mt-4 font-bold">Total Score: {totalScore}</p>
        <Button className="mt-4" onClick={() => {
          setCurrentIndex(0);
          setResponses(Array(questions.length).fill(0));
          setCompleted(false);
        }}>Restart</Button>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  return (
    <div className="p-4">
      <div className="mb-4 h-2 bg-gray-200 rounded-full">
        <div className="h-2 bg-blue-500 rounded-full" style={{ width: `${progress}%` }}></div>
      </div>
      <h2 className="text-lg font-bold mb-2">{currentQuestion.text}</h2>
      <div className="space-y-2">
        {currentQuestion.options.map((option, index) => (
          <Button key={index} className="w-full" onClick={() => handleAnswer(option.score)}>
            {option.text}
          </Button>
        ))}
      </div>
    </div>
  );
}
