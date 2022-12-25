// What are your Post Graduation Plans?
const POST_GRAD = [{
  "name": "Grad school",
  "value": 2
}, {
  "name": "Industry - Have Offer(s)",
  "value": 1
}, {
  "name": "Industry - Interviewing",
  "value": 1
}, {
  "name": "Industry - Accepted",
  "value": 52
}];

// Most important factor?
const MOTIVATIONS_FIRST = [{
  "name": "Career growth",
  "value": 17
}, {
  "name": "Company reputation",
  "value": 9
}, {
  "name": "Expected compensation",
  "value": 9
}, {
  "name": "Improving Skills",
  "value": 3
}, {
  "name": "Good Culture/Team/Coworkers",
  "value": 8
}, {
  "name": "Having an impact",
  "value": 2
}, {
  "name": "Industry/Product",
  "value": 5
}]

// 2nd most important factor?

const MOTIVATIONS_SECOND = [{
  "name": "Career growth",
  "value": 7
}, {
  "name": "Company reputation",
  "value": 6
}, {
  "name": "Expected compensation",
  "value": 12
}, {
  "name": "Good Culture/Team/Coworkers",
  "value": 8
}, {
  "name": "Having an impact",
  "value": 5
}, {
  "name": "Improving Skills",
  "value": 8
}, {
  "name": "Industry/Product",
  "value": 2
}, {
  "name": "Location",
  "value": 8
}, {
  "name": "Potential compensation upside",
  "value": 2
}]

// 3rd most important factor?
const MOTIVATIONS_THIRD = [{
  "name": "Career growth",
  "value": 9
}, {
  "name": "Company reputation",
  "value": 5
}, {
  "name": "Expected compensation",
  "value": 16
}, {
  "name": "Good Culture/Team/Coworkers",
  "value": 10
}, {
  "name": "Having an impact",
  "value": 5
}, {
  "name": "Improving Skills",
  "value": 3
}, {
  "name": "Industry/Product",
  "value": 2
}, {
  "name": "Location",
  "value": 5
}, {
  "name": "Potential compensation upside",
  "value": 3
}]

// Where are you planning to be after graduation?
const POST_LOCATION = [{
  "name": "US - California",
  "value": 20
}, {
  "name": "Canada - West Coast",
  "value": 2
}, {
  "name": "Canada - East Coast",
  "value": 1
}, {
  "name": "Canada - GTA",
  "value": 8
}, {
  "name": "Canada - Kitchener/Waterloo",
  "value": 6
}, {
  "name": "US - East Coast",
  "value": 18
}, {
  "name": "US - Pacific North West",
  "value": 3
}, {
  "name": "US - Midwest",
  "value": 1
}]

// If you are going to industry, what company will you be joining?
const FULL_TIME_COMPANY = {
  "Apple": 1,
  "BitGo": 3,
  "Citadel": 2,
  "Coinbase": 1,
  "Compound Financial": 1,
  "Databricks": 1,
  "Datadog": 1,
  "Extend Enterprises": 1,
  "Meta": 16,
  "Faire": 1,
  "Figma": 1,
  "Gem": 1,
  "Google": 3,
  "Jane Street": 3,
  "Microsoft": 1,
  "Nvidia": 1,
  "Snowflake": 1,
  "Twitch": 2,
  "Two Sigma": 1,
  "Ultimate Kronos Group": 1,
}

// What kind of company is your fulltime job at?
const FULL_TIME_COMPANY_TYPE = [
  { "name": "Large/established (e.g. Meta)", "value": 40 },
  { "name": "Newer, but post-IPO (e.g. Robinhood)", "value": 6 },
  { "name": "Pre-IPO, mid-late stage (e.g. Figma)", "value": 7 },
  { "name": "Pre-IPO, early stage", "value": 2 },
  { "name": "Seed or pre-seed", "value": 0 },
]

// How content are you with your post-grad plans?
const POST_CONTENTNESS = [{
  "name": "5 - Most Content",
  "value": 35
}, {
  "name": "4",
  "value": 19
}, {
  "name": "3",
  "value": 1
}, {
  "name": "2",
  "value": 0
}, {
  "name": "1 - Least Content",
  "value": 0
}]


const FULL_TIME_COMPENSATION = {
  // What is your annual base salary in CAD?
  base: [80600, 81250, 87000, 153000, 260000, 100000, 100000, 102000, 103000, 120000, 120000, 120000, 123500, 140120, 153400, 156677, 160000, 160000, 161000, 161000, 161000, 161000, 161000, 161000, 161200, 161200, 161200, 161200, 161200, 161200, 163000, 167000, 169000, 170000, 170000, 175500, 175500, 177429, 184600, 195000, 195000, 201500, 214000, 214500, 227500, 260000, 260000, 260000, 260000, 260000, 260000],

  // Value of stock grant that vests in the first year in CAD?
  stock_first_year: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10806, 12000, 12500, 21000, 25500, 34125, 36465, 36465, 40000, 42900, 48750, 48750, 48750, 48750, 52, 52, 52000, 52000, 52000, 52000, 52000, 52000, 52000, 52000, 52000, 52000, 52000, 52000, 52000, 55447, 58500, 61750, 62150, 65000, 68000, 70000, 74100, 8000, 80000, 89375],

  // Value of any any one-time bonuses in CAD? (sign-on, relocation, etc)
  one_time_bonus: [0, 0, 0, 0, 0, 0, 78000, 80600, 160000, 6435, 6500, 10000, 12600, 15000, 19009, 30000, 32500, 39000, 39000, 39520, 58500, 59800, 65000, 65000, 65000, 65000, 65000, 65000, 65000, 75811, 78000, 78000, 78000, 78000, 78000, 79950, 84500, 87100, 91000, 96050, 117000, 130000, 162500, 162500, 195000, 208000, 208000, 208000, 208000, 242000, 260000],

  // Value of any end-of-year/recurring annual compensation in CAD? 
  // (this should be an estimate of the average, rather than an optimistic prediction)
  eoy_recurring_comp: [0, 0, 0, 0, 0, 0, 0, 0, 0, 200000, 6000, 6000, 6200, 10000, 10000, 13000, 13520, 14000, 14012, 15000, 15340, 15340, 15600, 16000, 16000, 16120, 16120, 16120, 16120, 17741, 20000, 20000, 22100, 27690, 31344, 110000, 130000, 130000, 130000, 156000, 162500, 165000, 175500, 195000, 200000, 212000, 311765],

  // calculated from the above 3 questions per person (mapping was available in raw data)
  year1_total_comp: [134306, 136000, 154375, 160565, 160900, 170000, 174750, 174750, 175000, 175500, 185000, 201100, 228944, 232488, 269626, 270000, 278000, 278000, 291000, 291070, 294710, 298340, 301600, 303600, 304070, 305240, 306600, 307000, 307320, 309270, 310400, 310500, 312332, 313300, 318500, 331695, 337500, 364000, 385000, 430000, 440000, 489000, 492500, 552500, 552500, 552500, 566000, 627015, 630500, 633000, 663000, 695500],

  // What is your total stock grant value in CAD?
  total_stock_grant: [0, 0, 0, 0, 0, 0, 0, 0, 0, 110500, 110500, 130000, 136500, 170000, 195000, 195000, 195000, 195000, 208, 208, 208000, 208000, 208000, 208000, 208000, 208000, 208000, 208000, 208000, 208000, 208000, 208000, 208000, 221787, 234000, 247000, 248600, 260000, 260000, 273000, 280000, 300000, 32000, 320000, 357500, 43225, 48000, 50000, 50541, 80000, 84000],
}

// Are you returning to a prior coop?
const COOP_CONVERSION = [{
  "name": "Yes",
  "value": 43
}, {
  "name": "No",
  "value": 11
}]

// If you are returning fulltime to a prior coop, what was the most recent co-op term you did with them?
const LAST_COOP_TERM_RETURN = [
  { "name": "4th", "value": 1 },
  { "name": "5th", "value": 12 },
  { "name": "6th", "value": 30 },
]

// What percentage of the job will be remote? (best estimate)
const PERCENT_REMOTE = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.01, 10, 15, 20, 20, 20, 20, 20, 20, 20, 25, 25, 28, 30, 30, 30, 30, 40, 40, 40, 50, 50, 50, 50, 60, 60, 90, 99, 100, 100, 100, 100, 100, 100, 100, 100]

// How long do you expect to stay at this company?
const PLANNED_TIME_AT_COMPANY = [{
  "name": "1-2 years",
  "value": 23
}, {
  "name": "3-4 years",
  "value": 29
}, {
  "name": "5-10 years",
  "value": 4
}, {
  "name": "10+ years",
  "value": 1
}]

// Do you expect to return to your home country (Canada or otherwise)
// at some point in the future (if applicable)? If so, when?
const RETURN_TO_HOME_COUNTRY = [{
  "name": "Less than 1 year",
  "value": 1
}, {
  "name": "1-2 years",
  "value": 1
}, {
  "name": "3-4 years",
  "value": 5
}, {
  "name": "5-10 years",
  "value": 19
}, {
  "name": "10-20 years",
  "value": 9
}, {
  "name": "20+ years",
  "value": 4
}]

// Will you continue your FYDP once you graduate?
const CONT_FYDP = [{
  "name": "Yes",
  "value": 2
}, {
  "name": "Uncertain",
  "value": 16
}, {
  "name": "No",
  "value": 30
}]

export {
  POST_GRAD,
  POST_LOCATION,
  MOTIVATIONS_FIRST,
  MOTIVATIONS_SECOND,
  MOTIVATIONS_THIRD,
  FULL_TIME_COMPENSATION,
  COOP_CONVERSION,
  POST_CONTENTNESS,
  FULL_TIME_COMPANY,
  CONT_FYDP,
  LAST_COOP_TERM_RETURN,
  FULL_TIME_COMPANY_TYPE,
  PERCENT_REMOTE,
  PLANNED_TIME_AT_COMPANY,
  RETURN_TO_HOME_COUNTRY,
}