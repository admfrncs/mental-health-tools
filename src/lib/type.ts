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

export type SymptomAssessment = SelectedSymptom[];
