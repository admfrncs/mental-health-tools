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

export default function MoodTracker() {
  const router = useRouter();
  const [date, setDate] = useState<string>(format(new Date(), "PPP"));
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [responses, setResponses] = useState<number[]>(new Array(questions.length).fill(0));
  const [showResults, setShowResults] = useState<boolean>(false);
  const [results, setResults] = useState<{ sectionScores: number[]; totalScore: number } | null>(null);

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
        console.log("Submitting responses...");
        const userId = "test-user-id"; // Replace with actual user ID logic

        await fetch("/api/route", {
          method: "POST",
          body: JSON.stringify({ userId, responses: updatedResponses }),
          headers: { "Content-Type": "application/json" },
        });

        console.log("Fetching results...");
        const res = await fetch("/api/route", {
          method: "POST",
          body: JSON.stringify({ userId }),
          headers: { "Content-Type": "application/json" },
        });

        if (!res.ok) throw new Error("Failed to fetch results");

        const calculatedResults = await res.json();
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
              <h2 className="text-lg font-semibold mb-4">{questions[currentQuestion].text}</h2>
              {questions[currentQuestion].options.map((option, index) => (
                <Button key={index} variant="outline" onClick={() => handleAnswer(option.score)}>
                  {option.text}
                </Button>
              ))}
            </>
          ) : (
            <>
              <h2 className="text-lg font-semibold mb-4">Results</h2>
              {sections.map((section, index) => (
                <p key={index}>{sectionDisplayNames[index]}: {results?.sectionScores[index]}</p>
              ))}
              <p className="font-bold">Overall Score: {results?.totalScore}</p>
              <Button onClick={startNewAssessment}>Start New Assessment</Button>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
