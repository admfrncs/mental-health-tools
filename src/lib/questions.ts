export const sectionDisplayNames = [
  "Mood & Emotional Regulation",
  "Anxiety & Cognitive Functioning",
  "Physical Symptoms",
  "Sleep & Energy",
  "Behavioral & Social Symptoms"
];

export const sections = [
  "Mood & Emotional Regulation (MDQ – Hirschfeld et al., 2000)",
  "Anxiety & Cognitive Functioning (BAI – Beck et al., 1988, PANSS – Kay et al., 1987)",
  "Physical Symptoms (SSS-8 – Gierk et al., 2014, SSRI Discontinuation Syndrome – Rosenbaum et al., 1998)",
  "Sleep & Energy (PSQI – Buysse et al., 1989, Nightmare Distress & Sleep Disturbance – Krakow et al., 2002)",
  "Behavioral & Social Symptoms (BDI-II – Beck et al., 1996, BIS – Patton et al., 1995, ASRS – Kessler et al., 2005)"
];

export interface Question {
  section: number;
  text: string;
  options: { text: string; score: number }[];
}

export const questions: Question[] = [
   // Section 1: Mood & Emotional Regulation
  {
    section: 0,
    text: "How would you rate your overall mood?",
    options: [
      { text: "Very Positive", score: 1 },
      { text: "Somewhat Positive", score: 2 },
      { text: "Neutral", score: 3 },
      { text: "Somewhat Negative", score: 4 },
      { text: "Very Negative", score: 5 }
    ]
  },
  {
    section: 0,
    text: "How frequently do you experience mood swings?",
    options: [
      { text: "None", score: 1 },
      { text: "Mild", score: 2 },
      { text: "Moderate", score: 3 },
      { text: "Severe", score: 4 },
      { text: "Extreme", score: 5 }
    ]
  },
  {
    section: 0,
    text: "How would you rate your level of irritability/agitation?",
    options: [
      { text: "Not at all", score: 1 },
      { text: "A little", score: 2 },
      { text: "Moderate", score: 3 },
      { text: "Severe", score: 4 },
      { text: "Extreme", score: 5 }
    ]
  },
  {
    section: 0,
    text: "How would you describe your emotional numbness/detachment?",
    options: [
      { text: "Not at all", score: 1 },
      { text: "Slightly", score: 2 },
      { text: "Moderately", score: 3 },
      { text: "Severe", score: 4 },
      { text: "Extreme", score: 5 }
    ]
  },

  // Section 2: Anxiety & Cognitive Functioning
  {
    section: 1,
    text: "How would you rate your anxiety level?",
    options: [
      { text: "None", score: 1 },
      { text: "Mild", score: 2 },
      { text: "Moderate", score: 3 },
      { text: "Severe", score: 4 },
      { text: "Extreme", score: 5 }
    ]
  },
  {
    section: 1,
    text: "How often do you experience strong waves of fear?",
    options: [
      { text: "Never", score: 1 },
      { text: "Rarely", score: 2 },
      { text: "Sometimes", score: 3 },
      { text: "Often", score: 4 },
      { text: "Constantly", score: 5 }
    ]
  },
  {
    section: 1,
    text: "How would you rate your mental fog/forgetfulness?",
    options: [
      { text: "None", score: 1 },
      { text: "Mild", score: 2 },
      { text: "Moderate", score: 3 },
      { text: "Severe", score: 4 },
      { text: "Extreme", score: 5 }
    ]
  },
  {
    section: 1,
    text: "How often do you experience intrusive thoughts/paranoia?",
    options: [
      { text: "Never", score: 1 },
      { text: "Rarely", score: 2 },
      { text: "Sometimes", score: 3 },
      { text: "Often", score: 4 },
      { text: "Constantly", score: 5 }
    ]
  },

  // Section 3: Physical Symptoms
  {
    section: 2,
    text: "How severe are your headaches/dizziness/lightheadedness?",
    options: [
      { text: "None", score: 1 },
      { text: "Mild", score: 2 },
      { text: "Moderate", score: 3 },
      { text: "Severe", score: 4 },
      { text: "Extreme", score: 5 }
    ]
  },
  {
    section: 2,
    text: "How often do you experience brain zaps?",
    options: [
      { text: "None", score: 1 },
      { text: "Rarely", score: 2 },
      { text: "Sometimes", score: 3 },
      { text: "Often", score: 4 },
      { text: "Constantly", score: 5 }
    ]
  },
  {
    section: 2,
    text: "How severe are your nausea/digestive issues/appetite changes?",
    options: [
      { text: "No issues", score: 1 },
      { text: "Mild", score: 2 },
      { text: "Moderate", score: 3 },
      { text: "Severe", score: 4 },
      { text: "Extreme", score: 5 }
    ]
  },
  {
    section: 2,
    text: "How severe are your body aches/fatigue/flu-like symptoms?",
    options: [
      { text: "None", score: 1 },
      { text: "Mild", score: 2 },
      { text: "Moderate", score: 3 },
      { text: "Severe", score: 4 },
      { text: "Extreme", score: 5 }
    ]
  },

  // Section 4: Sleep & Energy
  {
    section: 3,
    text: "How many hours of sleep do you typically get?",
    options: [
      { text: "7+ hours", score: 1 },
      { text: "5-7 hours", score: 2 },
      { text: "3-5 hours", score: 3 },
      { text: "1-3 hours", score: 4 },
      { text: "None", score: 5 }
    ]
  },
  {
    section: 3,
    text: "How often do you experience nightmares/vivid dreams?",
    options: [
      { text: "None", score: 1 },
      { text: "Rarely", score: 2 },
      { text: "Sometimes", score: 3 },
      { text: "Often", score: 4 },
      { text: "Every night", score: 5 }
    ]
  },
  {
    section: 3,
    text: "How rested do you feel upon waking?",
    options: [
      { text: "Fully rested", score: 1 },
      { text: "Somewhat rested", score: 2 },
      { text: "Neutral", score: 3 },
      { text: "Tired", score: 4 },
      { text: "Extremely tired", score: 5 }
    ]
  },
  {
    section: 3,
    text: "How much energy do you have throughout the day?",
    options: [
      { text: "Plenty of energy", score: 1 },
      { text: "Some energy", score: 2 },
      { text: "Neutral", score: 3 },
      { text: "Low energy", score: 4 },
      { text: "Exhausted", score: 5 }
    ]
  },

  // Section 5: Behavioral & Social Symptoms
  {
    section: 4,
    text: "How socially withdrawn do you feel?",
    options: [
      { text: "Not at all", score: 1 },
      { text: "Mild", score: 2 },
      { text: "Moderate", score: 3 },
      { text: "Severe", score: 4 },
      { text: "Extreme", score: 5 }
    ]
  },
  {
    section: 4,
    text: "How would you rate your ability to function at work or school?",
    options: [
      { text: "Fully functional", score: 1 },
      { text: "Mild difficulty", score: 2 },
      { text: "Moderate difficulty", score: 3 },
      { text: "Severe difficulty", score: 4 },
      { text: "Unable to function", score: 5 }
    ]
  },
  {
    section: 4,
    text: "How frequently do you engage in self-destructive behaviors?",
    options: [
      { text: "Never", score: 1 },
      { text: "Rarely", score: 2 },
      { text: "Sometimes", score: 3 },
      { text: "Often", score: 4 },
      { text: "Constantly", score: 5 }
    ]
  },
  {
    section: 4,
    text: "How would you rate your ability to manage day-to-day tasks?",
    options: [
      { text: "Easily manage tasks", score: 1 },
      { text: "Manage with occasional difficulty", score: 2 },
      { text: "Manage with moderate difficulty", score: 3 },
      { text: "Struggle to complete tasks", score: 4 },
      { text: "Unable to complete tasks", score: 5 }
    ]
  }
];

// This function calculates the score for each section
export const calculateSectionScores = (responses: number[]): number[] => {
  const sectionScores = new Array(sections.length).fill(0);

  responses.forEach((score, index) => {
    const sectionIndex = questions[index].section;
    sectionScores[sectionIndex] += score;
  });

  return sectionScores;
};

// This function provides a rating based on the score for each section
export const getScoreRating = (score: number): string => {
  if (score <= 10) return "Low";
  if (score <= 20) return "Moderate";
  if (score <= 30) return "High";
  return "Very High";
};
