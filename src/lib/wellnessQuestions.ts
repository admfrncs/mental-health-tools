export const sectionDisplayNames = [
  "Social",
  "Physical",
  "Intellectual",
  "Emotional",
  "Spiritual"
];

export const sections = [
  "Social (MDQ – Hirschfeld et al., 2000)",
  "Physical (BAI – Beck et al., 1988, PANSS – Kay et al., 1987)",
  "Intellectual (SSS-8 – Gierk et al., 2014, SSRI Discontinuation Syndrome – Rosenbaum et al., 1998)",
  "Emotional (PSQI – Buysse et al., 1989, Nightmare Distress & Sleep Disturbance – Krakow et al., 2002)",
  "Spiritual (BDI-II – Beck et al., 1996, BIS – Patton et al., 1995, ASRS – Kessler et al., 2005)"
];

export interface Question {
  section: number;
  title: string;
  text: string;
  options: { text: string; score: number }[];
}

export const questions: Question[] = 
[ 
  // Section 0: Social 
  { 
    "section": 0, 
    "title": "Healthy Relationships", 
    "text": "How would you describe your relationships with the important people in your life?", 
    "options": [ 
      { "text": "Strong and supportive", "score": 1 }, 
      { "text": "Somewhat positive", "score": 2 }, 
      { "text": "Strained", "score": 3 }, 
      { "text": "Isolated, disconnected", "score": 4 }, 
      { "text": "Toxic, harmful", "score": 5 } 
    ] 
  }, 
  { 
    "section": 0, 
    "title": "Life Balance", 
    "text": "I am able to balance work, play, school, and other aspects of my life.", 
    "options": [ 
      { "text": "Strongly Agree", "score": 1 }, 
      { "text": "Agree", "score": 2 }, 
      { "text": "Neutral", "score": 3 }, 
      { "text": "Disagree", "score": 4 }, 
      { "text": "Strongly Disagree", "score": 5 } 
    ] 
  }, 
  { 
    "section": 0, 
    "title": "Environment", 
    "text": "I feel content and safe in my environments (home, work, class, etc.).", 
    "options": [ 
      { "text": "Strongly Agree", "score": 1 }, 
      { "text": "Agree", "score": 2 }, 
      { "text": "Neutral", "score": 3 }, 
      { "text": "Disagree", "score": 4 }, 
      { "text": "Strongly Disagree", "score": 5 } 
    ] 
  }, 
  { 
    "section": 0, 
    "title": "Occupation & Finances", 
    "text": "How well are you able to manage your finances and afford necessities like food, bills, and housing?", 
    "options": [ 
      { "text": "Very well", "score": 1 }, 
      { "text": "Somewhat well", "score": 2 }, 
      { "text": "Struggling", "score": 3 }, 
      { "text": "In crisis", "score": 4 }, 
      { "text": "Completely overwhelmed", "score": 5 } 
    ] 
  }, 
  
  // Section 1: Physical Wellness 
  { 
    "section": 1, 
    "title": "Regular Exercise", 
    "text": "How often do you engage in physical activity to maintain strength, flexibility, and endurance?", 
    "options": [ 
      { "text": "Regularly", "score": 1 }, 
      { "text": "Occasionally", "score": 2 }, 
      { "text": "Rarely", "score": 3 }, 
      { "text": "Never", "score": 4 }, 
      { "text": "I have health restrictions", "score": 5 } 
    ] 
  }, 
  { 
    "section": 1, 
    "title": "Nutrition & Hydration", 
    "text": "How well do you maintain a balanced diet and stay hydrated?", 
    "options": [ 
      { "text": "Very well", "score": 1 }, 
      { "text": "Somewhat well", "score": 2 }, 
      { "text": "Poorly", "score": 3 }, 
      { "text": " I have difficulty with it", "score": 4 }, 
      { "text": " Not at all ", "score": 5 } 
    ] 
  }, 
  { 
    "section": 1, 
    "title": "Sleep Quality", 
    "text": "How would you describe your sleep quality and consistency?", 
    "options": [ 
      { "text": "Excellent", "score": 1 }, 
      { "text": "Good", "score": 2 }, 
      { "text": "Fair", "score": 3 }, 
      { "text": "Poor", "score": 4 }, 
      { "text": "Very poor", "score": 5 } 
    ] 
  }, 
  { 
    "section": 1, 
    "title": "Medical Problems", 
    "text": " Do you have any physical health conditions that require regular treatment?", 
    "options": [ 
      { "text": "None", "score": 1 }, 
      { "text": "Minor problems", "score": 2 }, 
      { "text": "Moderate problems", "score": 3 }, 
      { "text": "Significant problems", "score": 4 }, 
      { "text": "Debilitating problems", "score": 5 } 
    ] 
  }, 
  // Section 2: Intellectual Wellness 
  { 
    "section": 2, 
    "title": "Critical Thinking", 
    "text": "How well do you analyze information objectively and solve problems effectively?", 
    "options": [ 
      { "text": "Very well", "score": 1 }, 
      { "text": "Somewhat well", "score": 2 }, 
      { "text": "Poorly", "score": 3 }, 
      { "text": "I struggle with this", "score": 4 }, 
      { "text": "Not at all ", "score": 5 } 
    ] 
  }, 
  { 
    "section": 2, 
    "title": "Learning", 
    "text": "I seek personal growth by learning new skills.", 
    "options": [ 
      { "text": "Strongly Agree", "score": 1 }, 
      { "text": "Agree", "score": 2 }, 
      { "text": "Neutral", "score": 3 }, 
      { "text": "Disagree", "score": 4 }, 
      { "text": "Strongly Disagree", "score": 5 } 
    ] 
  }, 
  { 
    "section": 2, 
    "title": "Memory", 
    "text": "How would you describe your overall memory ability in daily life?", 
    "options": [ 
      { "text": "I rarely forget things", "score": 1 }, 
      { "text": "Sometimes forget things", "score": 2 }, 
      { "text": "Frequently forget things", "score": 3 }, 
      { "text": "Often forget things", "score": 4 }, 
      { "text": "I have significant memory issues", "score": 5 } 
    ] 
  }, 
  { 
    "section": 2, 
    "title": "Connection", 
    "text": "I stay informed about social, political and other current issues.", 
    "options": [ 
     { "text": "Strongly Agree", "score": 1 }, 
      { "text": "Agree", "score": 2 }, 
      { "text": "Neutral", "score": 3 }, 
      { "text": "Disagree", "score": 4 }, 
      { "text": "Strongly Disagree", "score": 5 } 
    ] 
  }, 
  // Section 3: Emotional Wellness 
  { 
    "section": 3, 
    "title": "Self-Awareness", 
    "text": "How well do you recognize and understand your emotions?", 
    "options": [ 
      { "text": "Very well", "score": 1 }, 
      { "text": "Somewhat well", "score": 2 }, 
      { "text": "Poorly", "score": 3 }, 
      { "text": "I have difficulty with this", "score": 4 }, 
      { "text": "Not at all", "score": 5 } 
    ] 
  }, 
  { 
    "section": 3, 
    "title": "Stress Management", 
    "text": "I find healthy ways to cope with stress (e.g. exercise, meditation, social support, self-care activities, etc.)", 
    "options": [ 
     { "text": "Strongly Agree", "score": 1 },  
      { "text": "Agree", "score": 2 },  
      { "text": "Neutral", "score": 3 },  
      { "text": "Disagree", "score": 4 },  
      { "text": "Strongly Disagree", "score": 5 } 
    ] 
  }, 
  { 
    "section": 3, 
    "title": "Emotional Regulation", 
    "text": "How well do you manage your emotions and express them in a healthy way?", 
    "options": [ 
      { "text": "Very well", "score": 1 }, 
      { "text": "Somewhat well", "score": 2 }, 
      { "text": "Poorly", "score": 3 }, 
      { "text": "Not at all", "score": 4 }, 
      { "text": "I often feel emotionally out of control", "score": 5 } 
    ] 
  }, 
  { 
    "section": 3, 
    "title": "Support Systems", 
    "text": "I am able to ask for assistance when I need it, either from friends and family, or professionals.", 
    "options": [ 
     { "text": "Strongly Agree", "score": 1 },  
      { "text": "Agree", "score": 2 },  
      { "text": "Neutral", "score": 3 },  
      { "text": "Disagree", "score": 4 },  
      { "text": "Strongly Disagree", "score": 5 } 
    ] 
  }, 
  // Section 4: Spiritual Wellness 
  { 
    "section": 4, 
    "title": "Faith & Belief", 
    "text": "How strong is your faith or spiritual belief in your daily life?", 
    "options": [ 
      { "text": "Very strong", "score": 1 }, 
      { "text": "Somewhat strong", "score": 2 }, 
      { "text": "Neutral", "score": 3 }, 
      { "text": " Weak ", "score": 4 }, 
      { "text": " Absent ", "score": 5 } 
    ] 
  }, 
  { 
    "section": 4, 
    "title": "Meaning & Purpose", 
    "text": "How clear is your sense of purpose or direction in life?", 
    "options": [ 
      { "text": "Very clear", "score": 1 }, 
      { "text": "Somewhat clear", "score": 2 }, 
      { "text": "Unclear", "score": 3 }, 
      { "text": "Absent", "score": 4 }, 
      { "text": "I feel lost and directionless", "score": 5 } 
    ] 
  }, 
  { 
    "section": 4, 
    "title": "Values & Decisions", 
    "text": "My values guide my decisions and actions.", 
    "options": [ 
      { "text": "Strongly agree", "score": 1 }, 
      { "text": "Agree", "score": 2 }, 
      { "text": "Neutral", "score": 3 }, 
      { "text": "Disagree", "score": 4 }, 
      { "text": "Strongly disagree", "score": 5 } 
    ] 
  }, 
  { 
    "section": 4, 
    "title": "Mindfulness & Reflection", 
    "text": "How often do you practice mindfulness or engage in reflective activities like meditation or prayer?", 
    "options": [ 
      { "text": "Daily", "score": 1 }, 
      { "text": "Weekly", "score": 2 }, 
      { "text": "Monthly", "score": 3 }, 
      { "text": "Rarely", "score": 4 }, 
      { "text": "Never", "score": 5 } 
    ] 
  }, 
  { 
    "section": 4, 
    "title": "Connection to Something Larger", 
    "text": "How often do you feel connected to something larger than yourself (e.g., nature, community, the universe)?", 
    "options": [ 
      { "text": "Daily", "score": 1 }, 
      { "text": "Weekly", "score": 2 }, 
      { "text": "Monthly", "score": 3 }, 
      { "text": "Rarely", "score": 4 }, 
      { "text": "Never", "score": 5 } 
    ] 
  } 
] 

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
