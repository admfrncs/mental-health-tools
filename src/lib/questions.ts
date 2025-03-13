// src/lib/questions.ts

export const sectionDisplayNames = [
  "Mood & Emotional Regulation",
  "Anxiety & Cognitive Functioning",
  "Physical Symptoms",
  "Sleep & Energy",
  "Behavioral & Social Symptoms"
];

export const sections = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
  [17, 18, 19, 20]
];

export const questions = [
  { text: "How do you feel today?", options: [{ text: "Happy", score: 1 }, { text: "Sad", score: 2 }] },
  { text: "How well do you handle stress?", options: [{ text: "Very well", score: 1 }, { text: "Not well", score: 3 }] },
  // more questions go here
];
