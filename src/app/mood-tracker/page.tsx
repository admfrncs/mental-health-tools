'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from 'src/components/ui/button';
import { Card, CardContent } from 'src/components/ui/card';
import { Calendar } from 'src/components/ui/calendar';
import { PopoverTrigger, PopoverContent } from 'src/components/ui/popover';
import { CalendarIcon } from 'lucide-react';
import { sections, sectionDisplayNames, questions, getScoreRating } from 'src/lib/questions';
import { toast } from 'react-toastify';
import { submitAnswer } from 'src/lib/submit-answer';
import { calculateResults } from 'src/lib/calculate-results';
import { format, parse } from 'date-fns';
import { Popover, OverlayTrigger } from 'react-bootstrap';

export default function MoodTracker() {
  const router = useRouter();
  const [date, setDate] = useState<string>(format(new Date(), 'PPP'));
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [results, setResults] = useState<{ sectionScores: number[]; overallScore: number } | null>(null);

  useEffect(() => {
    console.log("Initialized Date:", date);
  }, [date]);

  const handleAnswer = async (score: number) => {
    try {
      const userId = 1; // Adjust as needed
      if (!userId || currentQuestion === undefined || score === undefined || !date) {
        console.error("Missing required fields:", { userId, currentQuestion, score, date });
        toast.error("Invalid response data. Please try again.");
        return;
      }

      console.log("Submitting answer with:", { userId, questionId: currentQuestion, score, date });
      await submitAnswer({ userId, questionId: currentQuestion, score, date });

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
      } else {
        console.log("Fetching results...");
        const results = await calculateResults(userId);
        setResults(results);
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
    setDate(format(new Date(), 'PPP'));
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted p-4">
      <Card className="max-w-2xl mx-auto mt-8">
        <CardContent className="p-6">
          <div className="mb-6">
            <h2 className="text-lg font-medium mb-2">Select Date</h2>
            <OverlayTrigger
              trigger="click"
              placement="bottom"
              overlay={
                <Popover id="popover-calendar">
                  <Popover.Body>
                    <Calendar
                      mode="single"
                      selected={parse(date, 'PPP', new Date())}
                      onSelect={(newDate) => newDate && setDate(format(newDate, 'PPP'))}
                      initialFocus
                      aria-label="Calendar"
                    />
                  </Popover.Body>
                </Popover>
              }
            >
              <Button variant="outline" className="w-full justify-start text-left font-normal" aria-label="Select date">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date}
              </Button>
            </OverlayTrigger>
          </div>
          <div className="mt-8">
            <p className="text-sm text-muted-foreground mb-2">Section: {sections[Math.floor(currentQuestion / 4)]}</p>
            <h3 className="text-xl font-semibold mb-4">{questions[currentQuestion]?.text || 'Question not available'}</h3>
            <div className="grid gap-3">
              {questions[currentQuestion]?.options?.map((option, index) => (
                <Button key={index} variant="outline" className="justify-start h-auto py-3" onClick={() => handleAnswer(option.score)}>
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
