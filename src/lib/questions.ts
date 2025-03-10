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
      { text: "Mild (Occasionally noticeable)", score: 2 },
      { text: "Moderate (Frequent but manageable)", score: 3 },
      { text: "Severe (Interferes with daily life)", score: 4 },
      { text: "Extreme (Significant distress or impairment)", score: 5 }
    ]
  },
  {
    section: 0,
    text: "How would you rate your level of irritability/agitation?",
    options: [
      { text: "Not at all", score: 1 },
      { text: "A little (Occasionally)", score: 2 },
      { text: "Moderate (Noticeable, but manageable)", score: 3 },
      { text: "Severe (Affects relationships/work)", score: 4 },
      { text: "Extreme (Causes outbursts or major distress)", score: 5 }
    ]
  },
  {
    section: 0,
    text: "How would you describe your emotional numbness/detachment?",
    options: [
      { text: "Not at all", score: 1 },
      { text: "Slightly (Occasionally feel disconnected)", score: 2 },
      { text: "Moderately (Frequent difficulty feeling emotions)", score: 3 },
      { text: "Severe (Feel mostly detached from life/others)", score: 4 },
      { text: "Extreme (Completely disconnected from emotions or people)", score: 5 }
    ]
  },
  {
    section: 1,
    text: "How would you rate your anxiety level?",
    options: [
      { text: "None", score: 1 },
      { text: "Mild (Occasional nervousness)", score: 2 },
      { text: "Moderate (Frequent worry, some physical symptoms)", score: 3 },
      { text: "Severe (Persistent worry, physical symptoms interfere with life)", score: 4 },
      { text: "Extreme (Panic attacks, constant distress)", score: 5 }
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
    section: 2,
    text: "How often do you experience physical symptoms (e.g., headaches, dizziness)?",
    options: [
      { text: "Never", score: 1 },
      { text: "Rarely", score: 2 },
      { text: "Sometimes", score: 3 },
      { text: "Often", score: 4 },
      { text: "Constantly", score: 5 }
    ]
  },
  {
    section: 2,
    text: "How would you rate your level of discomfort from physical symptoms?",
    options: [
      { text: "None", score: 1 },
      { text: "Mild", score: 2 },
      { text: "Moderate", score: 3 },
      { text: "Severe", score: 4 },
      { text: "Extreme", score: 5 }
    ]
  },
  {
    section: 3,
    text: "How would you rate your quality of sleep?",
    options: [
      { text: "Excellent", score: 1 },
      { text: "Good", score: 2 },
      { text: "Fair", score: 3 },
      { text: "Poor", score: 4 },
      { text: "Very Poor", score: 5 }
    ]
  },
  {
    section: 3,
    text: "How frequently do you experience nightmares?",
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
    text: "How often do you experience social withdrawal?",
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
    text: "How would you rate your level of engagement in daily activities?",
    options: [
      { text: "Very Engaged", score: 1 },
      { text: "Somewhat Engaged", score: 2 },
      { text: "Neutral", score: 3 },
      { text: "Somewhat Disengaged", score: 4 },
      { text: "Very Disengaged", score: 5 }
    ]
  }
];

export const getScoreRating = () => {
  // Your implementation here
};
