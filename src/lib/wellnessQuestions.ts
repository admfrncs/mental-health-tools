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

export const questions: Question[] = [
   
    // Section 0: Social Wellness
    {
      section: 0,
      title: "Healthy Relationships",
      text: "How would you describe your relationships with the important people in your life?",
      options: [
        { text: "Strong and supportive", score: 1 },
        { text: "Somewhat positive", score: 2 },
        { text: "Strained", score: 3 },
        { text: "Isolated, disconnected", score: 4 }
      ]
    },
    {
      section: 0,
      title: "Effective Communication",
      text: "How effectively do you express your thoughts and feelings while listening to others?",
      options: [
        { text: "Very effectively", score: 1 },
        { text: "Somewhat effectively", score: 2 },
        { text: "Ineffectively", score: 3 },
        { text: "Poorly", score: 4 }
      ]
    },
    {
      section: 0,
      title: "Community Engagement",
      text: "How involved are you in social activities, volunteering, or contributing to your community?",
      options: [
        { text: "Very involved", score: 1 },
        { text: "Somewhat involved", score: 2 },
        { text: "Rarely involved", score: 3 },
        { text: "Not involved", score: 4 }
      ]
    },
    {
      section: 0,
      title: "Occupation & Finances",
      text: "How well are you able to manage your finances and afford necessities like food, bills, and housing?",
      options: [
        { text: "Very well", score: 1 },
        { text: "Somewhat well", score: 2 },
        { text: "Struggling", score: 3 },
        { text: "In crisis", score: 4 }
      ]
    },
  
    // Section 1: Physical Wellness
    {
      section: 1,
      title: "Regular Exercise",
      text: "How often do you engage in physical activity to maintain strength, flexibility, and endurance?",
      options: [
        { text: "Regularly", score: 1 },
        { text: "Occasionally", score: 2 },
        { text: "Rarely", score: 3 },
        { text: "Never", score: 4 }
      ]
    },
    {
      section: 1,
      title: "Nutrition & Hydration",
      text: "How well do you maintain a balanced diet and stay hydrated?",
      options: [
        { text: "Very well", score: 1 },
        { text: "Somewhat well", score: 2 },
        { text: "Poorly", score: 3 },
        { text: "Not at all", score: 4 }
      ]
    },
    {
      section: 1,
      title: "Sleep Quality",
      text: "How would you describe your sleep quality and consistency?",
      options: [
        { text: "Excellent", score: 1 },
        { text: "Good", score: 2 },
        { text: "Poor", score: 3 },
        { text: "Very poor", score: 4 }
      ]
    },
    {
      section: 1,
      title: "Preventative Healthcare",
      text: "How often do you attend check-ups, vaccinations, and health screenings?",
      options: [
        { text: "Regularly", score: 1 },
        { text: "Occasionally", score: 2 },
        { text: "Rarely", score: 3 },
        { text: "Never", score: 4 }
      ]
    },
  
    // Section 2: Intellectual Wellness
    {
      section: 2,
      title: "Critical Thinking",
      text: "How well do you analyze information objectively and solve problems effectively?",
      options: [
        { text: "Very well", score: 1 },
        { text: "Somewhat well", score: 2 },
        { text: "Poorly", score: 3 },
        { text: "Not at all", score: 4 }
      ]
    },
    {
      section: 2,
      title: "Creativity & Innovation",
      text: "How often do you engage in creative activities such as art, music, or writing?",
      options: [
        { text: "Regularly", score: 1 },
        { text: "Occasionally", score: 2 },
        { text: "Rarely", score: 3 },
        { text: "Never", score: 4 }
      ]
    },
    {
      section: 2,
      title: "Memory",
      text: "How would you describe your overall memory ability in daily life?",
      options: [
        { text: "I rarely forget things", score: 1 },
        { text: "Sometimes forget things—", score: 2 },
        { text: "Frequently forget things", score: 3 },
        { text: "Often forget things", score: 4 }
      ]
    },
    {
      section: 2,
      title: "Cognitive Stimulation",
      text: "How often do you challenge your mind with puzzles, games, or learning new skills?",
      options: [
        { text: "Regularly", score: 1 },
        { text: "Occasionally", score: 2 },
        { text: "Rarely", score: 3 },
        { text: "Never", score: 4 }
      ]
    },
  
    // Section 3: Emotional Wellness
    {
      section: 3,
      title: "Self-Awareness",
      text: "How well do you recognize and understand your emotions?",
      options: [
        { text: "Very well", score: 1 },
        { text: "Somewhat well", score: 2 },
        { text: "Poorly", score: 3 },
        { text: "Not at all", score: 4 }
      ]
    },
    {
      section: 3,
      title: "Stress Management",
      text: "How effectively do you manage stress in your daily life?",
      options: [
        { text: "Very effectively", score: 1 },
        { text: "Somewhat effectively", score: 2 },
        { text: "Poorly", score: 3 },
        { text: "Not at all", score: 4 }
      ]
    },
    {
      section: 3,
      title: "Emotional Regulation",
      text: "How well do you manage your emotions and express them in a healthy way?",
      options: [
        { text: "Very well", score: 1 },
        { text: "Somewhat well", score: 2 },
        { text: "Poorly", score: 3 },
        { text: "Not at all", score: 4 }
      ]
    },
    {
      section: 3,
      title: "Support Systems",
      text: "How strong is your emotional support system from friends, family, or professionals?",
      options: [
        { text: "Very strong", score: 1 },
        { text: "Somewhat strong", score: 2 },
        { text: "Weak", score: 3 },
        { text: "Non-existent", score: 4 }
      ]
    },
  
    // Section 4: Spiritual Wellness
    {
      section: 4,
      title: "Faith & Belief",
      text: "How strong is your faith or spiritual belief in your daily life?",
      options: [
        { text: "Very strong", score: 1 },
        { text: "Somewhat strong", score: 2 },
        { text: "Weak", score: 3 },
        { text: "Absent", score: 4 }
      ]
    },
    {
      section: 4,
      title: "Meaning & Purpose",
      text: "How clear is your sense of purpose or direction in life?",
      options: [
        { text: "Very clear", score: 1 },
        { text: "Somewhat clear", score: 2 },
        { text: "Unclear", score: 3 },
        { text: "Absent", score: 4 }
      ]
    },
    {
      section: 4,
      title: "Mindfulness & Reflection",
      text: "How often do you practice mindfulness or engage in reflective activities like meditation or prayer?",
      options: [
        { text: "Regularly", score: 1 },
        { text: "Occasionally", score: 2 },
        { text: "Rarely", score: 3 },
        { text: "Never", score: 4 }
      ]
    },
    {
      section: 4,
      title: "Connection to Something Larger",
      text: "How often do you feel connected to something larger than yourself (e.g., nature, community, the universe)?",
      options: [
        { text: "Regularly", score: 1 },
        { text: "Occasionally", score: 2 },
        { text: "Rarely", score: 3 },
        { text: "Never", score: 4 }
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
