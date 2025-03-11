export type SeverityLevel = "Mild" | "Moderate" | "Severe";

export type SymptomCategory = {
  name: string;
  symptoms: string[];
};

export type SelectedSymptom = {
  category: string;
  symptom: string;
  severity: SeverityLevel;
};

export type SymptomAssessment = {
  id: string; // Unique ID for tracking (UUID recommended)
  date: string; // Store the date of the assessment
  symptoms: SelectedSymptom[];
};
