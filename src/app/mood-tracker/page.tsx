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
import { format, parse } from "date-fns";

// Assume userId is available through context or props
export default function MoodTracker() {
  const router = useRouter();
  const [date, setDate] = useState<string>(format(new Date(), "PPP"));
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [responses, setResponses] = useState<number[]>(new Array(questions.length).fill(0));
  const [showResults, setShowResults] = useState<boolean>(false);
  const [results, setResults] = useState<{ sectionScores: number[]; overallScore: number } | null>(null);

  // Retrieve actual userId from context or props
  const userId = "userId_placeholder"; // Replace with actual logic to get userId, e.g. from context or props

  useEffect(() => {
    console.log("Initialized Date:", date);
  }, [date]);

  const handleAnswer = async (answerId: number) => {
    try {
      const updatedResponses = [...responses];
      updatedResponses[currentQuestion] = answerId;
      setResponses(updatedResponses);

      console.log("Updated Responses:", updatedResponses); // Log the updated responses before sending to API

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
      } else {
        console.log("Fetching results...");
        const res = await fetch("/api/mood-assessments", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId,
            responses: updatedResponses,
            date,
          }),
        });

        if (!res.ok) {
          throw new Error("Failed to figure out the results");
        }

        const data = await res.json();

        console.log("API Response:", data); // Log the response from the API

        if (data.error) {
          throw new Error(data.error);
        }

        setResults(data);
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
                {questions[currentQuestion]?.text}
              </h2>
              <ul>
                {questions[currentQuestion]?.options.map((option, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => handleAnswer(option.id)}
                      className="text-blue-600 hover:underline"
                    >
                      {option.text}
                    </button>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <div>
              <h3 className="font-semibold">Section Scores</h3>
              <ul>
                {results?.sectionScores.map((score, index) => (
                  <li key={index}>
                    Section {index + 1}: {score}
                  </li>
                ))}
              </ul>
              <h3 className="font-semibold mt-4">Overall Score</h3>
              <p>{results?.overallScore}</p>
            </div>
          )}

          <div className="mt-8">
            <Button onClick={startNewAssessment}>Start New Assessment</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
