// Which of the following ethnic group(s) best describes you?
const ETHNICITY = [{
  "name": "East Asian Caucasian",
  "value": 2,
}, {
  "name": "Southeast Asian Caucasian",
  "value": 1,
}, {
  "name": "Caucasian",
  "value": 14,
}, {
  "name": "South East Asian",
  "value": 2,
}, {
  "name": "South Asian",
  "value": 6,
}, {
  "name": "East Asian",
  "value": 37,
}, {
  "name": "Middle Eastern",
  "value": 1,
}, {
  "name": "Black",
  "value": 2,
}, {
  "name": "Latin American",
  "value": 1,
}]

// What is your gender?
const GENDER = [{
  "name": "Men",
  "value": 39
}, {
  "name": "Women",
  "value": 15
}, {
  "name": "Non-Binary",
  "value": 1
}, {
  "name": "Prefer not to disclose",
  "value": 9
}];

// What year were you born?
const YEAR_OF_BIRTH = [{
  "name": "1996",
  "value": 1
}, {
  "name": "1997",
  "value": 2
}, {
  "name": "1998",
  "value": 4
}, {
  "name": "1999",
  "value": 42
}];

// What is your sexual orientation?
const SEXUAL_ORIENTATION = [{
  "name": "Heterosexual",
  "value": 51
}, {
  "name": "Bisexual",
  "value": 3
}, {
  "name": "Prefer not to disclose",
  "value": 8
}];

// Where do you consider your home (city, province, country)?
const HOME_LOCATION = [{
  "name": "GTA / Toronto",
  "value": 21
}, {
  "name": "Ottawa",
  "value": 8
}, {
  "name": "Other Ontario",
  "value": 6
}, {
  "name": "Alberta",
  "value": 1
}, {
  "name": "Manitoba",
  "value": 2
}, {
  "name": "British Columbia",
  "value": 4
}, {
  "name": "Quebec",
  "value": 2
}, {
  "name": "China",
  "value": 1
}, {
  "name": "India",
  "value": 2
}];

// Which languages do you speak now?
const LANGUAGES_KNOWN = [{
  "name": "Amharic",
  "value": 1
}, {
  "name": "English",
  "value": 47
}, {
  "name": "Mandarin",
  "value": 17
}, {
  "name": "Hindi",
  "value": 4
}, {
  "name": "Punjabi",
  "value": 1
}, {
  "name": "Arabic",
  "value": 1
}, {
  "name": "Sinhalese",
  "value": 2
}, {
  "name": "French",
  "value": 17
}, {
  "name": "Spanish",
  "value": 4
}, {
  "name": "Korean",
  "value": 1
}, {
  "name": "Swahili",
  "value": 1
}, {
  "name": "Ormo",
  "value": 1
}, {
  "name": "Japanese",
  "value": 1
}, {
  "name": "Yoruba",
  "value": 1
}, {
  "name": "Russian",
  "value": 1
}, {
  "name": "Tagalog",
  "value": 2
}];

// Compiled from "Which languages do you speak now?"
const NUM_LANGUAGE = [{
  "name": "1",
  "value": 11
}, {
  "name": "2",
  "value": 25
}, {
  "name": "3",
  "value": 11
}, {
  "name": "4",
  "value": 3
}];

// What was your first language?
const MOTHER_TONGUE = [{
  "name": "Amharic",
  "value": 1
}, {
  "name": "English",
  "value": 25
}, {
  "name": "Mandarin",
  "value": 17
}, {
  "name": "Hindi",
  "value": 2
}, {
  "name": "Punjabi",
  "value": 1
}, {
  "name": "French",
  "value": 1
}, {
  "name": "Hebrew",
  "value": 1
}, {
  "name": "Spanish",
  "value": 1
}];

// Are you an International Student?
const INTERNATIONAL = [{
  "name": "Canadian",
  "value": 50,
}, {
  "name": "International",
  "value": 5,
}, {
  "name": "Prefer not to disclose",
  "value": 10,
}]

// What is the highest level of education your parents/guardians have completed?
const PARENT_EDUCATION = [
  {
    "name": "College Diploma",
    "value": 2
  }, {
    "name": "Bachelors",
    "value": 13
  }, {
    "name": "Masters",
    "value": 17
  }, {
    "name": "Doctorates",
    "value": 7
  }, {
    "name": "Prefer not to disclose",
    "value": 11
  }];

// How many siblings do you have?
const SIBLINGS = [{
  "name": "0",
  "value": 14
}, {
  "name": "1",
  "value": 31
}, {
  "name": "2",
  "value": 8
}, {
  "name": "Prefer not to disclose",
  "value": 12
}];

// What type of high school did you attend?
const HS_TYPE = [{
  "name": "Private",
  "value": 6
}, {
  "name": "Public",
  "value": 46
}, {
  "name": "Catholic",
  "value": 2
}, {
  "name": "Independent",
  "value": 1
}]

// Did you participate in any enriched programs in high school?
const ENRICHED_PROGRAM = [{
  "name": "None",
  "value": 28
}, {
  "name": "AP",
  "value": 11
}, {
  "name": "IB",
  "value": 12
}, {
  "name": "TOPS",
  "value": 1
}, {
  "name": "MACS",
  "value": 1
}, {
  "name": "French Immersion",
  "value": 5
}, {
  "name": "Gifted",
  "value": 11
}, {
  "name": "Arts",
  "value": 2
}];

// Which APs did you take the course or exam for?
const APS_TAKEN = [{
  "name": "Computer Science A",
  "value": 5
}, {
  "name": "Calculus AB",
  "value": 9
}, {
  "name": "Calculus BC",
  "value": 5
}, {
  "name": "Physics 1: Algebra-Based",
  "value": 6
}, {
  "name": "Chemistry",
  "value": 8
}, {
  "name": "English Language and Composition",
  "value": 1
}, {
  "name": "English Literature and Composition",
  "value": 3
}, {
  "name": "Biology",
  "value": 1
}, {
  "name": "Statistics",
  "value": 3
}, {
  "name": "Microeconomics",
  "value": 3
}, {
  "name": "Macroeconomics",
  "value": 1
}, {
  "name": "Physics 2: Algebra-Based",
  "value": 2
}]

// Which IB courses did you take higher level (HL)?
const IBS_TAKEN_HL = [{
  "name": "Language A: Language and Literature",
  "value": 1
}, {
  "name": "Chemistry",
  "value": 3
}, {
  "name": "Mathematics",
  "value": 2
}, {
  "name": "Physics",
  "value": 1
}, {
  "name": "Economics",
  "value": 1
}, {
  "name": "Language A: Literature",
  "value": 2
}]

// Which IB courses did you take standard level (SL)?
const IBS_TAKEN_SL = [{
  "name": "Chemistry",
  "value": 1
}, {
  "name": "Mathematics",
  "value": 2
}, {
  "name": "Physics",
  "value": 2
}, {
  "name": "French",
  "value": 1
}, {
  "name": "Information Technology in a Global Society",
  "value": 2
}, {
  "name": "Language B",
  "value": 2
}, {
  "name": "Theory of Knowledge",
  "value": 2
}, {
  "name": "Computer Science",
  "value": 2
}, {
  "name": "Geography",
  "value": 1
}, {
  "name": "Language A: Literature",
  "value": 1
}]

// Did you attend CEGEP?
const CEGEP = [{
  "name": "Yes, but I only attended partially (did not graduate)",
  "value": 1
}, {
  "name": "Yes, and I completed CEGEP",
  "value": 3
}];

// What CEGEP program were you in?
const CEGEP_TAKEN = [{
  "name": "Computer Science",
  "value": 1
}, {
  "name": "Science Pure and Applied",
  "value": 1
}, {
  "name": "Computer Science and Mathematics",
  "value": 1
}];

// What was your family income before coming to UWaterloo?
const FAMILY_INCOME = [{
  "name": "0-50k / year",
  "value": 2
}, {
  "name": "50k-100k / year",
  "value": 5
}, {
  "name": "100-150k / year",
  "value": 25
}, {
  "name": "150k-200k / year",
  "value": 10
}, {
  "name": "200k-300k / year",
  "value": 4
}, {
  "name": "300k+ / year",
  "value": 2
}, {
  "name": "Prefer not to disclose",
  "value": 14
}];

// Favourite animal(s) as a pet?
const FAVOURITE_PET = [
  { "name": "Bird", "value": 3 },
  { "name": "Cat", "value": 17 },
  { "name": "Dog", "value": 30 },
  { "name": "Fish", "value": 4 },
  { "name": "Rabbit", "value": 2 },
  { "name": "Horse", "value": 1 },
  { "name": "Lizard", "value": 1 },
  { "name": "Leaping Blenny", "value": 1 },
  { "name": "Turtle", "value": 1 },
]

// Were you an eldest or youngest child?
const SIBLING_TYPE = [
  { "name": "Oldest", "value": 25 },
  { "name": "Middle", "value": 4 },
  { "name": "Youngest", "value": 12 },
  { "name": "Only", "value": 15 },
]

// What was your high school admission average? Enter a number up to 100 (eg. 95)
const ADMISSION_AVERAGE = [96, 94, 97, 95.5, 96, 96, 94, 99, 96, 93, 97, 89, 97, 96, 96, 98, 96, 96, 98, 98, 96, 97.6, 97, 95, 95, 97.5, 95, 96, 96, 96, 95, 96, 83, 96, 95.2, 98, 94, 93, 98, 93, 95, 99.2, 95, 97, 91, 99, 96, 94, 96, 97, 95.5]

export {
  ETHNICITY,
  GENDER,
  YEAR_OF_BIRTH,
  SEXUAL_ORIENTATION,
  HOME_LOCATION,
  INTERNATIONAL,
  PARENT_EDUCATION,
  FAMILY_INCOME,
  SIBLINGS,
  HS_TYPE,
  ENRICHED_PROGRAM,
  APS_TAKEN,
  IBS_TAKEN_HL,
  IBS_TAKEN_SL,
  CEGEP,
  CEGEP_TAKEN,
  MOTHER_TONGUE,
  FAVOURITE_PET,
  ADMISSION_AVERAGE,
  NUM_LANGUAGE,
  LANGUAGES_KNOWN,
  SIBLING_TYPE,
}