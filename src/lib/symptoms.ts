export const symptomCategories = [
  {
    name: "Mood-Related Symptoms",
    symptoms: [
      "Persistent sadness or low mood",
      "Feeling empty or hopeless",
      "Loss of interest in activities (anhedonia)",
      "Excessive guilt or worthlessness",
      "Mood swings (highs and lows)",
      "Irritability or anger outbursts",
      "Feeling euphoric or excessively happy",
      "Increased energy or restlessness"
    ]
  },
  {
    name: "Anxiety & Fear-Based Symptoms",
    symptoms: [
      "Excessive worry or fear",
      "Panic attacks (rapid heart rate, sweating, shortness of breath)",
      "Avoidance of situations due to fear",
      "Feeling tense or on edge",
      "Needing reassurance constantly",
      "Fear of being judged (social anxiety)",
      "Obsessive thoughts (unwanted, repetitive)",
      "Compulsions (repetitive behaviors to reduce anxiety)"
    ]
  },
  {
    name: "Cognitive & Thought-Related Symptoms",
    symptoms: [
      "Racing thoughts",
      "Trouble concentrating or making decisions",
      "Forgetfulness or memory issues",
      "Intrusive, distressing thoughts",
      "Delusions (false beliefs, paranoia)",
      "Hallucinations (seeing or hearing things that aren't there)",
      "Depersonalization (feeling detached from self)",
      "Derealization (feeling like the world is unreal)"
    ]
  },
  {
    name: "Behavioral Symptoms",
    symptoms: [
      "Social withdrawal or isolation",
      "Restlessness or inability to sit still",
      "Reckless or risky behaviors",
      "Compulsive behaviors (e.g., checking things repeatedly)",
      "Aggressive or violent behavior",
      "Self-harm (cutting, burning, etc.)",
      "Suicide attempts or thoughts"
    ]
  },
  {
    name: "Sleep-Related Symptoms",
    symptoms: [
      "Insomnia (difficulty falling or staying asleep)",
      "Hypersomnia (excessive sleepiness)",
      "Nightmares or night terrors",
      "Irregular sleep patterns",
      "Sleep paralysis"
    ]
  },
  {
    name: "Appetite & Eating Symptoms",
    symptoms: [
      "Loss of appetite or decreased food intake",
      "Binge eating (eating large amounts rapidly)",
      "Purging (vomiting, laxative use)",
      "Excessive concern about weight or body shape",
      "Restricting food intake severely"
    ]
  },
  {
    name: "Perception & Sensory Symptoms",
    symptoms: [
      "Heightened sensitivity to sounds, lights, or textures",
      "Feeling detached from reality",
      "Misinterpreting normal sounds or sights as threatening",
      "Sensory overload (feeling overwhelmed by surroundings)"
    ]
  },
  {
    name: "Physical & Somatic Symptoms",
    symptoms: [
      "Unexplained aches and pains",
      "Chronic fatigue or low energy",
      "Dizziness or feeling lightheaded",
      "Gastrointestinal issues (nausea, stomach pain)",
      "Tension headaches or muscle tightness"
    ]
  },
  {
    name: "Impulsivity & Hyperactivity Symptoms",
    symptoms: [
      "Difficulty sitting still",
      "Acting without thinking",
      "Interrupting conversations",
      "Trouble waiting for turns",
      "Engaging in risky behaviors without considering consequences"
    ]
  },
  {
    name: "Substance & Addiction-Related Symptoms",
    symptoms: [
      "Cravings for drugs, alcohol, or other substances",
      "Withdrawal symptoms (shaking, nausea, anxiety)",
      "Increased tolerance (needing more to feel the effect)",
      "Loss of control over substance use",
      "Using substances despite negative consequences"
    ]
  }
] as const;

export const severityLevels = ["Mild", "Moderate", "Severe"] as const;
