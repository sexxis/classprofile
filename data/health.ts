// How many times did you go to the hospital or ER during your undergrad?
let HOSPITAL = [
  {
    name: "Zero",
    value: 34,
  },
  {
    name: "One",
    value: 14,
  },
  {
    name: "Two",
    value: 7,
  },
  {
    name: "Three",
    value: 1,
  },
  {
    name: "Four",
    value: 0,
  },
  {
    name: "Five",
    value: 1,
  },
];

// How many times did you ask for a deadline extension due to illness/injury during your undergrad?
let EXTENSION_DUE_ILLNESS = [
  {
    name: "Zero",
    value: 47,
  },
  {
    name: "One",
    value: 7,
  },
  {
    name: "Two",
    value: 1,
  },
  {
    name: "Three",
    value: 2,
  },
];

// How many times did you go to class sick during all in-person terms?
let SICK_IN_CLASS = [
  {
    name: "Zero",
    value: 16,
  },
  {
    name: "One",
    value: 9,
  },
  {
    name: "Two",
    value: 12,
  },
  {
    name: "Three",
    value: 3,
  },
  {
    name: "Four",
    value: 3,
  },
  {
    name: "Five",
    value: 7,
  },
  {
    name: "Ten",
    value: 4,
  },
  {
    name: "Fifteen",
    value: 1,
  },
];

// Have you ever struggled with imposter syndrome?
let IMPOSTER_SYNDROME = [
  { name: "Yes", value: 44 },
  { name: "No", value: 10 },
  { name: "Unsure", value: 3 },
];

// Do you currently struggle with imposter syndrome?
let IMPOSTER_SYNDROME_NOW = [
  { name: "Yes", value: 14 },
  { name: "No", value: 33 },
  { name: "Unsure", value: 10 },
];

// Have you struggled with mental health during your undergrad?
let MENTAL_HEALTH = [
  { name: "Yes", value: 30 },
  { name: "No", value: 20 },
  { name: "Unsure", value: 6 },
];

// How many school terms were affected (academically, socially, or otherwise) by struggling with mental health?
let MH_AFFECTED_TERMS = [
  {
    name: "Zero",
    value: 24,
  },
  {
    name: "One",
    value: 5,
  },
  {
    name: "Two",
    value: 5,
  },
  {
    name: "Three",
    value: 7,
  },
  {
    name: "Four",
    value: 5,
  },
  {
    name: "Five",
    value: 2,
  },
  {
    name: "Six",
    value: 1,
  },
  {
    name: "Seven",
    value: 1,
  },
  {
    name: "Eight",
    value: 2,
  },
];

// Have you used any of the following counselling resources during your undergrad?
let COUNSELLING_SERVICES = [
  {
    name: "University of Waterloo Counselling Services",
    value: 7,
  },
  {
    name: "Engineering Undergraduate First Year Office",
    value: 2,
  },
  {
    name: "Counselling services offered outside of the University of Waterloo",
    value: 6,
  },
  {
    name: "Emergency mental health services",
    value: 0,
  },
];

// Which of the following have you struggled with (with or without a diagnosis)?
let MENTAL_HEALTH_ISSUES = [
  {
    name: "Depression",
    value: 21,
  },
  {
    name: "Addiction",
    value: 7,
  },
  {
    name: "Anxiety Disorders",
    value: 15,
  },
  {
    name: "Social Anxiety Disorder",
    value: 7,
  },
  {
    name: "Post-traumatic Stress Disorder (PTSD)",
    value: 5,
  },
  {
    name: "Personality Disorders",
    value: 2,
  },
  {
    name: "Eating Disorders",
    value: 7,
  },
  {
    name: "Body Dysmorphia",
    value: 6,
  },
  {
    name: "Attention Deficit Hyperactivity Disorder (ADHD)",
    value: 6,
  },
  {
    name: "Obsessive-Compulsive Disorder (OCD)",
    value: 4,
  },
  {
    name: "Complex Post-traumatic Stress Disorder (CPTSD)",
    value: 1,
  },
];

// Which mental illnesses have you been formally diagnosed with?
let DIAGNOSED_MENTAL_HEALTH_ISSUES = [
  {
    name: "Depression",
    value: 1,
  },
  {
    name: "Anxiety Disorders",
    value: 2,
  },
  {
    name: "Attention Deficit Hyperactivity Disorder (ADHD)",
    value: 1,
  },
];

// How is your self-esteem now compared to before starting university?
let SELF_ESTEEM = [
  {
    name: "Higher",
    value: 39,
  },
  {
    name: "Lower",
    value: 8,
  },
  {
    name: "Unchanged",
    value: 8,
  },
];

// On average, how often did you exercise during your undergrad?
let EXERCISE_FREQ = [
  {
    name: ">7 times a week",
    value: 12,
  },
  {
    name: "5-7 times a week",
    value: 5,
  },
  {
    name: "3-4 times a week",
    value: 15,
  },
  {
    name: "1-2 times a week",
    value: 23,
  },
  {
    name: "Less than once a week",
    value: 12,
  },
  {
    name: "Never",
    value: 0,
  },
];

let EXERCISE_TYPE = {
  Gym: 14,
  Volleyball: 7,
  Basketball: 5,
  Biking: 5,
  Judo: 1,
  Weightlifting: 18,
  Cardio: 5,
  Spinning: 1,
  Dance: 4,
  Badminton: 2,
  Walk: 1,
  Hike: 4,
  Calisthenics: 2,
  Swimming: 2,
  Running: 15,
  "Pole Dancing": 1,
  Yoga: 2,
  Skating: 1,
  Parkour: 1,
  "Rock Climbing": 5,
  "Horseback Riding": 2,
  "Fitness Classes": 4,
  "Muay Thai": 3,
  Pilates: 2,
  MMA: 1,
  Karate: 1,
  "Recreational Sports": 2,
  "Ping Pong": 1,
  Soccor: 2,
  Frisbee: 1,
  Snowboarding: 1,
  Dodgeball: 2,
  HITT: 2,
  "At Home Workouts": 1,
  Boxing: 1,
  Skateboarding: 1,
};

// Did you train in sport competitively during your undergrad?
let SPORT_LEVEL = [
  {
    name: "Yes, UW varsity team",
    value: 1,
  },
  {
    name: "Yes, competitive team outside of UW",
    value: 2,
  },
  {
    name: "No, only participated recreationally",
    value: 34,
  },
  {
    name: "No, did not train in a sport",
    value: 16,
  },
];

// Did you participate in intramurals during your undergrad?
let INTRAMURAL_FREQ = [
  {
    name: "Every Term",
    value: 1,
  },
  {
    name: "4-7 terms",
    value: 5,
  },
  {
    name: "1 -3 terms",
    value: 25,
  },
  {
    name: "Never",
    value: 24,
  },
];

// Which intramurals?
let INTRAMURALS = [
  {
    name: "Volleyball",
    value: 14,
  },
  {
    name: "Basketball",
    value: 8,
  },
  {
    name: "Soccer",
    value: 7,
  },
  {
    name: "Futsal",
    value: 1,
  },
  {
    name: "Ultimate Frisbee",
    value: 11,
  },
  {
    name: "Dodgeball",
    value: 12,
  },
  {
    name: "Floor Hockey",
    value: 1,
  },
  {
    name: "Squash",
    value: 2,
  },
  {
    name: "Tennis",
    value: 1,
  },
  {
    name: "Football",
    value: 2,
  },
];

export {
  HOSPITAL,
  EXTENSION_DUE_ILLNESS,
  SICK_IN_CLASS,
  IMPOSTER_SYNDROME,
  IMPOSTER_SYNDROME_NOW,
  MENTAL_HEALTH,
  MH_AFFECTED_TERMS,
  COUNSELLING_SERVICES,
  MENTAL_HEALTH_ISSUES,
  DIAGNOSED_MENTAL_HEALTH_ISSUES,
  SELF_ESTEEM,
  EXERCISE_FREQ,
  EXERCISE_TYPE,
  SPORT_LEVEL,
  INTRAMURAL_FREQ,
  INTRAMURALS,
};
