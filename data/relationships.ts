// relationships.ts
const FAMILY = {
  SPEAK_YEAR_1: [
    {
      name: "Never",
      value: 1,
    },
    {
      name: "Once a term",
      value: 2,
    },
    {
      name: "Once a month",
      value: 10,
    },
    {
      name: "Bi weekly",
      value: 13,
    },
    {
      name: "Once a week",
      value: 15,
    },
    {
      name: "Multiple times a week",
      value: 17,
    },
  ],
  SPEAK_YEAR_4: [
    {
      name: "Never",
      value: 1,
    },
    {
      name: "Once a term",
      value: 2,
    },
    {
      name: "Once a month",
      value: 9,
    },
    {
      name: "Bi weekly",
      value: 11,
    },
    {
      name: "Once a week",
      value: 14,
    },
    {
      name: "Multiple times a week",
      value: 21,
    },
  ],
  HOME_YEAR_1: [
    {
      name: "Never",
      value: 6,
    },
    {
      name: "Once a term",
      value: 28,
    },
    {
      name: "Once a month",
      value: 11,
    },
    {
      name: "Bi weekly",
      value: 4,
    },
    {
      name: "Once a week",
      value: 5,
    },
    {
      name: "Multiple times a week",
      value: 1,
    },
    {
      name: "Lived at home",
      value: 2,
    },
  ],
  HOME_YEAR_4: [
    {
      name: "Never",
      value: 12,
    },
    {
      name: "Once a term",
      value: 22,
    },
    {
      name: "Once a month",
      value: 6,
    },
    {
      name: "Bi weekly",
      value: 4,
    },
    {
      name: "Once a week",
      value: 2,
    },
    {
      name: "Multiple times a week",
      value: 1,
    },
    {
      name: "Lived at home",
      value: 9,
    },
  ],
};

const FRIENDSHIPS = {
  CUMULATIVE: [
    {
      group: "0",
      "high-school": 4,
      coop: 22,
      residence: 26,
      orientation: 24,
      "se-before-uw": 28,
      "se-close-friends": 0,
    },
    {
      group: "1",
      "high-school": 11,
      coop: 17,
      residence: 6,
      orientation: 9,
      "se-before-uw": 10,
      "se-close-friends": 4,
    },
    {
      group: "2",
      "high-school": 9,
      coop: 9,
      residence: 5,
      orientation: 8,
      "se-before-uw": 5,
      "se-close-friends": 8,
    },
    {
      group: "3",
      "high-school": 5,
      coop: 1,
      residence: 6,
      orientation: 5,
      "se-before-uw": 2,
      "se-close-friends": 9,
    },
    {
      group: "4",
      "high-school": 4,
      coop: 5,
      residence: 2,
      orientation: 6,
      "se-before-uw": 2,
      "se-close-friends": 8,
    },
    {
      group: "5",
      "high-school": 9,
      coop: 3,
      residence: 3,
      orientation: 1,
      "se-before-uw": 4,
      "se-close-friends": 9,
    },
    {
      group: "6",
      "high-school": 8,
      coop: 1,
      residence: 0,
      orientation: 1,
      "se-before-uw": 4,
      "se-close-friends": 5,
    },
    {
      group: "7",
      "high-school": 3,
      coop: 0,
      residence: 0,
      orientation: 1,
      "se-before-uw": 0,
      "se-close-friends": 4,
    },
    {
      group: "8",
      "high-school": 0,
      coop: 0,
      residence: 1,
      orientation: 0,
      "se-before-uw": 1,
      "se-close-friends": 2,
    },
    {
      group: "9",
      "high-school": 0,
      coop: 0,
      residence: 1,
      orientation: 0,
      "se-before-uw": 1,
      "se-close-friends": 0,
    },
    {
      group: "10 or more",
      "high-school": 6,
      coop: 0,
      residence: 0,
      orientation: 0,
      "se-before-uw": 1,
      "se-close-friends": 9,
    },
  ],
  CLOSE_FRIEND_SE: [
    {
      name: "0-20%",
      value: 10,
    },
    {
      name: "21-40%",
      value: 17,
    },
    {
      name: "41-60%",
      value: 18,
    },
    {
      name: "61-80%",
      value: 7,
    },
    {
      name: "81-100%",
      value: 6,
    },
  ],
  SE_PEOPLE_MET: [
    {
      name: "0-20%",
      value: 2,
    },
    {
      name: "21-40%",
      value: 7,
    },
    {
      name: "41-60%",
      value: 17,
    },
    {
      name: "61-80%",
      value: 20,
    },
    {
      name: "81-100%",
      value: 13,
    },
  ],
};

const ROMANCE = {
  DEGREE_NON_SINGLE: [
    39, 0, 95, 0, 38, 71, 0, 14, 36, 43, 32, 0, 79, 9, 0, 86, 21, 50, 70, 61,
    100, 43, 70, 5, 43, 0, 23, 45, 13, 84, 7, 100, 2, 4, 11, 71, 70, 0, 21, 9,
    0, 29, 64, 0, 100, 0, 7, 0, 27, 95, 45, 0, 20, 25,
  ],
  RELATIONSHIP_COUNT: [
    { name: "0", value: 12 },
    { name: "1", value: 13 },
    { name: "2", value: 17 },
    { name: "3", value: 7 },
    { name: "4", value: 1 },
    { name: "5", value: 1 },
  ],
  SEXUAL_PARTNERS: [
    { name: "0", value: 15 },
    { name: "1", value: 12 },
    { name: "2", value: 11 },
    { name: "3", value: 4 },
    { name: "4", value: 2 },
    { name: "5", value: 0 },
    { name: "6", value: 3 },
    { name: "7", value: 1 },
    { name: "8", value: 1 },
    { name: "9", value: 1 },
    { name: "10", value: 0 },
    { name: "11", value: 0 },
    { name: "12", value: 2 },
  ],
  CHEATING: [
    { name: "No", value: 48 },
    { name: "Yes, I cheated on someone else", value: 1 },
    { name: "Yes, I was cheated on", value: 1 },
    { name: "Yes, involved in some other way", value: 4 },
  ],
  SECEST: [
    { name: "Currently", value: 11 },
    { name: "Past", value: 6 },
    { name: "Never", value: 38 },
  ],
  RICE_PURITY: [
    {
      name: "Before university",
      value: [
        72, 90, 75, 95, 88, 85, 67, 75, 95, 97, 89, 93, 56, 96, 90, 95, 89, 95,
        94, 93, 80, 95, 79, 60, 96, 65, 82, 91, 79, 95, 77, 96, 94, 90, 70,
      ],
    },
    {
      name: "After university",
      value: [
        71, 89, 53, 71, 44, 31, 62, 35, 32, 70, 45, 54, 19, 63, 44, 50, 40, 51,
        40, 91, 64, 50, 59, 53, 61, 55, 53, 50, 37, 69, 48, 54, 77, 28, 86, 35,
        96, 95, 38, 64, 39, 35, 44,
      ],
    },
  ],
  DATING_APPS: [
    { name: "Yes", value: 26 },
    { name: "No", value: 28 },
  ],
  CONTROLLED_SUBSTANCES: {
    Weed: 33,
    Alcohol: 41,
    LSD: 7,
    Hallucinogens: 8,
    Tobacco: 14,
    "MDMA / Ecstasy / Molly": 5,
    Adderall: 5,
    Cocaine: 1,
    PCP: 1,
  },
  CLASS_DRUNK: [
    { name: "Yes", value: 14 },
    { name: "No", value: 39 },
  ],
  EXAM_DRUNK: [
    { name: "Yes", value: 5 },
    { name: "No", value: 48 },
  ],
};

export { FAMILY, FRIENDSHIPS, ROMANCE };
