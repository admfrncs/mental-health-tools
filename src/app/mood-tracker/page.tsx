// src/app/mood-tracker/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "src/components/ui/button";
import { Card, CardContent } from "src/components/ui/card";
import { Calendar } from "src/components/ui/calendar";
import { Popover, PopoverTrigger, PopoverContent } from "src/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { sections, sectionDisplayNames, questions } from "src/lib/questions";
import { toast } from "react-toastify";
import { calculateResults } from "src/lib/calculate-results";
import { format, parse } from "date-fns";

// Assume userId is available through context or props
export default function MoodTracker() {
  const router = useRouter();
  const [date, setDate] = useState<string>(format(new Date(), "PPP"));
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [responses, setResponses] = useState<number[]>(new Array(questions.length).fill(0));
  const [showResults, setShowResults] = useState<boolean>(false);
  const [results, setResults] = useState<{ sectionScores: number[]; overallScore: number } | null>(null);

  // Replace this with the actual userId
  const userId = "userId_placeholder"; // You need to get this from context or props

  useEffect(() => {
    console.log("Initialized Date:", date);
  }, [date]);

  const handleAnswer = async (answerId: number) => {
    try {
      const updatedResponses = [...responses];
      updatedResponses[currentQuestion] = answerId;
      setResponses(updatedResponses);

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
      } else {
        console.log("Fetching results...");
        const calculatedResults = await calculateResults(userId, updatedResponses);  // Pass userId here
        setResults(calculatedResults);
        setShowResults(true);
      }
    } catch (error) {
      console.error("Error submitting answer:", error);
      toast.error("Failed to save response. Please try again.");
    }
  };

  const startNewAssessment = () => {
    setCurrentQuestion(0);
    setShowResults(false);
    setResponses(new Array(questions.length).fill(0));
    setDate(format(new Date(), "PPP"));
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted p-4">
      <Card className="max-w-2xl mx-auto mt-8">
        <CardContent className="p-6">
          <div className="mb-6">
            <h2 className="text-lg font-medium mb-2">Select Date</h2>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4" />
                  {date}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="p-2">
                <Calendar
                  mode="single"
                  selected={parse(date, "PPP", new Date())}
                  onSelect={(newDate) => newDate && setDate(format(newDate, "PPP"))}
                  initialFocus
                  aria-label="Calendar"
                />
              </PopoverContent>
            </Popover>
          </div>

          {!showResults ? (
            <>
              <h2 className="text-lg font-semibold mb-4">
                {questions[currentQuestion].text}
              </h2>
              <div className="flex flex-col gap-2">
                {questions[currentQuestion].options.map((option, index) => (
                  <Button
                    key={index}
                    variant={responses[currentQuestion] === option.score ? "default" : "outline"}
                    className="text-left"
                    onClick={() => handleAnswer(option.score)}
                  >
                    {option.text}
                  </Button>
                ))}
              </div>
            </>
          ) : (
            <div>
              <h2 className="text-lg font-semibold mb-4">Results</h2>
              <p>Section 1 Score: {results?.sectionScores[0]}</p>
              <p>Section 2 Score: {results?.sectionScores[1]}</p>
              <p>Section 3 Score: {results?.sectionScores[2]}</p>
              <p>Total Score: {results?.overallScore}</p>
              <Button onClick={startNewAssessment}>Start New Assessment</Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
