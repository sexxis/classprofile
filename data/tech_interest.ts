/**
 * tech_interest.ts is new for 2022
 * 
 * One graph per const seems reasonable. I wonder if it's possible
 * to combine the programming language questions into less graphs. 
 * 
 */

// Did you know how to code before university?
const CODE_BEFORE_UNI = [
    { "name": "Yes", "value": 52 },
    { "name": "No", "value": 2 }
]

// Did any of your close family work in tech before university?
const CLOSE_FAMILY_TECH = [
    { "name": "Yes", "value": 21 },
    { "name": "No", "value": 33 }
]

// What was your first programming language?
const FIRST_PROG_LANG = [
    { "name": "Java", "value": 22 },
    { "name": "BASIC", "value": 1 },
    { "name": "C", "value": 3 },
    { "name": "C++", "value": 4 },
    { "name": "HTML", "value": 2 },
    { "name": "PHP", "value": 1 },
    { "name": "Python", "value": 9 },
    { "name": "Turing", "value": 6 },
    { "name": "Visual Basic", "value": 6 },
]

// What languages did you know before university?
const PROG_LANG_B4_UNI = [
    { "name": "Java", "value": 37 },
    { "name": "Python", "value": 17 },
    { "name": "Turing", "value": 9 },
    { "name": "C++", "value": 14 },
    { "name": "C", "value": 7 },
    { "name": "CSS", "value": 8 },
    { "name": "Javascript", "value": 7 },
    { "name": "PHP", "value": 3 },
    { "name": "C#", "value": 5 },
    { "name": "Visual Basic", "value": 3 },
    { "name": "Other", "value": 6 },
]

// What languages are you most comfortable with now?
const MOST_CONF_PROG_LANG = [
    { "name": "Assembly", "value": 1 },
    { "name": "Bash", "value": 3 },
    { "name": "C", "value": 12 },
    { "name": "C++", "value": 32 },
    { "name": "C#", "value": 6 },
    { "name": "CSS", "value": 12 },
    { "name": "Go", "value": 13 },
    { "name": "HTML", "value": 18 },
    { "name": "Java", "value": 24 },
    { "name": "Javascript", "value": 28 },
    { "name": "Kotlin", "value": 6 },
    { "name": "Objective C", "value": 1 },
    { "name": "PHP", "value": 4 },
    { "name": "Python", "value": 37 },
    { "name": "R", "value": 2 },
    { "name": "Ruby", "value": 2 },
    { "name": "Rust", "value": 7 },
    { "name": "Scala", "value": 7 },
    { "name": "SQL", "value": 17 },
    { "name": "Swift", "value": 3 },
    { "name": "Turing", "value": 1 },
    { "name": "Typescript", "value": 17 },
]

// What languages do you use the most during coops?
const COOP_MOST_USED_PROG_LANG = [
    { "name": "Bash", "value": 1 },
    { "name": "C", "value": 2 },
    { "name": "C++", "value": 20 },
    { "name": "C#", "value": 7 },
    { "name": "CSS", "value": 7 },
    { "name": "Go", "value": 9 },
    { "name": "HTML", "value": 9 },
    { "name": "Java", "value": 12 },
    { "name": "Javascript", "value": 26 },
    { "name": "Kotlin", "value": 2 },
    { "name": "Objective C", "value": 3 },
    { "name": "PHP", "value": 7 },
    { "name": "Python", "value": 28 },
    { "name": "R", "value": 1 },
    { "name": "Ruby", "value": 3 },
    { "name": "Rust", "value": 2 },
    { "name": "Scala", "value": 4 },
    { "name": "SQL", "value": 14 },
    { "name": "Swift", "value": 3 },
    { "name": "Typescript", "value": 14 },
    { "name": "Verilog", "value": 1 },
    { "name": "FORTRAN", "value": 1 },
]

// What is your preferred programming language for technical interviews?
const FAV_INT_PROG_LANG = [
    { "name": "Python", "value": 25 },
    { "name": "C++", "value": 12 },
    { "name": "Go", "value": 1 },
    { "name": "Java", "value": 3 },
    { "name": "Javascript", "value": 3 },
]

export {
    CODE_BEFORE_UNI,
    CLOSE_FAMILY_TECH,
    FIRST_PROG_LANG,
    PROG_LANG_B4_UNI,
    MOST_CONF_PROG_LANG,
    COOP_MOST_USED_PROG_LANG,
    FAV_INT_PROG_LANG
} 