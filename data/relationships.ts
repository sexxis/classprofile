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
  MONTHS_NON_SINGLE: [
    10, 9, 12, 20, 29, 6, 0, 20, 51, 0, 4, 18, 0, 0, 52, 48, 2, 24, 4, 40, 0, 0,
    0, 12, 25, 0, 13, 36, 10, 21, 4, 28, 51, 24, 26, 20, 0, 11, 52, 28, 40, 52,
    0, 0, 52, 0, 20, 28, 38, 0, 24, 53, 32, 56, 0, 47, 0,
  ],
  DEGREE_NON_SINGLE: [],
  RELATIONSHIP_COUNT: [
    { name: "0", value: 15 },
    { name: "1", value: 26 },
    { name: "2", value: 12 },
    { name: "3", value: 3 },
  ],
  SEXUAL_PARTNERS: [
    {
      name: "Before university",
      value: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2,
        2, 2, 2, 2, 3, 4,
      ],
    },
    {
      name: "During university",
      value: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3,
        3, 4, 4, 5, 7, 9,
      ],
    },
  ],
  SECEST: [
    { name: "No", value: 50 },
    { name: "Yes (SE 2021)", value: 3 },
    { name: "Yes (not SE 2021)", value: 2 },
    { name: "Yes (both)", value: 2 },
  ],
  CHEATING: [
    { name: "No", value: 47 },
    { name: "Yes", value: 8 },
  ],
  CHEATING_REASONS: [
    { name: "Have been cheated on", value: 6 },
    { name: "Helped someone cheat", value: 2 },
    { name: "Cheated on someone", value: 2 },
  ],
};

// degree = 56 months
// ROMANCE.DEGREE_NON_SINGLE = ROMANCE.MONTHS_NON_SINGLE.map((months) => {
//   return (months / 56) * 100;
// });

export { FAMILY, FRIENDSHIPS, ROMANCE };
