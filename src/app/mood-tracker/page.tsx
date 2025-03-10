'use client'; // Add this directive to mark the file as a client component

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Fixed import for App Router
import { Button } from "src/components/ui/button";
import { Card, CardContent } from "src/components/ui/card";
import { sections, sectionDisplayNames, questions, getScoreRating } from "src/lib/questions";
import { useToast } from "src/components/ui/toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "src/lib/queryClient";
import * as XLSX from "xlsx";
import { format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "src/components/ui/popover";
import { Calendar } from "src/components/ui/calendar";
import { CalendarIcon } from "lucide-react";

export default function MoodTracker() {
  const router = useRouter();
  const { toast } = useToast();
  const [date, setDate] = useState<string>(format(new Date(), "PPP"));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const saveMutation = useMutation({
    mutationFn: async (data: any) => {
      return await apiRequest("POST", "/api/mood-assessments", data);
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to save assessment data",
        variant: "destructive",
      });
    },
  });

  const handleAnswer = (score: number) => {
    const newResponses = [...responses, score];
    setResponses(newResponses);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateSectionScores = () => {
    const sectionScores = new Array(5).fill(0);
    responses.forEach((score, index) => {
      const sectionIndex = Math.floor(index / 4);
      sectionScores[sectionIndex] += score;
    });
    return sectionScores;
  };

  const calculateOverallScore = (sectionScores: number[]) => {
    return sectionScores.reduce((acc, score) => acc + score, 0);
  };

  const startNewAssessment = () => {
    setCurrentQuestion(0);
    setResponses([]);
    setShowResults(false);
    setDate(format(new Date(), "PPP"));
    router.push("/"); // Navigate back to home page
  };

  const exportToExcel = async () => {
    if (responses.length === 0) {
      toast({
        title: "Error",
        description: "Please complete the assessment before exporting.",
        variant: "destructive",
      });
      return;
    }

    const sectionScores = calculateSectionScores();
    const overallScore = calculateOverallScore(sectionScores);

    try {
      await saveMutation.mutateAsync({
        date,
        sectionScores,
        overallScore,
        responses,
      });

      const wb = XLSX.utils.book_new();
      const wsData = [
        ["Date", new Date().toISOString()],
        ["Overall Score", overallScore],
        ...sectionScores.map((score, index) => [
          `Section ${index + 1} Score`,
          score,
        ]),
      ];

      const ws = XLSX.utils.aoa_to_sheet(wsData);
      XLSX.utils.book_append_sheet(wb, ws, "Assessment Results");
      XLSX.writeFile(wb, `mental-health-assessment-${new Date().toISOString()}.xlsx`);

      toast({
        title: "Success",
        description: "Assessment data exported successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to export assessment data",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    // Reset responses on new assessment
    setResponses([]);
  }, [currentQuestion]);

  if (showResults) {
    const sectionScores = calculateSectionScores();
    const overallScore = calculateOverallScore(sectionScores);

    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-muted p-4">
        <Card className="max-w-2xl mx-auto mt-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-6">Assessment Results</h2>

            <div className="space-y-4">
              <div className="p-4 bg-primary/10 rounded-lg">
                <h3 className="font-semibold">Overall Score: {overallScore}</h3>
                <p className="text-sm text-muted-foreground">
                  Rating: {getScoreRating(overallScore)}
                </p>
              </div>

              {sectionScores.map((score, index) => (
                <div key={index} className="p-4 bg-muted rounded-lg">
                  <h4 className="font-medium">{sectionDisplayNames[index]}</h4>
                  <p className="text-sm">Score: {score}</p>
                  <p className="text-sm text-muted-foreground">
                    Rating: {getScoreRating(score)}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex gap-4 mt-8">
              <Button onClick={exportToExcel}>Export to Excel</Button>
              <Button variant="outline" onClick={startNewAssessment}>
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
          <div className="mb-6">
            <h2 className="text-lg font-medium mb-2">Select Date</h2>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal"
                  aria-label="Select date"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={new Date(date)}
                  onSelect={(newDate) => newDate && setDate(format(newDate, "PPP"))}
                  initialFocus
                  aria-label="Calendar"
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="mt-8">
            <p className="text-sm text-muted-foreground mb-2">
              Section: {sections[Math.floor(currentQuestion / 4)]}
            </p>
            <h3 className="text-xl font-semibold mb-4">
              {questions[currentQuestion].text}
            </h3>

            <div className="grid gap-3">
              {questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="justify-start h-auto py-3"
                  onClick={() => handleAnswer(option.score)}
                  aria-label={`Select answer: ${option.text}`}
                >
                  {option.text}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
