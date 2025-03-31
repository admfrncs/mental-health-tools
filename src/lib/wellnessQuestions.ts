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
        { text: "Strong and supportive—I have meaningful connections with those around me.", score: 1 },
        { text: "Somewhat positive—I have good relationships but experience occasional challenges.", score: 2 },
        { text: "Strained—I struggle to maintain strong relationships.", score: 3 },
        { text: "Isolated—I feel disconnected from others and lack supportive relationships.", score: 4 }
      ]
    },
    {
      section: 0,
      title: "Effective Communication",
      text: "How effectively do you express your thoughts and feelings while listening to others?",
      options: [
        { text: "Very effectively—I communicate clearly and listen actively.", score: 1 },
        { text: "Somewhat effectively—I try to communicate well but sometimes struggle.", score: 2 },
        { text: "Ineffectively—I often have trouble expressing myself or understanding others.", score: 3 },
        { text: "Poorly—I rarely feel heard or struggle to engage in meaningful conversations.", score: 4 }
      ]
    },
    {
      section: 0,
      title: "Community Engagement",
      text: "How involved are you in social activities, volunteering, or contributing to your community?",
      options: [
        { text: "Very involved—I actively participate in community or social activities.", score: 1 },
        { text: "Somewhat involved—I engage occasionally but not consistently.", score: 2 },
        { text: "Rarely involved—I don't participate much in my community.", score: 3 },
        { text: "Not involved—I avoid social activities or community involvement.", score: 4 }
      ]
    },
    {
      section: 0,
      title: "Occupation & Finances",
      text: "How well are you able to manage your finances and afford necessities like food, bills, and housing?",
      options: [
        { text: "Very well—I can comfortably cover all my needs and have financial stability.", score: 1 },
        { text: "Somewhat well—I meet my needs but occasionally struggle.", score: 2 },
        { text: "Struggling—I have difficulty affording necessities and managing finances.", score: 3 },
        { text: "In crisis—I am unable to meet my basic financial needs.", score: 4 }
      ]
    },
  
    // Section 1: Physical Wellness
    {
      section: 1,
      title: "Regular Exercise",
      text: "How often do you engage in physical activity to maintain strength, flexibility, and endurance?",
      options: [
        { text: "Regularly—I exercise most days of the week.", score: 1 },
        { text: "Occasionally—I exercise a few times per week or month.", score: 2 },
        { text: "Rarely—I engage in physical activity only when necessary.", score: 3 },
        { text: "Never—I do not engage in any form of regular exercise.", score: 4 }
      ]
    },
    {
      section: 1,
      title: "Nutrition & Hydration",
      text: "How well do you maintain a balanced diet and stay hydrated?",
      options: [
        { text: "Very well—I eat nutritious meals and stay hydrated daily.", score: 1 },
        { text: "Somewhat well—I try to eat healthy and drink enough water but am inconsistent.", score: 2 },
        { text: "Poorly—My diet lacks balance, and I often forget to drink enough water.", score: 3 },
        { text: "Not at all—I rarely pay attention to my nutrition or hydration.", score: 4 }
      ]
    },
    {
      section: 1,
      title: "Sleep Quality",
      text: "How would you describe your sleep quality and consistency?",
      options: [
        { text: "Excellent—I get restful sleep every night and wake up feeling refreshed.", score: 1 },
        { text: "Good—I sleep fairly well but sometimes struggle with restfulness.", score: 2 },
        { text: "Poor—I frequently experience trouble sleeping or feel unrested.", score: 3 },
        { text: "Very poor—I struggle with severe sleep issues or chronic fatigue.", score: 4 }
      ]
    },
    {
      section: 1,
      title: "Preventative Healthcare",
      text: "How often do you attend check-ups, vaccinations, and health screenings?",
      options: [
        { text: "Regularly—I keep up with all recommended check-ups and screenings.", score: 1 },
        { text: "Occasionally—I go to the doctor when I remember but sometimes miss appointments.", score: 2 },
        { text: "Rarely—I only seek medical care when absolutely necessary.", score: 3 },
        { text: "Never—I avoid healthcare check-ups and preventative care.", score: 4 }
      ]
    },
  
    // Section 2: Intellectual Wellness
    {
      section: 2,
      title: "Critical Thinking",
      text: "How well do you analyze information objectively and solve problems effectively?",
      options: [
        { text: "Very well—I critically evaluate information and make logical decisions.", score: 1 },
        { text: "Somewhat well—I try to think critically but sometimes struggle.", score: 2 },
        { text: "Poorly—I often accept information without questioning it.", score: 3 },
        { text: "Not at all—I struggle to analyze information or make decisions.", score: 4 }
      ]
    },
    {
      section: 2,
      title: "Creativity & Innovation",
      text: "How often do you engage in creative activities such as art, music, or writing?",
      options: [
        { text: "Regularly—I actively participate in creative activities.", score: 1 },
        { text: "Occasionally—I enjoy creative activities but don’t do them often.", score: 2 },
        { text: "Rarely—I engage in creative activities only when necessary.", score: 3 },
        { text: "Never—I don’t engage in creative activities at all.", score: 4 }
      ]
    },
    {
      section: 2,
      title: "Open-Mindedness",
      text: "How open are you to new ideas, perspectives, and experiences?",
      options: [
        { text: "Very open—I enjoy learning from different viewpoints.", score: 1 },
        { text: "Somewhat open—I consider new ideas but sometimes hesitate.", score: 2 },
        { text: "Rarely open—I struggle to accept perspectives different from my own.", score: 3 },
        { text: "Not open—I resist change and prefer familiar beliefs.", score: 4 }
      ]
    },
    {
      section: 2,
      title: "Cognitive Stimulation",
      text: "How often do you challenge your mind with puzzles, games, or learning new skills?",
      options: [
        { text: "Regularly—I actively engage in mentally stimulating activities.", score: 1 },
        { text: "Occasionally—I challenge my mind but not consistently.", score: 2 },
        { text: "Rarely—I don’t prioritize cognitive stimulation.", score: 3 },
        { text: "Never—I avoid mentally challenging activities.", score: 4 }
      ]
    },
  
    // Section 3: Emotional Wellness
    {
      section: 3,
      title: "Self-Awareness",
      text: "How well do you recognize and understand your emotions?",
      options: [
        { text: "Very well—I am highly aware of my emotions and their causes.", score: 1 },
        { text: "Somewhat well—I recognize my emotions but sometimes struggle to understand them.", score: 2 },
        { text: "Poorly—I often feel emotions without understanding why.", score: 3 },
        { text: "Not at all—I rarely notice or reflect on my emotions.", score: 4 }
      ]
    },
    {
      section: 3,
      title: "Stress Management",
      text: "How effectively do you manage stress in your daily life?",
      options: [
        { text: "Very effectively—I use healthy techniques to manage stress.", score: 1 },
        { text: "Somewhat effectively—I try to manage stress but struggle at times.", score: 2 },
        { text: "Poorly—I often feel overwhelmed by stress.", score: 3 },
        { text: "Not at all—I have no strategies for managing stress.", score: 4 }
      ]
    },
    {
      section: 3,
      title: "Emotional Regulation",
      text: "How well do you manage your emotions and express them in a healthy way?",
      options: [
        { text: "Very well—I regulate my emotions effectively.", score: 1 },
        { text: "Somewhat well—I manage my emotions but struggle in certain situations.", score: 2 },
        { text: "Poorly—I have difficulty controlling my emotional reactions.", score: 3 },
        { text: "Not at all—I often feel emotionally out of control.", score: 4 }
      ]
    },
    {
      section: 3,
      title: "Support Systems",
      text: "How strong is your emotional support system from friends, family, or professionals?",
      options: [
        { text: "Very strong—I have a reliable and supportive network.", score: 1 },
        { text: "Somewhat strong—I have some support but would like more.", score: 2 },
        { text: "Weak—I have few people to rely on for emotional support.", score: 3 },
        { text: "Non-existent—I feel emotionally unsupported.", score: 4 }
      ]
    },
  
    // Section 4: Spiritual Wellness
    {
      section: 4,
      title: "Faith & Belief",
      text: "How strong is your faith or spiritual belief in your daily life?",
      options: [
        { text: "Very strong—my faith guides my decisions and actions.", score: 1 },
        { text: "Somewhat strong—my faith plays a role in my life but not always.", score: 2 },
        { text: "Weak—I rarely reflect on or engage with my faith.", score: 3 },
        { text: "Absent—I do not engage with any spiritual or religious beliefs.", score: 4 }
      ]
    },
    {
      section: 4,
      title: "Meaning & Purpose",
      text: "How clear is your sense of purpose or direction in life?",
      options: [
        { text: "Very clear—I have a strong sense of meaning and direction.", score: 1 },
        { text: "Somewhat clear—I have some purpose but feel uncertain at times.", score: 2 },
        { text: "Unclear—I struggle to identify my purpose or direction.", score: 3 },
        { text: "Absent—I feel lost and without purpose.", score: 4 }
      ]
    },
    {
      section: 4,
      title: "Mindfulness & Reflection",
      text: "How often do you practice mindfulness or engage in reflective activities like meditation or prayer?",
      options: [
        { text: "Regularly—I regularly practice mindfulness and reflection.", score: 1 },
        { text: "Occasionally—I engage in mindfulness but not consistently.", score: 2 },
        { text: "Rarely—I rarely practice mindfulness or reflection.", score: 3 },
        { text: "Never—I do not practice mindfulness or reflection.", score: 4 }
      ]
    },
    {
      section: 4,
      title: "Connection to Something Larger",
      text: "How often do you feel connected to something larger than yourself (e.g., nature, community, the universe)?",
      options: [
        { text: "Regularly—I frequently feel a deep sense of connection.", score: 1 },
        { text: "Occasionally—I experience moments of connection but not often.", score: 2 },
        { text: "Rarely—I rarely feel connected to anything larger.", score: 3 },
        { text: "Never—I never feel a sense of connection beyond myself.", score: 4 }
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
