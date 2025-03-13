"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "src/components/ui/accordion";
import { Button } from "src/components/ui/button";
import { Card, CardContent } from "src/components/ui/card";
import { Checkbox } from "src/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "src/components/ui/select";
import { symptomCategories, severityLevels } from "src/lib/symptoms";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "src/lib/queryClient";

type SelectedSymptom = {
  category: string;
  symptom: string;
  severity: string;
};

const SymptomTracker = () => {
  const router = useRouter();
  const [selectedSymptoms, setSelectedSymptoms] = useState<SelectedSymptom[]>([]);
  const [showResults, setShowResults] = useState(false);

  const saveMutation = useMutation({
    mutationFn: async (data: SelectedSymptom[]) => {
      console.log("Saving data:", data);
      return await apiRequest("POST", "/api/symptom-assessments", data);
    },
  });

  const toggleSymptom = (category: string, symptom: string) => {
    const exists = selectedSymptoms.find((s) => s.category === category && s.symptom === symptom);

    if (exists) {
      setSelectedSymptoms(selectedSymptoms.filter((s) => s !== exists));
    } else {
      setSelectedSymptoms([...selectedSymptoms, { category, symptom, severity: "Mild" }]);
    }
  };

  const updateSeverity = (symptom: SelectedSymptom, severity: string) => {
    setSelectedSymptoms(
      selectedSymptoms.map((s) => (s === symptom ? { ...s, severity } : s))
    );
  };

  const exportToWord = () => {
    const content = `
Mental Health Symptom Assessment
Date: ${new Date().toLocaleDateString()}

Selected Symptoms:
${selectedSymptoms.map((s) => `${s.category}\n  - ${s.symptom} (Severity: ${s.severity})`).join("\n")}
    `;

    const blob = new Blob([content], { type: "application/msword" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "symptom-assessment.doc";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleFinish = () => {
    if (selectedSymptoms.length === 0) {
      toast.error("Please select at least one symptom before completing the assessment.");
      return;
    }

    console.log("Sending data to API:", selectedSymptoms);

    saveMutation.mutate(selectedSymptoms, {
      onSuccess: async (res) => {
        const data = await res.json();
        console.log("API response data:", data);
        setShowResults(true);
      },
      onError: (error) => {
        console.error("API error:", error);
        toast.error("An error occurred while saving the assessment.");
      },
    });
  };

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-muted p-4">
        <Card className="max-w-2xl mx-auto mt-8">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-6">Assessment Results</h2>

            {symptomCategories.map((category) => {
              const categorySymptoms = selectedSymptoms.filter((s) => s.category === category.name);
              if (categorySymptoms.length === 0) return null;

              return (
                <div key={category.name} className="mb-6">
                  <h3 className="font-semibold mb-2">{category.name}</h3>
                  {categorySymptoms.map((s) => (
                    <div key={s.symptom} className="ml-4 mb-2">
                      <p>
                        {s.symptom} - {s.severity}
                      </p>
                    </div>
                  ))}
                </div>
              );
            })}

            <div className="flex gap-4 mt-8">
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
          <h2 className="text-2xl font-bold mb-6">Symptom Assessment</h2>
          <p className="text-muted-foreground mb-6">Please check all symptoms you have experienced in the past 6 months</p>

          <Accordion type="single" collapsible className="w-full">
            {symptomCategories.map((category) => (
              <AccordionItem key={category.name} value={category.name}>
                <AccordionTrigger>{category.name}</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    {category.symptoms.map((symptom) => {
                      const selected = selectedSymptoms.find((s) => s.category === category.name && s.symptom === symptom);

                      return (
                        <div key={symptom} className="flex items-center gap-4">
                          <Checkbox checked={!!selected} onCheckedChange={() => toggleSymptom(category.name, symptom)} />
                          <span className="flex-grow">{symptom}</span>
                          {selected && (
                            <Select value={selected.severity} onValueChange={(value) => updateSeverity(selected, value)}>
                              <SelectTrigger className="w-[100px]">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                {severityLevels.map((level) => (
                                  <SelectItem key={level} value={level}>
                                    {level}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <Button className="mt-8 w-full bg-blue-500 text-white hover:bg-blue-600 disabled:bg-gray-300" onClick={handleFinish} disabled={selectedSymptoms.length === 0}>
            Complete Assessment
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SymptomTracker;
