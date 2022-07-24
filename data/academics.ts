// updated for 2022
let GRADES = [
  {
    name: "1A",
    value: [
      62.18, 65.46, 69.9, 70, 70, 70.64, 70.82, 72.73, 74, 77, 77.27, 78, 78,
      78, 78.36, 79.82, 80.82, 81.18, 81.27, 81.73, 81.91, 82, 82, 82.36, 83.27,
      83.36, 83.46, 84, 84, 84.64, 85, 86, 86, 86, 87.54, 87.82, 87.91, 88,
      88.09, 89, 89.5, 89.54, 89.55, 89.73, 91.09, 91.36, 91.46, 91.82, 92.09,
      94, 99.18,
    ],
  },
  {
    name: "1B",
    value: [
      59.8, 63, 66, 67, 68.2, 69.8, 70, 70, 70.2, 70.4, 71, 71.2, 72, 72, 72.2,
      72.2, 73, 74, 74, 75, 78.2, 79, 79.2, 79.4, 79.6, 79.8, 81.4, 81.6, 82,
      82, 82, 83.2, 84, 84, 84.6, 85, 87, 87.6, 88, 88, 88.2, 89, 89.2, 90, 90,
      91, 93.4, 95.2, 98,
    ],
  },
  {
    name: "2A",
    value: [
      65.67, 67.67, 68.5, 69.3, 70, 72, 72, 73, 73, 73.8, 74, 74, 74, 74.5, 75,
      75, 75.67, 77.67, 78, 78.33, 79, 80.17, 80.17, 80.33, 80.83, 81.5, 82.5,
      83, 83.33, 84, 84, 84.3, 84.83, 85, 85, 85, 85.5, 86, 86.4, 86.5, 86.83,
      87, 87, 88, 88, 88.67, 88.83, 92.17, 99.17,
    ],
  },
  {
    name: "2B",
    value: [
      62.6, 63, 64.6, 66, 66.2, 67.2, 67.8, 70.4, 70.4, 71, 73, 73, 74.6, 74.8,
      75, 75.8, 76, 76.4, 76.8, 77.8, 78, 78.6, 78.8, 79, 79.4, 80, 80, 81.4,
      81.6, 81.8, 82, 83.2, 83.6, 83.8, 84, 84, 85, 85.4, 86.2, 86.4, 86.6, 87,
      87.2, 87.8, 88.2, 88.8, 90, 90, 95,
    ],
  },
  {
    name: "3A",
    value: [
      73, 76.7, 78.17, 79, 80.33, 80.67, 81.83, 81.83, 82.5, 83, 84, 85.83, 87,
      87.17, 87.2, 87.5, 87.83, 88, 88.17, 88.5, 89, 89.67, 89.83, 90, 90,
      90.67, 91, 92, 92.33, 92.4, 93, 93, 93, 93.67, 93.83, 94, 96.67, 96.67,
      96.83,
    ],
  },
  {
    name: "3B",
    value: [
      65.2, 66, 66.5, 67, 68, 75.12, 77, 78.5, 79.67, 80.83, 81, 82, 82, 82.83,
      83.4, 84.17, 84.83, 86, 86.67, 87, 87, 88, 88.17, 88.5, 88.67, 89, 89,
      89.17, 89.33, 90, 90.33, 91, 91.5, 92, 92, 92.33, 92.33, 92.33, 92.4,
      92.67, 93, 93, 93.5, 93.5, 95, 95.33, 96.5, 96.67,
    ],
  },
  {
    name: "4A",
    value: [
      70.6, 72, 76, 76.4, 77, 78, 78.4, 79, 83.2, 83.4, 83.6, 85.17, 86, 86.2,
      86.8, 86.8, 87, 87.2, 87.8, 88, 88.4, 88.6, 88.8, 89, 89, 89, 89, 89.2,
      89.2, 89.2, 90.75, 91, 91, 91.6, 92, 92, 92.2, 92.2, 93, 93, 93, 93.4,
      93.4, 93.4, 94, 94.4, 94.8, 95.67,
    ],
  },
];

let GRADES_MEDIAN = [
  {
    x: "1A",
    value: [83.36],
  },
  {
    x: "1B",
    value: [79.6],
  },
  {
    x: "2A",
    value: [80.83],
  },
  {
    x: "2B",
    value: [79.4],
  },
  {
    x: "3A",
    value: [88.5],
  },
  {
    x: "3B",
    value: [88.585],
  },
  {
    x: "4A",
    value: [89],
  },
];

let ATTENDANCE = [
  { group: "1A", "0-25%": 1, "26-50%": 2, "51-75%": 9, "76-100%": 41 },
  { group: "1B", "0-25%": 5, "26-50%": 6, "51-75%": 6, "76-100%": 33 },
  { group: "2A", "0-25%": 5, "26-50%": 3, "51-75%": 14, "76-100%": 27 },
  { group: "2B", "0-25%": 6, "26-50%": 4, "51-75%": 15, "76-100%": 25 },
  { group: "3A", "0-25%": 6, "26-50%": 10, "51-75%": 18, "76-100%": 16 },
  { group: "3B", "0-25%": 13, "26-50%": 9, "51-75%": 4, "76-100%": 24 },
  { group: "4A", "0-25%": 12, "26-50%": 8, "51-75%": 5, "76-100%": 24 },
];

let NUM_MIDTERMS_FAILED = [
  {
    name: "0",
    value: 21,
  },
  {
    name: "1",
    value: 1,
  },
  {
    name: "2",
    value: 10,
  },
  {
    name: "3",
    value: 4,
  },
  {
    name: "4",
    value: 1,
  },
  {
    name: "5",
    value: 1,
  },
  {
    name: "6",
    value: 1,
  },
  {
    name: "8",
    value: 3,
  },
  {
    name: "9",
    value: 1,
  },
];

let NUM_CLASSES_FAILED = [
  {
    name: "0",
    value: 46,
  },
  {
    name: "1",
    value: 3,
  },
  {
    name: "2+",
    value: 7,
  },
];

let CLASSES_FAILED = [
  {
    name: "CHINA 202",
    value: 1,
  },
  {
    name: "CHINA 202R",
    value: 1,
  },
  {
    name: "CS 341",
    value: 1,
  },
  {
    name: "CS 343",
    value: 1,
  },
  {
    name: "EARTH 121",
    value: 1,
  },
  {
    name: "ECE 105",
    value: 1,
  },
  {
    name: "ECE 106",
    value: 1,
  },
  {
    name: "ECE 124",
    value: 2,
  },
  {
    name: "MATH 117",
    value: 1,
  },
  {
    name: "MATH 213",
    value: 3,
  },
  {
    name: "MATH 239",
    value: 1,
  },
  {
    name: "PHYS 234",
    value: 1,
  },
  {
    name: "SE 380",
    value: 2,
  },
  {
    name: "STAT 206",
    value: 1,
  },
];

let ATTEND_OFFICE_HOURS = [
  {
    name: "Yes",
    value: 40,
  },
  {
    name: "No",
    value: 15,
  },
];

let FAVOURITE_COURSE = [
  {
    name: "CHINA 101",
    value: 1,
  },
  {
    name: "CLAS 104",
    value: 1,
  },
  {
    name: "CS 240E",
    value: 2,
  },
  {
    name: "CS 241",
    value: 4,
  },
  {
    name: "CS 241E",
    value: 1,
  },
  {
    name: "CS 247",
    value: 1,
  },
  {
    name: "CS 341",
    value: 1,
  },
  {
    name: "CS 343",
    value: 10,
  },
  {
    name: "CS 349",
    value: 1,
  },
  {
    name: "CS 370",
    value: 2,
  },
  {
    name: "CS 449",
    value: 5,
  },
  {
    name: "CS 452",
    value: 1,
  },
  {
    name: "CS 476",
    value: 1,
  },
  {
    name: "CS 486",
    value: 2,
  },
  {
    name: "CS 488",
    value: 3,
  },
  {
    name: "ECE 105",
    value: 2,
  },
  {
    name: "ECE 124",
    value: 2,
  },
  {
    name: "ECE 454",
    value: 2,
  },
  {
    name: "ECE 459",
    value: 1,
  },
  {
    name: "ENVS 205",
    value: 1,
  },
  {
    name: "FINE 100",
    value: 1,
  },
  {
    name: "MATH 135",
    value: 1,
  },
  {
    name: "MATH 239",
    value: 2,
  },
  {
    name: "MUSIC 140",
    value: 2,
  },
  {
    name: "PLAN 100",
    value: 1,
  },
  {
    name: "SE 212",
    value: 3,
  },
  {
    name: "SE 380",
    value: 1,
  },
  {
    name: "SPCOM 223",
    value: 1,
  },
  {
    name: "STAT 333",
    value: 1,
  },
  {
    name: "SYDE 552",
    value: 1,
  },
];

let FAVOURITE_COURSE_PER_TERM = {
  TERM_1A: [
    { name: "CS 137", value: 15 },
    { name: "ECE 105", value: 2 },
    { name: "ECE 140", value: 1 },
    { name: "MATH 115", value: 1 },
    { name: "MATH 117", value: 2 },
    { name: "MATH 135", value: 23 },
    { name: "MATH 145", value: 2 },
    { name: "SE 101", value: 4 },
  ],
  TERM_1B: [
    { name: "CS 138", value: 19 },
    { name: "ECE 106", value: 3 },
    { name: "ECE 124", value: 17 },
    { name: "ECE 140", value: 5 },
    { name: "MATH 119", value: 4 },
  ],
  TERM_2A: [
    { name: "CS 241", value: 11 },
    { name: "CS 241E", value: 9 },
    { name: "ECE 222", value: 2 },
    { name: "SE 212", value: 12 },
    { name: "SPCOM 223", value: 6 },
    { name: "SPCOMM 223", value: 1 },
    { name: "STAT 206", value: 7 },
  ],
  TERM_2B: [
    { name: "CHINA 101", value: 1 },
    { name: "CHINA 101R", value: 1 },
    { name: "CS 240", value: 7 },
    { name: "CS 240E", value: 3 },
    { name: "CS 247", value: 15 },
    { name: "CS 349", value: 2 },
    { name: "JAPAN 202R", value: 1 },
    { name: "MATH 239", value: 8 },
    { name: "MSCI 261", value: 1 },
    { name: "MUSIC 140", value: 2 },
    { name: "SCI 238", value: 5 },
    { name: "STAT 330", value: 1 },
    { name: "STV 100", value: 1 },
  ],
  TERM_3A: [
    { name: "ARTS 490", value: 1 },
    { name: "BIOL 110", value: 1 },
    { name: "CHINA 102R", value: 1 },
    { name: "CLAS 104", value: 1 },
    { name: "CS 341", value: 9 },
    { name: "CS 348", value: 1 },
    { name: "CS 349", value: 14 },
    { name: "CS 370", value: 9 },
    { name: "CS 480", value: 1 },
    { name: "CS 488", value: 1 },
    { name: "ECE 358", value: 1 },
    { name: "PSYCH 101", value: 1 },
    { name: "SE 350", value: 5 },
    { name: "STAT 333", value: 1 },
  ],
  TERM_3B: [
    { name: "CHINA 201R", value: 1 },
    { name: "CO 487", value: 1 },
    { name: "CS 343", value: 23 },
    { name: "CS 348", value: 4 },
    { name: "CS 350", value: 2 },
    { name: "CS 370", value: 2 },
    { name: "CS 449", value: 3 },
    { name: "CS 454", value: 1 },
    { name: "CS 456", value: 1 },
    { name: "CS 458", value: 1 },
    { name: "CS 488", value: 1 },
    { name: "FINE 150", value: 2 },
    { name: "PLAN 100", value: 1 },
    { name: "SE 380", value: 3 },
    { name: "SE 390", value: 1 },
    { name: "SE 464", value: 1 },
  ],
  TERM_4A: [
    { name: "BIOL 239", value: 1 },
    { name: "BIOL 273", value: 1 },
    { name: "CS 449", value: 5 },
    { name: "CS 458", value: 4 },
    { name: "CS 466", value: 1 },
    { name: "CS 480", value: 1 },
    { name: "CS 486", value: 2 },
    { name: "CS 488", value: 3 },
    { name: "EARTH 121", value: 1 },
    { name: "ECE 358", value: 2 },
    { name: "ECE 454", value: 9 },
    { name: "ECE 457A", value: 2 },
    { name: "ECE 458", value: 3 },
    { name: "ECE 481", value: 1 },
    { name: "ENGL 293", value: 1 },
    { name: "ENVS 200", value: 1 },
    { name: "ENVS 205", value: 1 },
    { name: "GEOG 181", value: 1 },
    { name: "MSCI 541", value: 1 },
    { name: "MUSIC 140", value: 1 },
    { name: "SCI 238", value: 1 },
    { name: "SE 490", value: 1 },
    { name: "STAT 333", value: 1 },
    { name: "STAT 340", value: 1 },
  ],
};

let LEAST_FAVOURITE_COURSE = [
  {
    name: "CHE 102",
    value: 4,
  },
  {
    name: "CS 240",
    value: 1,
  },
  {
    name: "CS 241E",
    value: 1,
  },
  {
    name: "CS 343",
    value: 1,
  },
  {
    name: "EARTH 121",
    value: 1,
  },
  {
    name: "ECE 105",
    value: 3,
  },
  {
    name: "ECE 106",
    value: 5,
  },
  {
    name: "ECE 124",
    value: 2,
  },
  {
    name: "ECE 140",
    value: 1,
  },
  {
    name: "ECE 222",
    value: 2,
  },
  {
    name: "ECE 358",
    value: 1,
  },
  {
    name: "MATH 115",
    value: 1,
  },
  {
    name: "MATH 117",
    value: 1,
  },
  {
    name: "MATH 135",
    value: 1,
  },
  {
    name: "MATH 213",
    value: 4,
  },
  {
    name: "MATH 239",
    value: 5,
  },
  {
    name: "MSCI 261",
    value: 2,
  },
  {
    name: "PSYCH 256",
    value: 1,
  },
  {
    name: "SCI 238",
    value: 1,
  },
  {
    name: "SE 212",
    value: 2,
  },
  {
    name: "SE 350",
    value: 3,
  },
  {
    name: "SE 380",
    value: 4,
  },
  {
    name: "SE 463",
    value: 8,
  },
  {
    name: "SE 464",
    value: 2,
  },
  {
    name: "SE 490",
    value: 1,
  },
];

let LEAST_FAVOURITE_COURSE_PER_TERM = {
  TERM_1A: [
    { name: "CS 137", value: 1 },
    { name: "ECE 105", value: 27 },
    { name: "MATH 115", value: 10 },
    { name: "MATH 117", value: 7 },
    { name: "MATH 135", value: 3 },
    { name: "SE 101", value: 1 },
  ],
  TERM_1B: [
    { name: "CS 138", value: 3 },
    { name: "ECE 106", value: 27 },
    { name: "ECE 124", value: 8 },
    { name: "ECE 140", value: 7 },
    { name: "MATH 119", value: 3 },
  ],
  TERM_2A: [
    { name: "CHE 102", value: 13 },
    { name: "CHEM 102", value: 1 },
    { name: "CS 241", value: 3 },
    { name: "CS 241E", value: 2 },
    { name: "ECE 222", value: 19 },
    { name: "ENGL 109", value: 1 },
    { name: "SE 212", value: 2 },
    { name: "SPCOM 223", value: 3 },
    { name: "SPCOMM 223", value: 1 },
    { name: "STAT 206", value: 3 },
  ],
  TERM_2B: [
    { name: "CS 240", value: 1 },
    { name: "CS 247", value: 4 },
    { name: "EARTH 121", value: 3 },
    { name: "ECON 101", value: 1 },
    { name: "MATH 239", value: 14 },
    { name: "MSCI 261", value: 21 },
    { name: "PSYCH 256", value: 1 },
    { name: "SCI 238", value: 2 },
    { name: "STV 202", value: 1 },
  ],
  TERM_3A: [
    { name: "CS 341", value: 3 },
    { name: "CS 349", value: 3 },
    { name: "CS 459", value: 1 },
    { name: "MATH 213", value: 17 },
    { name: "MSCI 442", value: 1 },
    { name: "PHYS 234", value: 1 },
    { name: "SE 350", value: 11 },
    { name: "SE 465", value: 9 },
    { name: "SPCOM 228", value: 1 },
  ],
  TERM_3B: [
    { name: "CS 343", value: 8 },
    { name: "CS 348", value: 7 },
    { name: "CS 380", value: 1 },
    { name: "ECON 101", value: 1 },
    { name: "SE 348", value: 1 },
    { name: "SE 380", value: 18 },
    { name: "SE 390", value: 1 },
    { name: "SE 464", value: 10 },
    { name: "SE 465", value: 1 },
  ],
  TERM_4A: [
    { name: "CS 480", value: 1 },
    { name: "ECE 358", value: 12 },
    { name: "ECE 454", value: 1 },
    { name: "ECE 457A", value: 3 },
    { name: "MSCI 442", value: 1 },
    { name: "SE 463", value: 23 },
    { name: "SE 490", value: 3 },
    { name: "SPCOM 325", value: 1 },
    { name: "STV 100", value: 1 },
  ],
};

let FAVOURITE_PROF = {
  "Alice Gao": 3,
  "Amit Levi": 1,
  "Andrew Denman": 1,
  "Andrew Kennings": 1,
  "Blake VerBerlo": 1,
  "Christopher Batty": 1,
  "Christopher Nielsen": 5,
  "Dan Berry": 1,
  "Daniel Davison": 1,
  "Firas Mansour": 14,
  "Jeff Orchard": 1,
  "Jeff Stacey": 1,
  "Lesley Istead": 1,
  "Nancy Day": 6,
  "Ondrej Lhotak": 1,
  "Peter Buhr": 9,
  "Rob Hackman": 2,
  "Simon Wood": 1,
};

let FYDP_CATEGORY = [
  {
    name: "Advanced Technology",
    value: 20,
  },
  {
    name: "Consultant",
    value: 9,
  },
  {
    name: "Free/Open-Source Software",
    value: 2,
  },
  {
    name: "New Product",
    value: 22,
  },
  {
    name: "Research",
    value: 2,
  },
];

let LIKE_FYDP = [
  {
    name: "Yes",
    value: 36,
  },
  {
    name: "No",
    value: 18,
  },
];

let CONTINUE_FYDP = [
  {
    name: "Yes",
    value: 3,
  },
  {
    name: "No",
    value: 34,
  },
  {
    name: "Uncertain",
    value: 17,
  },
];

let OVERLOAD = [
  { group: "1A", Yes: 1, No: 53 },
  { group: "1B", Yes: 1, No: 49 },
  { group: "2A", Yes: 4, No: 46 },
  { group: "2B", Yes: 27, No: 23 },
  { group: "3A", Yes: 6, No: 43 },
  { group: "3B", Yes: 8, No: 43 },
  { group: "4A", Yes: 8, No: 42 },
];

let OVERLOAD_REASON = [
  {
    name: "Friends were also taking the course",
    value: 1,
  },
  {
    name: "Swapped streams",
    value: 2,
  },
  {
    name: "To challenge myself",
    value: 1,
  },
  {
    name: "To complete a minor",
    value: 7,
  },
  {
    name: "To have a lighter term after",
    value: 21,
  },
  {
    name: "To prepare for work",
    value: 1,
  },
  {
    name: "To prepare for/amend for an exchange term",
    value: 5,
  },
  {
    name: "To take a class that was only offered a specific term",
    value: 10,
  },
  {
    name: "To take more electives than the designated slots",
    value: 13,
  },
  {
    name: "To take the original workload before the calendar was changed",
    value: 1,
  },
];

let CR_NCR_IN_3A = [
  {
    name: "Yes",
    value: 9,
  },
  {
    name: "No",
    value: 40,
  },
];

let REASON_FOR_CR_NCR_IN_3A = [
  {
    name: "CR would look better than low grades",
    value: 4,
  },
  {
    name: "Don't want low mark in cumulative average",
    value: 4,
  },
  {
    name: "Exchange",
    value: 4,
  },
  {
    name: "Change in grading schemes lowered grades",
    value: 1,
  },
  {
    name: "Eligiblility for supplemental exam",
    value: 1,
  },
];

let RESIDENCE = [
  { name: "UW Place", value: 12, toggle: "1a" },
  {
    name: "Claudette Miller Hall",
    value: 1,
    toggle: "1a",
  },
  { name: "Columbia Lake Village", value: 1, toggle: "1a" },
  { name: "Mackenzie King Village", value: 1, toggle: "1a" },
  { name: "Village 1", value: 12, toggle: "1a" },
  { name: "Ron Eydt Village", value: 3, toggle: "1a" },
  { name: "Conrad Grebel University College", value: 1, toggle: "1a" },
  { name: "St. Jerome's University", value: 3, toggle: "1a" },
  { name: "St. Paul's University College", value: 1, toggle: "1a" },
  { name: "Renison University College", value: 3, toggle: "1a" },
  { name: "Phillip St", toggle: "1a" },
  { name: "WCRI", toggle: "1a" },
  { name: "University Ave", value: 2, toggle: "1a" },
  { name: "Columbia St", value: 2, toggle: "1a" },
  { name: "Lester St", value: 1, toggle: "1a" },
  { name: "Sunview St", toggle: "1a" },
  { name: "Spruce St", toggle: "1a" },
  { name: "Elgin St", toggle: "1a" },
  { name: "Duke St", toggle: "1a" },
  { name: "Albert St", toggle: "1a" },
  { name: "King St", value: 1, toggle: "1a" },
  { name: "Larch St", toggle: "1a" },
  { name: "Regina St", toggle: "1a" },
  { name: "Scott St", toggle: "1a" },
  { name: "Hemlock St", toggle: "1a" },
  { name: "Cardill Cres", toggle: "1a" },
  { name: "Caroline St", toggle: "1a" },
  { name: "Balsam St", toggle: "1a" },
  { name: "Bridgeport Rd", toggle: "1a" },
  { name: "Scott St", toggle: "1a" },
  { name: "Barrel Yards Blvd", toggle: "1a" },
  { name: "Claudette Miller Hall", value: 1, toggle: "1b" },
  { name: "Columbia St", value: 2, toggle: "1b" },
  { name: "Columbia Lake Village", value: 1, toggle: "1b" },
  { name: "Conrad Grebel University College", value: 1, toggle: "1b" },
  { name: "King St", value: 1, toggle: "1b" },
  { name: "Lester St", value: 2, toggle: "1b" },
  { name: "Mackenzie King Village", value: 1, toggle: "1b" },
  { name: "Renison University College", value: 3, toggle: "1b" },
  { name: "Ron Eydt Village", value: 3, toggle: "1b" },
  { name: "St. Jerome's University", value: 3, toggle: "1b" },
  { name: "St. Paul's University College", value: 1, toggle: "1b" },
  { name: "UW Place", value: 12, toggle: "1b" },
  { name: "University Ave", value: 2, toggle: "1b" },
  { name: "Village 1", value: 11, toggle: "1b" },
  { name: "Albert St", value: 3, toggle: "2a" },
  { name: "Columbia St", value: 3, toggle: "2a" },
  { name: "Conrad Grebel University College", value: 1, toggle: "2a" },
  { name: "Hemlock St", value: 1, toggle: "2a" },
  { name: "King St", value: 1, toggle: "2a" },
  { name: "Lester St", value: 18, toggle: "2a" },
  { name: "Phillip St", value: 7, toggle: "2a" },
  { name: "Spruce St", value: 2, toggle: "2a" },
  { name: "St. Jerome's University", value: 1, toggle: "2a" },
  { name: "UW Place", value: 1, toggle: "2a" },
  { name: "University Ave", value: 3, toggle: "2a" },
  { name: "WCRI", value: 1, toggle: "2a" },
  { name: "Waterloo, Ontario, Canada", value: 1, toggle: "2a" },
  { name: "Westcourt Pl", value: 1, toggle: "2a" },
  { name: "Albert St", value: 3, toggle: "2b" },
  { name: "Columbia St", value: 4, toggle: "2b" },
  { name: "Conrad Grebel University College", value: 1, toggle: "2b" },
  { name: "Elgin St", value: 1, toggle: "2b" },
  { name: "Hemlock St", value: 1, toggle: "2b" },
  { name: "King St", value: 1, toggle: "2b" },
  { name: "Lester St", value: 18, toggle: "2b" },
  { name: "Phillip St", value: 8, toggle: "2b" },
  { name: "Spruce St", value: 1, toggle: "2b" },
  { name: "UW Place", value: 1, toggle: "2b" },
  { name: "University Ave", value: 2, toggle: "2b" },
  { name: "WCRI", value: 1, toggle: "2b" },
  { name: "Waterloo, Ontario, Canada", value: 1, toggle: "2b" },
  { name: "Westcourt Pl", value: 1, toggle: "2b" },
  { name: "Albert St", value: 3, toggle: "3a" },
  { name: "Cardill Cres", value: 3, toggle: "3a" },
  { name: "College Ave", value: 1, toggle: "3a" },
  { name: "Columbia St", value: 4, toggle: "3a" },
  { name: "Duke St", value: 1, toggle: "3a" },
  { name: "King St", value: 3, toggle: "3a" },
  { name: "Lester St", value: 11, toggle: "3a" },
  { name: "Phillip St", value: 6, toggle: "3a" },
  { name: "Regina St", value: 3, toggle: "3a" },
  { name: "Singapore", value: 3, toggle: "3a" },
  { name: "St. Jerome's University", value: 1, toggle: "3a" },
  { name: "Sunview St", value: 1, toggle: "3a" },
  { name: "Lund, Sweden", value: 1, toggle: "3a" },
  { name: "Waterloo, Ontario, Canada", value: 1, toggle: "3a" },
  { name: "Westcourt Pl", value: 1, toggle: "3a" },
  { name: "Westmount Rd", value: 1, toggle: "3a" },
  { name: "Acton, Ontario, Canada", value: 1, toggle: "3b" },
  { name: "Albert St", value: 4, toggle: "3b" },
  { name: "Bridgeport Rd", value: 1, toggle: "3b" },
  { name: "Columbia St", value: 1, toggle: "3b" },
  { name: "Gurugram, India", value: 1, toggle: "3b" },
  { name: "Kelowna", value: 1, toggle: "3b" },
  { name: "Larch St", value: 1, toggle: "3b" },
  { name: "Lester St", value: 7, toggle: "3b" },
  { name: "Mississauga, Ontario, Canada", value: 1, toggle: "3b" },
  { name: "Niagara Falls", value: 1, toggle: "3b" },
  { name: "Phillip St", value: 12, toggle: "3b" },
  { name: "Sunview St", value: 1, toggle: "3b" },
  { name: "Surrey, BC, Canada", value: 1, toggle: "3b" },
  { name: "Toronto, Ontario, Canada", value: 2, toggle: "3b" },
  { name: "Victoria, BC, Canada", value: 1, toggle: "3b" },
  { name: "Waterloo, Ontario, Canada", value: 1, toggle: "3b" },
  { name: "Westcourt Pl", value: 1, toggle: "3b" },
  { name: "Westmount Rd", value: 1, toggle: "3b" },
  { name: "Whitby, Ontario, Canada", value: 1, toggle: "3b" },
  { name: "Winnipeg, Manitoba, Canada", value: 2, toggle: "3b" },
  { name: "Acton, Ontario, Canada", value: 1, toggle: "4a" },
  { name: "Albert St", value: 2, toggle: "4a" },
  { name: "Balsam St", value: 1, toggle: "4a" },
  { name: "Caroline St", value: 1, toggle: "4a" },
  { name: "Chicago, USA", value: 1, toggle: "4a" },
  { name: "Conrad Grebel University College", value: 1, toggle: "4a" },
  { name: "Kelowna", value: 1, toggle: "4a" },
  { name: "Larch St", value: 1, toggle: "4a" },
  { name: "Lester St", value: 4, toggle: "4a" },
  { name: "Niagara Falls", value: 1, toggle: "4a" },
  { name: "Ottawa", value: 2, toggle: "4a" },
  { name: "Phillip St", value: 8, toggle: "4a" },
  { name: "Richmond Hill, Ontario, Canada", value: 1, toggle: "4a" },
  { name: "Rochester, Minnesota, USA", value: 1, toggle: "4a" },
  { name: "Shanghai, China", value: 1, toggle: "4a" },
  { name: "Sunview St", value: 1, toggle: "4a" },
  { name: "Toronto, Ontario, Canada", value: 3, toggle: "4a" },
  { name: "Vancouver, BC, Canada", value: 8, toggle: "4a" },
  { name: "Waterloo, Ontario, Canada", value: 1, toggle: "4a" },
  { name: "Westcourt Pl", value: 1, toggle: "4a" },
  { name: "Westmount Rd", value: 1, toggle: "4a" },
  { name: "Whitby, Ontario, Canada", value: 1, toggle: "4a" },
  { name: "Winnipeg, Manitoba, Canada", value: 1, toggle: "4a" },
  { name: "Albert St", value: 2, toggle: "4b" },
  { name: "Barrel Yards Blvd", value: 1, toggle: "4b" },
  { name: "Caroline St", value: 1, toggle: "4b" },
  { name: "Columbia Lake Village", value: 2, toggle: "4b" },
  { name: "Columbia St", value: 1, toggle: "4b" },
  { name: "King St", value: 1, toggle: "4b" },
  { name: "Larch St", value: 2, toggle: "4b" },
  { name: "Lester St", value: 9, toggle: "4b" },
  { name: "Parents' house", value: 1, toggle: "4b" },
  { name: "Phillip St", value: 10, toggle: "4b" },
  { name: "Scott St", value: 1, toggle: "4b" },
  { name: "Sunview St", value: 2, toggle: "4b" },
  { name: "Toronto, Ontario, Canada", value: 2, toggle: "4b" },
  { name: "UW Place", value: 2, toggle: "4b" },
  { name: "University Ave", value: 1, toggle: "4b" },
  { name: "Waterloo, Ontario, Canada", value: 4, toggle: "4b" },
  { name: "Winnipeg, Manitoba, Canada", toggle: "4b", value: 1 },
];

let HOUSING_COSTS = {
  "1A": [
    0, 800, 1000, 1200, 2260, 2600, 2800, 3200, 3200, 3200, 3404, 3600, 3700,
    3794, 3794, 3800, 3832, 3873, 3873, 3873, 3873, 3966, 4000, 4000, 4000,
    4000, 4000, 4000, 4000, 4000, 4102, 4200, 4800, 4800, 5000, 5000, 5500,
    6000, 6000, 6000, 6540, 6800, 7000,
  ],
  "1B": [
    800, 1000, 1200, 2260, 2500, 2530, 2554, 2584, 2584, 2584, 2600, 2600, 2645,
    2678, 2735, 2800, 2800, 3000, 3000, 3000, 3200, 3200, 3200, 3404, 3600,
    3794, 3873, 4000, 4000, 4000, 4000, 4000, 4000, 4360, 4800, 5000, 5000,
    6000, 6000, 6000, 6800, 7000,
  ],
  "2A": [
    0, 0, 600, 600, 650, 730, 750, 2000, 2160, 2200, 2200, 2260, 2300, 2320,
    2400, 2400, 2400, 2400, 2400, 2500, 2600, 2600, 2680, 2700, 2800, 2860,
    2860, 2860, 2860, 2880, 2880, 2880, 2880, 2920, 2960, 3000, 3000, 3000,
    3000, 3080, 3200, 3200, 3200, 3500, 3600, 4000,
  ],
  "2B": [
    0, 600, 600, 650, 730, 750, 1000, 1960, 2160, 2200, 2200, 2200, 2200, 2260,
    2300, 2320, 2400, 2400, 2400, 2400, 2500, 2500, 2600, 2600, 2680, 2700,
    2800, 2860, 2860, 2860, 2860, 2880, 2880, 2880, 2880, 2920, 2960, 3000,
    3000, 3000, 3080, 3200, 3200, 3200, 3600, 4000,
  ],
  "3A": [
    640, 750, 800, 800, 850, 1000, 1500, 1800, 2000, 2000, 2200, 2200, 2250,
    2250, 2300, 2400, 2456, 2494.07, 2520, 2520, 2600, 2600, 2600, 2680, 2800,
    2800, 2800, 2800, 2900, 3000, 3000, 3000, 3000, 3000, 3000, 3080, 3200,
    3200, 3200, 3200, 3400, 3400, 3452, 3500, 4000,
  ],
  "3B": [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 300, 600, 900, 1000, 2200, 2300,
    2500, 2600, 2600, 2600, 2600, 2620, 2680, 2700, 2720, 2800, 2800, 2800,
    2900, 3000, 3200, 3200, 3300, 3400, 3600, 3610, 3740, 3800, 3800, 3800,
    3900,
  ],
  "4A": [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 600, 900, 1000, 1000, 1600, 2000, 2000,
    2200, 2200, 2400, 2489.58, 2500, 2600, 2720, 3000, 3000, 3200, 3200, 3200,
    3300, 3740, 3740, 3800, 3800, 3800, 3840, 3900, 3900, 4000, 4400, 4400,
    4500, 5200,
  ],
};

let PEOPLE_LIVED_WITH = {
  "1A": [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4,
  ],
  "1B": [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2,
    2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4,
  ],
  "2A": [
    0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4,
    4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 7,
  ],
  "2B": [
    0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4,
    4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 7,
  ],
  "3A": [
    0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3,
    3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5,
  ],
  "3B": [
    0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3,
    3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5,
  ],
  "4A": [
    0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3,
    3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 6,
  ],
};

let HACKATHONS_ATTENDED = {
  "1A": [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3,
    5,
  ],
  "1B": [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 5,
  ],
  "2A": [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2,
  ],
  "2B": [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  ],
  "3A": [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2,
  ],
  "3B": [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
  ],
  "4A": [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ],
};

let HOURS_ON_SIDE_PROJECTS_PER_WEEK = {
  "1A": [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 5, 5, 5, 6, 8, 10, 10, 10,
  ],
  "1B": [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.5, 1, 1,
    1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 5, 5, 5, 8, 10, 10,
  ],
  "2A": [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.5, 1,
    1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 5, 5, 5, 8, 10,
  ],
  "2B": [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0.5, 1, 1, 1, 1, 2, 2, 2, 3, 3, 5, 5, 5, 10,
  ],
  "3A": [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 3, 4, 5, 5, 5, 10, 15,
  ],
  "3B": [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 9, 10, 10, 30, 60,
  ],
  "4A": [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 3, 3, 10, 20, 60,
  ],
};

let HOURS_AT_SE_EVENTS_PER_WEEK = {
  "1A": [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.25, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 10, 100,
  ],
  "1B": [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2, 0.25, 0.25, 0.5, 0.5, 0.5, 0.5,
    0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 10,
  ],
  "2A": [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1, 0.125, 0.2, 0.25, 0.5,
    0.5, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 10,
  ],
  "2B": [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1, 0.2, 0.25,
    0.25, 0.5, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 10,
  ],
  "3A": [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0.1, 0.1, 0.125, 0.25, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3,
  ],
  "3B": [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0.5, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 3,
  ],
  "4A": [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2,
  ],
};

let HOURS_ON_DESIGN_TEAM_OR_TECHNICAL_EXTRACURRICULARS_PER_WEEK = {
  "1A": [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0.5, 1, 1, 1, 1, 2, 3, 4, 4, 5, 7, 8, 8, 10,
  ],
  "1B": [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 3, 3, 3, 4, 4, 7, 10, 10, 15,
  ],
  "2A": [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 4, 4, 4, 10, 40,
  ],
  "2B": [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 3, 3, 5, 10, 25, 40,
  ],
  "3A": [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 5, 6, 10, 20,
  ],
  "3B": [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 4, 5,
  ],
  "4A": [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 5, 6, 8, 35,
  ],
};

let DESIGN_TEAM_OR_TECHNICAL_EXTRACURRICULARS = [
  { name: "CUTC", value: 1, toggle: "1a" },
  { name: "Hack the North", value: 1, toggle: "1a" },
  { name: "Hackathons", value: 1, toggle: "1a" },
  { name: "SailBot", value: 1, toggle: "1a" },
  { name: "Sailbot", value: 3, toggle: "1a" },
  { name: "UW Robotics", value: 1, toggle: "1a" },
  { name: "UWNRG", value: 2, toggle: "1a" },
  { name: "WATonomous", value: 1, toggle: "1a" },
  { name: "Waterloo Local Hack Day 2017", value: 1, toggle: "1a" },
  { name: "Waterloop", value: 4, toggle: "1a" },
  { name: "WiCS", value: 1, toggle: "1a" },

  { name: "CUSEC", value: 1, toggle: "1b" },
  { name: "Equithon", value: 1, toggle: "1b" },
  { name: "Hack the North", value: 2, toggle: "1b" },
  { name: "Hackathons", value: 1, toggle: "1b" },
  { name: "Sailbot", value: 1, toggle: "1b" },
  { name: "UWNRG", value: 2, toggle: "1b" },
  { name: "WATonomous", value: 3, toggle: "1b" },
  { name: "Waterloop", value: 2, toggle: "1b" },
  { name: "WiCS", value: 1, toggle: "1b" },

  { name: "Hack the North", value: 3, toggle: "2a" },
  { name: "UW Biomechatronics", value: 1, toggle: "2a" },
  { name: "UW Blueprint", value: 1, toggle: "2a" },
  { name: "UWNRG", value: 1, toggle: "2a" },
  { name: "WiCS", value: 1, toggle: "2a" },
  { name: "Working", value: 1, toggle: "2a" },

  { name: "Aquadrone", value: 1, toggle: "2b" },
  { name: "Hack the North", value: 1, toggle: "2b" },
  { name: "UW Biomechatronics", value: 1, toggle: "2b" },
  { name: "UW Flow", value: 1, toggle: "2b" },
  { name: "UW Blueprint", value: 1, toggle: "2b" },
  { name: "UWNRG", value: 1, toggle: "2b" },
  { name: "WATonomous", value: 1, toggle: "2b" },
  { name: "WiCS", value: 1, toggle: "2b" },
  { name: "Working", value: 2, toggle: "2b" },

  { name: "Aquadrone", value: 1, toggle: "3a" },
  { name: "Poupart's NLP Reading Group", value: 1, toggle: "3a" },
  { name: "SE Soc", value: 1, toggle: "3a" },
  { name: "UW Blueprint", value: 2, toggle: "3a" },
  { name: "UW Flow", value: 1, toggle: "3a" },
  { name: "UWAT VEXU Robotics", value: 1, toggle: "3a" },
  { name: "Working", value: 2, toggle: "3a" },

  { name: "Aquadrone", value: 1, toggle: "3b" },
  { name: "Hackathon", value: 1, toggle: "3b" },
  { name: "Rewriting the Code", value: 1, toggle: "3b" },
  { name: "SE Soc", value: 1, toggle: "3b" },
  { name: "UW Blueprint", value: 2, toggle: "3b" },
  { name: "UWAT VEXU Robotics", value: 1, toggle: "3b" },
  { name: "Working", value: 2, toggle: "3b" },

  { name: "Aquadrone", value: 1, toggle: "4a" },
  { name: "SE Soc", value: 1, toggle: "4a" },
  { name: "URA", value: 1, toggle: "4a" },
  { name: "UW Blueprint", value: 1, toggle: "4a" },
  { name: "UWAT VEXU Robotics", value: 1, toggle: "4a" },
  { name: "Working", value: 1, toggle: "4a" },

  { name: "SE Soc", value: 1, toggle: "4b" },
  { name: "UW Blueprint", value: 1, toggle: "4b" },
  { name: "Working", value: 2, toggle: "4b" },
];

let HOURS_ON_NON_TECHNICAL_EXTRACURRICULARS_PER_WEEK = {
  "1A": [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.5, 1, 1, 1, 1,
    2, 2, 2, 2, 2, 3, 3, 4, 4, 4, 5, 5, 6, 6, 7, 10, 10, 20, 160,
  ],
  "1B": [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
    1, 1, 1.5, 2, 2, 2, 2, 2, 2, 4, 4, 4, 5, 6, 7, 10, 10, 15, 25, 160,
  ],
  "2A": [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 2,
    2, 2, 3, 3, 3, 4, 4.5, 5, 5, 5, 5, 6, 6, 7, 10, 10, 30, 160,
  ],
  "2B": [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 3, 3, 5, 10, 25, 40,
  ],
  "3A": [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1.5, 2, 2, 2,
    2, 2, 3, 3, 3, 4, 5, 5, 5, 6, 6, 6, 7, 10, 12, 14, 15, 20, 200,
  ],
  "3B": [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1.5,
    2, 2, 2, 2, 2, 3, 4, 5, 6, 6, 6, 8, 12, 15, 18, 20, 20, 27, 100,
  ],
  "4A": [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1.5,
    2, 2, 3, 4, 4, 4, 5, 6, 6, 8, 10, 12, 15, 20, 20, 25, 40, 100,
  ],
};

let NON_TECHNICAL_EXTRACURRICULARS = {
  Acapella: 5,
  Archery: 1,
  Badminton: 3,
  Basketball: 2,
  "Blogging and Content Creation": 1,
  Dodgeball: 3,
  "Dragon Boat": 2,
  EngPlay: 1,
  EngSoc: 1,
  Equestrian: 1,
  Feminine: 1,
  Fencing: 1,
  Frisbee: 4,
  Futsal: 1,
  "Hip Hop": 2,
  Intramurals: 4,
  Judo: 1,
  Juggling: 1,
  Kizomba: 1,
  Limelight: 1,
  "Muay Thai": 5,
  "Music Production": 1,
  Orchestra: 1,
  "Phil's": 1,
  Poker: 1,
  "Power to Change": 1,
  "Residence Don": 2,
  "Rock Climbing": 1,
  Skating: 1,
  Soccer: 4,
  Softwears: 1,
  Squash: 1,
  Swimming: 1,
  "Tech+": 1,
  Tennis: 2,
  Toastmasters: 1,
  "UW Serve": 1,
  Volleyball: 9,
  "WEEF TA": 1,
  "Jazz Band": 1,
  "SE Soc": 1,
};

let HOURS_ON_FYDP_PER_WEEK = {
  "3B": [
    0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4,
    4, 5, 5, 5, 5, 6, 8, 8, 8, 8, 8, 8, 8, 8, 10, 10, 10, 12, 15,
  ],
  "4A": [
    0.5, 1, 1, 1, 1, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6,
    6, 6, 8, 8, 8, 10, 10, 10, 10, 10, 10, 10, 10, 15, 15, 16, 20,
  ],
};

let BURN_OUT_PER_TERM = [
  { group: "1a", No: 39, Yes: 10 },
  { group: "1b", No: 30, Yes: 18 },
  { group: "2a", No: 38, Yes: 11 },
  { group: "2b", No: 34, Yes: 15 },
  { group: "3a", No: 34, Yes: 14 },
  { group: "3b", No: 35, Yes: 15 },
  { group: "4a", No: 39, Yes: 10 },
];

let OPTIONS_OR_MINORS = [
  {
    name: "AI option",
    value: 1,
  },
  {
    name: "Cognitive Sciences Minor",
    value: 1,
  },
  {
    name: "Computational Math",
    value: 1,
  },
  {
    name: "Computational Mathematics Minor",
    value: 1,
  },
  {
    name: "Human Computer Interaction",
    value: 1,
  },
  {
    name: "Human-Computer Interaction",
    value: 1,
  },
  {
    name: "Joint Major in Statistics",
    value: 1,
  },
  {
    name: "Management Science Option",
    value: 1,
  },
];

export {
  FAVOURITE_COURSE,
  LEAST_FAVOURITE_COURSE,
  NUM_CLASSES_FAILED,
  CLASSES_FAILED,
  NUM_MIDTERMS_FAILED,
  ATTEND_OFFICE_HOURS,
  FAVOURITE_PROF,
  LIKE_FYDP,
  CONTINUE_FYDP,
  FYDP_CATEGORY,
  OVERLOAD_REASON,
  CR_NCR_IN_3A,
  REASON_FOR_CR_NCR_IN_3A,
  GRADES,
  GRADES_MEDIAN,
  ATTENDANCE,
  OVERLOAD,
  FAVOURITE_COURSE_PER_TERM,
  LEAST_FAVOURITE_COURSE_PER_TERM,
  HOUSING_COSTS,
  PEOPLE_LIVED_WITH,
  HACKATHONS_ATTENDED,
  HOURS_ON_SIDE_PROJECTS_PER_WEEK,
  HOURS_AT_SE_EVENTS_PER_WEEK,
  HOURS_ON_DESIGN_TEAM_OR_TECHNICAL_EXTRACURRICULARS_PER_WEEK,
  HOURS_ON_NON_TECHNICAL_EXTRACURRICULARS_PER_WEEK,
  HOURS_ON_FYDP_PER_WEEK,
  BURN_OUT_PER_TERM,
  OPTIONS_OR_MINORS,
  NON_TECHNICAL_EXTRACURRICULARS,
  DESIGN_TEAM_OR_TECHNICAL_EXTRACURRICULARS,
  RESIDENCE,
};
