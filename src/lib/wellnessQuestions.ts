// Define types for responses and sections
interface Question {
  id: string;
  text: string;
  options: { value: number; label: string }[]; // assuming options contain value (score) and label
}

interface Section {
  name: string;
  questions: Question[];
}

// Example array of questions and sections
export const questions: Section[] = [
  {
    name: "Physical Health",
    questions: [
      {
        id: "q1",
        text: "How would you rate your physical health?",
        options: [
          { value: 1, label: "Very Poor" },
          { value: 2, label: "Poor" },
          { value: 3, label: "Average" },
          { value: 4, label: "Good" },
          { value: 5, label: "Excellent" },
        ],
      },
      {
        id: "q2",
        text: "Do you experience any physical discomfort?",
        options: [
          { value: 1, label: "Always" },
          { value: 2, label: "Often" },
          { value: 3, label: "Sometimes" },
          { value: 4, label: "Rarely" },
          { value: 5, label: "Never" },
        ],
      },
    ],
  },
  {
    name: "Mental Health",
    questions: [
      {
        id: "q3",
        text: "How often do you feel anxious?",
        options: [
          { value: 1, label: "Always" },
          { value: 2, label: "Often" },
          { value: 3, label: "Sometimes" },
          { value: 4, label: "Rarely" },
          { value: 5, label: "Never" },
        ],
      },
      {
        id: "q4",
        text: "Do you often feel depressed?",
        options: [
          { value: 1, label: "Always" },
          { value: 2, label: "Often" },
          { value: 3, label: "Sometimes" },
          { value: 4, label: "Rarely" },
          { value: 5, label: "Never" },
        ],
      },
    ],
  },
  // Add more sections as needed
];

// Example array of section display names
export const sectionDisplayNames: string[] = [
  "Physical Health",
  "Mental Health",
  // Add more sections as needed
];

// Function to calculate scores for each section
export const calculateSectionScores = (responses: Record<string, any>) => {
  const sectionScores: Record<string, number> = {};

  // Iterate through each section
  questions.forEach((section) => {
    let sectionScore = 0;
    let questionCount = 0;

    // Iterate through each question in the section
    section.questions.forEach((question) => {
      const userResponse = responses[question.id];
      if (userResponse !== undefined) {
        sectionScore += userResponse; // Add the score for this question
        questionCount++;
      }
    });

    // Calculate average score for the section (if there were any responses)
    if (questionCount > 0) {
      sectionScores[section.name] = sectionScore / questionCount;
    } else {
      sectionScores[section.name] = 0; // Default to 0 if no responses
    }
  });

  return sectionScores;
};
