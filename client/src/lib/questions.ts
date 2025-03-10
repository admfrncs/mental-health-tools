// We'll create a separate array for section names without citations
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

export const questions = [
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
  // Section 2: Anxiety & Cognitive Functioning
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
    section: 1,
    text: "How would you rate your mental fog/forgetfulness?",
    options: [
      { text: "None", score: 1 },
      { text: "Mild (Occasional forgetfulness)", score: 2 },
      { text: "Moderate (Frequent lapses, affects focus)", score: 3 },
      { text: "Severe (Major difficulty completing thoughts/tasks)", score: 4 },
      { text: "Extreme (Inability to focus or remember)", score: 5 }
    ]
  },
  {
    section: 1,
    text: "How often do you experience intrusive thoughts/paranoia?",
    options: [
      { text: "Never", score: 1 },
      { text: "Rarely (Occasional thoughts)", score: 2 },
      { text: "Sometimes (Recurring but manageable)", score: 3 },
      { text: "Often (Distressing and intrusive)", score: 4 },
      { text: "Constantly (Overwhelming and debilitating)", score: 5 }
    ]
  },
  // Section 3: Physical Symptoms
  {
    section: 2,
    text: "How severe are your headaches/dizziness/lightheadedness?",
    options: [
      { text: "None", score: 1 },
      { text: "Mild (Occasional discomfort)", score: 2 },
      { text: "Moderate (Frequent, somewhat disruptive)", score: 3 },
      { text: "Severe (Impacts daily activities)", score: 4 },
      { text: "Extreme (Disabling)", score: 5 }
    ]
  },
  {
    section: 2,
    text: "How often do you experience brain zaps?",
    options: [
      { text: "None", score: 1 },
      { text: "Rarely (Brief, occasional)", score: 2 },
      { text: "Sometimes (Moderate discomfort)", score: 3 },
      { text: "Often (Strong, disrupting tasks)", score: 4 },
      { text: "Constantly (Severe, unbearable)", score: 5 }
    ]
  },
  {
    section: 2,
    text: "How severe are your nausea/digestive issues/appetite changes?",
    options: [
      { text: "No issues", score: 1 },
      { text: "Mild (Occasional discomfort)", score: 2 },
      { text: "Moderate (Frequent but manageable)", score: 3 },
      { text: "Severe (Regular distress, affects eating)", score: 4 },
      { text: "Extreme (Severe pain, major appetite loss)", score: 5 }
    ]
  },
  {
    section: 2,
    text: "How severe are your body aches/fatigue/flu-like symptoms?",
    options: [
      { text: "None", score: 1 },
      { text: "Mild (Occasional discomfort)", score: 2 },
      { text: "Moderate (Frequent aches, fatigue)", score: 3 },
      { text: "Severe (Constant pain, interferes with tasks)", score: 4 },
      { text: "Extreme (Disabling, bedridden)", score: 5 }
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
      { text: "Fatigued", score: 4 },
      { text: "Extremely exhausted", score: 5 }
    ]
  },
  {
    section: 3,
    text: "How would you rate your energy level?",
    options: [
      { text: "High (Fully energized)", score: 1 },
      { text: "Moderate (Some tiredness)", score: 2 },
      { text: "Low (Frequently fatigued)", score: 3 },
      { text: "Very low (Struggle to stay awake)", score: 4 },
      { text: "No energy at all", score: 5 }
    ]
  },
  // Section 5: Behavioral & Social Symptoms
  {
    section: 4,
    text: "How would you rate your social withdrawal?",
    options: [
      { text: "Not at all", score: 1 },
      { text: "Occasionally avoid people", score: 2 },
      { text: "Often avoid social situations", score: 3 },
      { text: "Isolate frequently", score: 4 },
      { text: "Completely withdrawn", score: 5 }
    ]
  },
  {
    section: 4,
    text: "How would you rate your impulsivity?",
    options: [
      { text: "Never", score: 1 },
      { text: "Occasionally act without thinking", score: 2 },
      { text: "Often make impulsive decisions", score: 3 },
      { text: "Frequently take risks or react strongly", score: 4 },
      { text: "Constantly act without control", score: 5 }
    ]
  },
  {
    section: 4,
    text: "How effective are your coping behaviors?",
    options: [
      { text: "Very effective (Use healthy coping skills)", score: 1 },
      { text: "Mostly effective (Some unhealthy coping)", score: 2 },
      { text: "Neutral (Struggle but manage)", score: 3 },
      { text: "Mostly ineffective (Rely on avoidance or negative habits)", score: 4 },
      { text: "Not at all effective (Severe distress, no coping strategies)", score: 5 }
    ]
  },
  {
    section: 4,
    text: "How would you rate your difficulty completing tasks?",
    options: [
      { text: "None (Fully productive)", score: 1 },
      { text: "Mild (Occasional difficulty)", score: 2 },
      { text: "Moderate (Struggle to stay on task)", score: 3 },
      { text: "Severe (Regularly unable to finish tasks)", score: 4 },
      { text: "Extreme (Completely unable to function)", score: 5 }
    ]
  }
];

export const getScoreRating = (score: number) => {
  if (score <= 8) return "Minimal";
  if (score <= 12) return "Mild";
  if (score <= 16) return "Moderate";
  if (score <= 20) return "Severe";
  return "Extreme";
};