// src/lib/wellnessQuestions.ts

export const wellnessDimensions = [
  {
    dimension: "Social Wellness",
    questions: [
      {
        question: "How would you describe your relationships with the important people in your life?",
        options: ["A) Strong and supportive—I have meaningful connections with those around me.",
                  "B) Somewhat positive—I have good relationships but experience occasional challenges.",
                  "C) Strained—I struggle to maintain strong relationships.",
                  "D) Isolated—I feel disconnected from others and lack supportive relationships."]
      },
      {
        question: "How effectively do you express your thoughts and feelings while listening to others?",
        options: ["A) Very effectively—I communicate clearly and listen actively.",
                  "B) Somewhat effectively—I try to communicate well but sometimes struggle.",
                  "C) Ineffectively—I often have trouble expressing myself or understanding others.",
                  "D) Poorly—I rarely feel heard or struggle to engage in meaningful conversations."]
      },
      {
        question: "How involved are you in social activities, volunteering, or contributing to your community?",
        options: ["A) Very involved—I actively participate in community or social activities.",
                  "B) Somewhat involved—I engage occasionally but not consistently.",
                  "C) Rarely involved—I don't participate much in my community.",
                  "D) Not involved—I avoid social activities or community involvement."]
      },
      {
        question: "How well are you able to manage your finances and afford necessities like food, bills, and housing?",
        options: ["A) Very well—I can comfortably cover all my needs and have financial stability.",
                  "B) Somewhat well—I meet my needs but occasionally struggle.",
                  "C) Struggling—I have difficulty affording necessities and managing finances.",
                  "D) In crisis—I am unable to meet my basic financial needs."]
      },
      {
        question: "How well do you set and respect personal boundaries in your relationships?",
        options: ["A) Very well—I set clear boundaries and respect others' limits.",
                  "B) Somewhat well—I try to maintain boundaries but sometimes struggle.",
                  "C) Poorly—I often feel uncomfortable setting or enforcing boundaries.",
                  "D) Not at all—I have difficulty recognizing or respecting boundaries."]
      }
    ]
  },
  {
    dimension: "Physical Wellness",
    questions: [
      {
        question: "How often do you engage in physical activity to maintain strength, flexibility, and endurance?",
        options: ["A) Regularly—I exercise most days of the week.",
                  "B) Occasionally—I exercise a few times per week or month.",
                  "C) Rarely—I engage in physical activity only when necessary.",
                  "D) Never—I do not engage in any form of regular exercise."]
      },
      {
        question: "How well do you maintain a balanced diet and stay hydrated?",
        options: ["A) Very well—I eat nutritious meals and stay hydrated daily.",
                  "B) Somewhat well—I try to eat healthy and drink enough water but am inconsistent.",
                  "C) Poorly—My diet lacks balance, and I often forget to drink enough water.",
                  "D) Not at all—I rarely pay attention to my nutrition or hydration."]
      },
      {
        question: "How would you describe your sleep quality and consistency?",
        options: ["A) Excellent—I get restful sleep every night and wake up feeling refreshed.",
                  "B) Good—I sleep fairly well but sometimes struggle with restfulness.",
                  "C) Poor—I frequently experience trouble sleeping or feel unrested.",
                  "D) Very poor—I struggle with severe sleep issues or chronic fatigue."]
      },
      {
        question: "How often do you attend check-ups, vaccinations, and health screenings?",
        options: ["A) Regularly—I keep up with all recommended check-ups and screenings.",
                  "B) Occasionally—I go to the doctor when I remember but sometimes miss appointments.",
                  "C) Rarely—I only seek medical care when absolutely necessary.",
                  "D) Never—I avoid healthcare check-ups and preventative care."]
      },
      {
        question: "How well do you limit or avoid harmful substances like tobacco, alcohol, and drugs?",
        options: ["A) Very well—I avoid or use substances in strict moderation.",
                  "B) Somewhat well—I occasionally use substances but maintain control.",
                  "C) Poorly—I struggle to moderate my substance use.",
                  "D) Not at all—I frequently use substances in a way that concerns me or others."]
      }
    ]
  },
  {
    dimension: "Intellectual Wellness",
    questions: [
      {
        question: "How often do you seek out opportunities to learn new things or gain knowledge?",
        options: ["A) Regularly—I actively read, study, or explore new topics.",
                  "B) Occasionally—I learn new things when the opportunity arises.",
                  "C) Rarely—I don’t seek out learning but may pick up knowledge incidentally.",
                  "D) Never—I don’t engage in learning beyond what’s necessary."]
      },
      {
        question: "How well do you analyze information objectively and solve problems effectively?",
        options: ["A) Very well—I critically evaluate information and make logical decisions.",
                  "B) Somewhat well—I try to think critically but sometimes struggle.",
                  "C) Poorly—I often accept information without questioning it.",
                  "D) Not at all—I struggle to analyze information or make decisions."]
      },
      {
        question: "How often do you engage in creative activities such as art, music, or writing?",
        options: ["A) Regularly—I actively participate in creative activities.",
                  "B) Occasionally—I enjoy creative activities but don’t do them often.",
                  "C) Rarely—I engage in creative activities only when necessary.",
                  "D) Never—I don’t engage in creative activities at all."]
      },
      {
        question: "How open are you to new ideas, perspectives, and experiences?",
        options: ["A) Very open—I enjoy learning from different viewpoints.",
                  "B) Somewhat open—I consider new ideas but sometimes hesitate.",
                  "C) Rarely open—I struggle to accept perspectives different from my own.",
                  "D) Not open—I resist change and prefer familiar beliefs."]
      },
      {
        question: "How often do you challenge your mind with puzzles, games, or learning new skills?",
        options: ["A) Regularly—I actively engage in mentally stimulating activities.",
                  "B) Occasionally—I challenge my mind but not consistently.",
                  "C) Rarely—I don’t prioritize cognitive stimulation.",
                  "D) Never—I avoid mentally challenging activities."]
      }
    ]
  },
  {
    dimension: "Emotional Wellness",
    questions: [
      {
        question: "How well do you recognize and understand your emotions?",
        options: ["A) Very well—I am highly aware of my emotions and their causes.",
                  "B) Somewhat well—I recognize my emotions but sometimes struggle to understand them.",
                  "C) Poorly—I often feel emotions without understanding why.",
                  "D) Not at all—I rarely notice or reflect on my emotions."]
      },
      {
        question: "How effectively do you manage stress in your daily life?",
        options: ["A) Very effectively—I use healthy techniques to manage stress.",
                  "B) Somewhat effectively—I try to manage stress but struggle at times.",
                  "C) Poorly—I often feel overwhelmed by stress.",
                  "D) Not at all—I have no strategies for managing stress."]
      },
      {
        question: "How well do you manage your emotions and express them in a healthy way?",
        options: ["A) Very well—I regulate my emotions effectively.",
                  "B) Somewhat well—I manage my emotions but struggle in certain situations.",
                  "C) Poorly—I have difficulty controlling my emotional reactions.",
                  "D) Not at all—I often feel emotionally out of control."]
      },
      {
        question: "How strong is your emotional support system from friends, family, or professionals?",
        options: ["A) Very strong—I have a reliable and supportive network.",
                  "B) Somewhat strong—I have some support but would like more.",
                  "C) Weak—I have few people to rely on for emotional support.",
                  "D) Nonexistent—I feel like I have no one to turn to."]
      },
      {
        question: "How well do you adapt to challenges and setbacks?",
        options: ["A) Very well—I recover from setbacks and find ways to move forward.",
                  "B) Somewhat well—I try to cope but struggle at times.",
                  "C) Poorly—I often feel stuck when facing challenges.",
                  "D) Not at all—I struggle to recover from difficult situations."]
      }
    ]
  },
  {
    dimension: "Spiritual Wellness",
    questions: [
      {
        question: "How strong is your sense of purpose and meaning in life?",
        options: ["A) Very strong—I have a clear sense of purpose.",
                  "B) Somewhat strong—I have a general idea but want more clarity.",
                  "C) Weak—I struggle to understand my purpose.",
                  "D) Nonexistent—I feel lost or disconnected from meaning."]
      },
      {
        question: "How often do you engage in self-reflection, meditation, or prayer?",
        options: ["A) Regularly—I engage in mindfulness or reflection often.",
                  "B) Occasionally—I practice mindfulness but not consistently.",
                  "C) Rarely—I rarely take time for self-reflection.",
                  "D) Never—I do not engage in mindfulness or reflection."]
      },
      {
        question: "How well does your spiritual practice or belief system provide you with comfort and guidance?",
        options: ["A) Very well—my spiritual beliefs offer deep comfort and guidance.",
                  "B) Somewhat well—my beliefs provide occasional comfort.",
                  "C) Poorly—I struggle to connect with my beliefs.",
                  "D) Not at all—my beliefs provide little to no comfort."]
      },
      {
        question: "How aligned are your actions and values with your spiritual beliefs?",
        options: ["A) Very aligned—I live according to my values and beliefs.",
                  "B) Somewhat aligned—I try to live according to my values but struggle at times.",
                  "C) Misaligned—I often act in ways that contradict my beliefs.",
                  "D) Not at all—I feel disconnected from my values and beliefs."]
      },
      {
        question: "How often do you feel a sense of connection to something greater than yourself?",
        options: ["A) Very often—I feel a deep connection to something larger.",
                  "B) Occasionally—I feel connected but not consistently.",
                  "C) Rarely—I rarely experience this connection.",
                  "D) Never—I do not feel connected to anything greater."]
      }
    ]
  }
];
