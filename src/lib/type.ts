// Severity Level for symptom scoring
export type SeverityLevel = "Mild" | "Moderate" | "Severe";

// Symptom Category (e.g., "Mood", "Cognitive", etc.)
export type SymptomCategory = {
  name: string;
  symptoms: string[]; // Array of symptom descriptions for this category
};

// Selected Symptom with severity level
export type SelectedSymptom = {
  category: string; // The category the symptom belongs to (e.g., "Mood", "Anxiety")
  symptom: string;  // A specific symptom (e.g., "Difficulty sleeping", "Feeling hopeless")
  severity: SeverityLevel; // Severity level of the symptom
};

// **Symptom Assessment** (Used for tracking symptom levels over time)
export type SymptomAssessment = {
  id: string; // Unique ID for tracking (UUID recommended)
  date: string; // Date of the assessment (e.g., "2025-03-10")
  symptoms: SelectedSymptom[]; // List of selected symptoms and their severity levels
};

// **Mood Assessment** (Used for tracking mood-related questions)
export type MoodAssessment = {
  id: string; // Unique ID for tracking (UUID recommended)
  date: string; // Date of the assessment (e.g., "2025-03-10")
  responses: number[]; // Array of responses to mood-related questions
  overallScore: number; // Overall score based on the responses
  sectionScores: number[]; // Section-wise scores (e.g., scores for Mood, Anxiety, etc.)
};

