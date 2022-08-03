let SLEEP_TIME = [
  {
    name: "Before 10:00 PM",
    value: 1,
  },
  {
    name: "10 PM",
    value: 1,
  },
  {
    name: "11 PM",
    value: 4,
  },
  {
    name: "12 AM",
    value: 16,
  },
  {
    name: "1 AM",
    value: 20,
  },
  {
    name: "2 AM",
    value: 14,
  },
  {
    name: "3 AM",
    value: 5,
  },
  {
    name: "4 AM",
    value: 0,
  },
  {
    name: "5 AM",
    value: 1,
  },
];

let SLEEP_DURATION = [
  {
    name: "Less than 4 hours",
    value: 0,
  },
  {
    name: "4 - 6 hours",
    value: 1,
  },
  {
    name: "6 - 8 hours",
    value: 50,
  },
  {
    name: "8 - 10 hours",
    value: 8,
  },
  {
    name: "More than 10",
    value: 0,
  },
];

let ALL_NIGHTERS = [
  {
    name: "None",
    value: 19,
  },
  {
    name: "1",
    value: 14,
  },
  {
    name: "2",
    value: 8,
  },
  {
    name: "3",
    value: 6,
  },
  {
    name: "4",
    value: 4,
  },
  {
    name: "5",
    value: 3,
  },
  {
    name: "6",
    value: 2,
  },
  {
    name: ">= 10",
    value: 5,
  },
];

let PERCENT_HOME_MADE = [
  {
    name: "[0,20)",
    value: 11,
  },
  {
    name: "[20,40)",
    value: 9,
  },
  {
    name: "[40,60)",
    value: 5,
  },
  {
    name: "[60,80)",
    value: 10,
  },
  {
    name: "[80,100]",
    value: 25,
  },
];

let PARTY_BEFORE_COVID = [
  {
    name: "Multiple times a week",
    value: 4,
  },
  {
    name: "Once a week",
    value: 8,
  },
  {
    name: "Multiple times a month",
    value: 9,
  },
  {
    name: "Once a month",
    value: 10,
  },
  {
    name: "Few times a term",
    value: 12,
  },
  {
    name: "Once a term",
    value: 11,
  },
  {
    name: "Never",
    value: 6,
  },
];

let PARTY_DURING_COVID = [
  {
    name: "Multiple times a week",
    value: 0,
  },
  {
    name: "Once a week",
    value: 5,
  },
  {
    name: "Multiple times a month",
    value: 7,
  },
  {
    name: "Once a month",
    value: 6,
  },
  {
    name: "Few times a term",
    value: 9,
  },
  {
    name: "Once a term",
    value: 8,
  },
  {
    name: "Never",
    value: 24,
  },
];

export {
  SLEEP_TIME,
  SLEEP_DURATION,
  ALL_NIGHTERS,
  PERCENT_HOME_MADE,
  PARTY_BEFORE_COVID,
  PARTY_DURING_COVID,
};
