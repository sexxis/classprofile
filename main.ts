import * as d3 from "d3";
import * as $ from "jquery";
import { renderWordCloud } from "./shared/wordcloud";
import {
  renderHorizontalBarChat,
  renderMultipleHorizontalBarCharts,
} from "./shared/horizontalbarchart.js";
import {
  renderMultiSeriesHorizontalBarChat,
  renderGroupedBarChart,
} from "./shared/multiserieshorizontalbarchart.js";
import { renderPieChart } from "./shared/piechart.js";
import { renderLineChart } from "./shared/linechart.js";
import { renderBoxPlot } from "./shared/boxplot.js";
import { renderMultiSeriesBoxPlot } from "./shared/multiseriesboxplot.js";
import * as util from "./shared/utils";
import { renderDotPlot, renderBinnedDotLine } from "./shared/dotplot.js";
import {
  renderHistogram,
  renderMultipleHistograms,
} from "./shared/histogram.js";

import {
  LAST_SE_TERM,
  REASONS_TRANSFERRED,
  HAPPY_SWITCHING,
} from "./data/transfers";
import {
  SLEEP_TIME,
  SLEEP_DURATION,
  ALL_NIGHTERS,
  PERCENT_HOME_MADE,
  PARTY_BEFORE_COVID,
  PARTY_DURING_COVID,
} from "./data/lifestyle";
import {
  ATTENDANCE,
  ATTEND_OFFICE_HOURS,
  BURN_OUT_PER_TERM,
  CLASSES_FAILED,
  CONTINUE_FYDP,
  CR_NCR_IN_3A,
  DESIGN_TEAM_OR_TECHNICAL_EXTRACURRICULARS,
  FAVOURITE_COURSE,
  FAVOURITE_COURSE_PER_TERM,
  FAVOURITE_PROF,
  FYDP_CATEGORY,
  GRADES,
  GRADES_MEDIAN,
  HACKATHONS_ATTENDED,
  HOURS_AT_SE_EVENTS_PER_WEEK,
  HOURS_ON_DESIGN_TEAM_OR_TECHNICAL_EXTRACURRICULARS_PER_WEEK,
  HOURS_ON_FYDP_PER_WEEK,
  HOURS_ON_NON_TECHNICAL_EXTRACURRICULARS_PER_WEEK,
  HOURS_ON_SIDE_PROJECTS_PER_WEEK,
  HOUSING_COSTS,
  LEAST_FAVOURITE_COURSE,
  LEAST_FAVOURITE_COURSE_PER_TERM,
  LIKE_FYDP,
  NON_TECHNICAL_EXTRACURRICULARS,
  NUM_CLASSES_FAILED,
  NUM_MIDTERMS_FAILED,
  OPTIONS_OR_MINORS,
  OVERLOAD,
  OVERLOAD_REASON,
  PEOPLE_LIVED_WITH,
  REASON_FOR_CR_NCR_IN_3A,
  RESIDENCE,
} from "./data/academics";
import {
  INTERNATIONAL,
  PARENT_EDUCATION,
  ETHNICITY,
  GENDER,
  YEAR_OF_BIRTH,
  SEXUAL_ORIENTATION,
  HOME_LOCATION,
  FAMILY_INCOME,
  IMMIGRATED,
  SIBLINGS,
  ENRICHED_PROGRAM,
  CEGEP,
  CEGEP_ATTENDED,
  MOTHER_TONGUE,
  PROGRAMMING,
  CAT_OR_DOG,
  ADMISSION_AVERAGE,
  EMIGRATED_COUNTRY,
  NUM_LANGUAGE,
  LANGUAGE_KNOWN,
  SIBLINGS_PARENTS,
} from "./data/background";
import {
  COURSE_WITH_LARGEST_WORKLOAD,
  BURNT_OUT,
  CONSIDERED_SWITCHING_OUT_OF_SE,
  PROGRAM_TO_SWITCH_TO,
  CONSIDERED_DROPPING_OUT_OF_UNI,
  HAPPY_WITH_CHOICE,
  P_ENG,
  SENIORITIS,
  START_AGAIN_PROGRAM,
} from "./data/outcome";
import {
  SALARY,
  WORK_LOCATION,
  FAVOURITE_LOCATION,
  HACKATHON_SALARY,
  SIDE_SALARY,
  ADMISSION_SALARY,
  COMPANY_WORK_COUNT,
  FAVOURITE_COMPANIES,
  GRADE_SALARY,
  GENDER_SALARY,
  LATE_INTERVIEWER,
  LATE_INTERVIEW,
  MISSED_INTERVIEW,
  FAVOURITE_COOP,
  FAVOURITE_COOP_REASON,
  COOP_RATINGS,
  COOP_TYPES,
  COOP_BREAKDOWN,
  COOP_JOBS,
} from "./data/coop";
import {
  BURNOUT,
  FIGHTS,
  REDDIT_USAGE,
  CRYING,
  TRANSFER_THOUGHTS,
  DROPOUT_THOUGHTS,
  SE21_GRAD,
} from "./data/misc";
import { CONT_FYDP, COOP_CONVERSION, FULL_TIME_COMPANY, FULL_TIME_COMPANY_TYPE, FULL_TIME_COMPENSATION, LAST_COOP_TERM_RETURN, MOTIVATIONS_FIRST, MOTIVATIONS_SECOND, MOTIVATIONS_THIRD, PERCENT_REMOTE, PLANNED_TIME_AT_COMPANY, POST_CONTENTNESS, POST_GRAD, POST_LOCATION, RETURN_TO_HOME_COUNTRY } from "./data/future";
import { FAMILY, FRIENDSHIPS, ROMANCE } from "./data/relationships";
import {
  INVEST,
  FINANCIALLY_SATISFIED,
  PERCENTAGE_INVESTED,
  MONEY_FROM_DEGREE,
  SCHOOL_MATERIAL_EXPENSES,
  STUDENT_LOANS,
  LIQUID_NET_WORTH,
} from "./data/finances";
import {
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
  EXERCISE_WORDS,
  SPORT_LEVEL,
  INTRAMURAL_FREQ,
  INTRAMURALS,
} from "./data/health";
import {
  CONTRACTED_COVID,
  COVID_DOSES,
  COVID_TESTS,
  FOLLOW_PUBLIC_GUIDANCE,
  FULL_TIME_AFFECTED_BY_COVID,
  HOW_FULL_TIME_AFFECTED_BY_COVID,
  KNOW_SOMEONE_CONTRACTED_COVID,
  LARGEST_GATHERING,
} from "./data/covid";
import { EXCHANGE } from "./data/exchange";

let ethnicity = ["ethnicity-all", "ethnicity-women", "ethnicity-men"];
let campus_location_term_pre = [
  "loc-1a",
  "loc-1b",
  "loc-2a",
  "loc-2b",
  "loc-3a",
  "loc-3b",
];
let campus_location_term_post = ["loc-4a", "loc-4b"];
let enriched_vs_grades = ["enriched-overall", "enriched-first-year"];

let terms = ["1a", "1b", "2a", "2b", "3a", "3b", "4a"];
let housing_terms = terms.concat(["4b"]);

let favourite_course_per_term = terms.map((x) => "favourite-course-" + x);
let least_favourite_course_per_term = favourite_course_per_term.map(
  (x) => "least-" + x
);

let housing_cost_per_term = terms.map((x) => "housing-cost-" + x);
let people_lived_with_per_term = terms.map((x) => "people-lived-with-" + x);

let hackathons_per_term = terms.map((x) => "hackathons-" + x);
let side_projects_per_term = terms.map((x) => "side-projects-" + x);
let se_events_per_term = terms.map((x) => "se-events-" + x);
let technical_extra_per_term = terms.map((x) => "technical-extra-" + x);
let non_technical_extra_per_term = technical_extra_per_term.map(
  (x) => "non-" + x
);
let fydp_hours_per_term = ["fydp-hours-3b", "fydp-hours-4a"];

let admission_salary = [
  "admission-salary-overall",
  "admission-salary-first-year",
];
let entrance_vs_grades = ["entrance-overall", "entrance-first-year"];
let work_location = [
  "work-location-0",
  "work-location-1",
  "work-location-2",
  "work-location-3",
  "work-location-4",
  "work-location-5",
  "work-location-6",
  "work-location-7",
  "work-location-8",
  "work-location-9",
  "work-location-10",
];
let concise_version = false;

const friends_groups = {
  "high-school": "High school friends still considered close friends",
  coop: "Co-op friends still considered close friends",
  residence: "Residence friends still considered close friends",
  orientation: "Orientation friends still considered close friends",
  "se-before-uw": "People in SE known before UW",
  "se-close-friends": "People in SE considered close friends",
};

const coop_ratings = {
  "rating-outstanding": "Outstanding",
  "rating-excellent": "Excellent",
  "rating-very-good": "Very Good",
  "rating-satisfactory": "Satisfactory",
};

const coop_types = {
  "coop-swe": "Software Engineering / Web Developer",
  "coop-qa": "QA / Testing",
  "coop-devops": "DevOps",
  "coop-data-science": "Data Science",
  "coop-research": "Research",
  "coop-others": "Others",
};

const coop_breakdown_legend = {
  "coop-app-num": "Waterlooworks App.",
  "coop-app-num-ext": "External App.",
  "coop-interviews": "Interviews",
  "coop-offers": "Offers",
};

const siblings_parents_legend = {
  "siblings-inc-zero": "0-50k / year",
  "siblings-inc-one": "50k-100k / year",
  "siblings-inc-two": "100k-150k / year",
  "siblings-inc-three": "150k-200k / year",
  "siblings-inc-four": "200k-250k / year",
  "siblings-inc-five": "250k-300k / year",
  "siblings-inc-size": "300k+ / year",
};

const attendence_class_legend = {
  "0-25%": "0-25%",
  "26-50%": "26-50%",
  "51-75%": "51-75%",
  "76-100%": "76-100%",
};

const yes_no_legend = {
  Yes: "Yes",
  No: "No",
};

const coop_jobs = {
  "coop-first-round": "First Round",
  "coop-continuous": "Continuous",
  "coop-external": "External",
};

window.onload = () => {
  let options = {
    width: (document.getElementsByClassName("half second")[0] as any)
      .offsetWidth,
    fullWidth: (document.querySelector("div.full") as any).offsetWidth,
    isMobile: util.isMobile(),
  };
  renderCoop(options);
  renderLifestyle(options);
  renderAcademics(options);
  renderBackground(options);
  renderExperience(options);
  renderFinances(options);
  renderHealth(options);
  renderCovid(options);
  renderMisc(options);
  renderFuture(options);
  renderTransfers(options);
  renderRelationships(options);
  renderExchange(options);
  setActive(0);
  setMultiBarActive("ethnicity-all", ethnicity);
  setMultiBarActive("loc-1a", campus_location_term_pre);
  setMultiBarActive("loc-4a", campus_location_term_post);
  setMultiBarActive("enriched-overall", enriched_vs_grades);
  setMultiBarActive("admission-salary-overall", admission_salary);
  setMultiBarActive("entrance-overall", entrance_vs_grades);
  setMultiBarActive("1a", housing_terms);
  // setMultiBarActive("work-location-0", work_location);
  setupListeners();
};

function setupListeners() {
  let scaleItems = document.getElementsByClassName("scale-item");
  for (let i = 0; i < scaleItems.length; i++) {
    let j = i;
    (scaleItems[i] as any).onclick = function () {
      togglePressedForButtonItems(this, scaleItems);
      setActive(j);
    };
  }

  let ethnicityItems = document.getElementsByClassName("ethnicity-item");
  for (let i = 0; i < ethnicityItems.length; i++) {
    let j = ethnicity[i];
    (ethnicityItems[i] as any).onclick = function () {
      togglePressedForButtonItems(this, ethnicityItems);
      setMultiBarActive(j, ethnicity);
    };
  }

  let locPreItems = document.getElementsByClassName("loc-pre-item");
  for (let i = 0; i < locPreItems.length; i++) {
    let j = campus_location_term_pre[i];
    (locPreItems[i] as any).onclick = function () {
      togglePressedForButtonItems(this, locPreItems);
      setMultiBarActive(j, campus_location_term_pre);
    };
  }

  let locPostItems = document.getElementsByClassName("loc-post-item");
  for (let i = 0; i < locPostItems.length; i++) {
    let j = campus_location_term_post[i];
    (locPostItems[i] as any).onclick = function () {
      togglePressedForButtonItems(this, locPostItems);
      setMultiBarActive(j, campus_location_term_post);
    };
  }

  let friendsGainItems = document.getElementsByClassName("friends-gain-item");
  for (let i = 0; i < friendsGainItems.length; i++) {
    let currentClass = Object.keys(friends_groups)[i];
    (friendsGainItems[i] as any).onclick = function () {
      this.classList.toggle("pressed");
      const isActive = this.classList.contains("pressed");
      let items = document.getElementsByClassName(currentClass);
      for (let j = 0; j < items.length; j++) {
        if (isActive) {
          (items[j] as any).style.visibility = "initial";
        } else {
          (items[j] as any).style.visibility = "hidden";
        }
      }
      // setMultiBarActive(currentClass, Object.keys(friends_groups));
    };
  }

  let enrichedGradesItems = document.getElementsByClassName(
    "enriched-grades-item"
  );
  for (let i = 0; i < enrichedGradesItems.length; i++) {
    let j = enriched_vs_grades[i];
    (enrichedGradesItems[i] as any).onclick = function () {
      togglePressedForButtonItems(this, enrichedGradesItems);
      setMultiBarActive(j, enriched_vs_grades);
    };
  }

  let residenceLocationItems = document.getElementsByClassName(
    "residence-location-item"
  );
  for (let i = 0; i < residenceLocationItems.length; i++) {
    let j = housing_terms[i];
    (residenceLocationItems[i] as any).onclick = function () {
      togglePressedForButtonItems(this, residenceLocationItems);
      setMultiBarActive(j, housing_terms);
    };
  }

  let technicalExtracurricularsItems = document.getElementsByClassName(
    "technical-extracurriculars-item"
  );
  for (let i = 0; i < technicalExtracurricularsItems.length; i++) {
    let j = housing_terms[i];
    (technicalExtracurricularsItems[i] as any).onclick = function () {
      togglePressedForButtonItems(this, technicalExtracurricularsItems);
      setMultiBarActive(j, housing_terms);
    };
  }

  setupMultiGraphListeners(
    "favourite-course-per-term-item",
    favourite_course_per_term
  );

  setupMultiGraphListeners(
    "least-favourite-course-per-term-item",
    least_favourite_course_per_term
  );

  setupMultiGraphListeners("housing-cost-per-term-item", housing_cost_per_term);
  setupMultiGraphListeners(
    "people-lived-with-per-term-item",
    people_lived_with_per_term
  );

  setupMultiGraphListeners("hackathons-per-term-item", hackathons_per_term);

  setupMultiGraphListeners(
    "side-projects-per-term-item",
    side_projects_per_term
  );

  setupMultiGraphListeners("se-events-per-term-item", se_events_per_term);

  setupMultiGraphListeners(
    "technical-extra-per-term-item",
    technical_extra_per_term
  );

  setupMultiGraphListeners(
    "non-technical-extra-per-term-item",
    non_technical_extra_per_term
  );

  setupMultiGraphListeners("fydp-hours-per-term-item", fydp_hours_per_term);

  let admissionSalary = document.getElementsByClassName(
    "admission-salary-item"
  );
  for (let i = 0; i < admissionSalary.length; i++) {
    let j = admission_salary[i];
    (admissionSalary[i] as any).onclick = function () {
      togglePressedForButtonItems(this, admissionSalary);
      setMultiBarActive(j, admission_salary);
    };
  }

  let entranceGradesItems = document.getElementsByClassName(
    "entrance-grades-item"
  );
  for (let i = 0; i < entranceGradesItems.length; i++) {
    let j = entrance_vs_grades[i];
    (entranceGradesItems[i] as any).onclick = function () {
      togglePressedForButtonItems(this, entranceGradesItems);
      setMultiBarActive(j, entrance_vs_grades);
    };
  }

  let workLocationItems = document.getElementsByClassName("work-location-item");
  for (let i = 0; i < workLocationItems.length; i++) {
    let currentClass = work_location[i];
    (workLocationItems[i] as any).onclick = function () {
      this.classList.toggle("pressed");
      const isActive = this.classList.contains("pressed");
      let items = document.getElementsByClassName(currentClass);
      for (let j = 0; j < items.length; j++) {
        if (isActive) {
          (items[j] as any).style.visibility = "initial";
        } else {
          (items[j] as any).style.visibility = "hidden";
        }
      }
    };
  }

  let conciseToggle = document.getElementById("concise-toggle");
  conciseToggle.onclick = function () {
    if (concise_version) {
      show_all_content();
      concise_version = false;
    } else {
      hide_content();
      concise_version = true;
    }
  };
  window.addEventListener("scroll", onScroll);
}

function hide_content() {
  let items = document.getElementsByClassName("long_version");
  for (let i = 0; i < items.length; i++) {
    (items[i] as any).style.display = "none";
  }
}

function show_all_content() {
  let items = document.getElementsByClassName("long_version");
  for (let i = 0; i < items.length; i++) {
    (items[i] as any).style.display = "block";
  }
}

function setActive(term) {
  for (let i = 0; i <= 5; i++) {
    let items = document.getElementsByClassName(i.toString());
    for (let j = 0; j < items.length; j++) {
      if (i !== term) {
        (items[j] as any).style.visibility = "hidden";
      } else {
        (items[j] as any).style.visibility = "initial";
      }
    }
  }
}

function setMultiBarActive(term, arr) {
  for (let i = 0; i <= arr.length; i++) {
    let items = document.getElementsByClassName(arr[i]);
    for (let j = 0; j < items.length; j++) {
      if (arr[i] !== term) {
        (items[j] as any).style.visibility = "hidden";
      } else {
        (items[j] as any).style.visibility = "initial";
      }
    }
  }
}

function setBarGraphActive(term, arr) {
  for (let i = 0; i < arr.length; i++) {
    let item = document.getElementById(arr[i]);
    if (term === arr[i]) {
      (item as any).style.visibility = "initial";
    } else {
      (item as any).style.visibility = "hidden";
    }
  }
}

function setupMultiGraphListeners(button_name: string, graph_names: string[]) {
  let selectorButtons = document.getElementsByClassName(button_name);
  for (let i = 0; i < selectorButtons.length; i++) {
    let graphName = graph_names[i];
    (selectorButtons[i] as any).onclick = function () {
      togglePressedForButtonItems(this, selectorButtons);
      setBarGraphActive(graphName, graph_names);
    };
  }
  setBarGraphActive(graph_names[0], graph_names);
}

/**
 * if selectedItem is not active, adds the pressed class to
 * selectedItem and removes it from the other items.
 *  */
function togglePressedForButtonItems(
  selectedItem: Element,
  items: HTMLCollectionOf<Element>
) {
  if (selectedItem.classList.contains("pressed")) {
    return; // fast exit
  }
  for (let i = 0; i < items.length; i++) {
    if (items[i] === selectedItem) {
      items[i].classList.add("pressed"); // is active button
    } else {
      items[i].classList.remove("pressed"); // is inactive button
    }
  }
}

function onScroll(e) {
  var button = document.getElementById("goto_toc");
  var offsetFromToc = document
    .getElementById("toc")
    .getBoundingClientRect().top;

  if (offsetFromToc < 0) {
    button.style.visibility = "visible";
  } else {
    button.style.visibility = "hidden";
  }
}

function drawCoopWordCloud(elem, options) {
  let data = COMPANY_WORK_COUNT["data"];
  let words: any[] = [];
  let textSize = 15;
  if (options.fullWidth < 1200) {
    textSize = Math.pow(options.fullWidth / 1200, 0.25) * textSize;
  }
  for (let name in data) {
    words.push({
      text: name,
      size: Math.sqrt(data[name]) * textSize,
    });
  }

  let scores = {};
  let data2 = FAVOURITE_COMPANIES["data"];
  for (let i in data2) {
    scores[data2[i][0]] = data2[i][1];
  }
  renderWordCloud(
    elem,
    words,
    scores,
    options.fullWidth,
    Math.min(window.innerHeight * 0.75, 800000 / options.fullWidth)
  );
}

function drawWordCloud(
  elem,
  data,
  options,
  isFullWidth: boolean = false,
  height: Number = null
) {
  let max = 0;
  for (var i in data) {
    if (data[i] > max) {
      max = data[i];
    }
  }

  let wordcloudData: any[] = [];
  for (var i in data) {
    wordcloudData.push({
      text: i,
      size: Math.pow((data[i] * 1.0) / max, 0.25) * 36,
    });
  }
  const cloudWidth = isFullWidth ? options.fullWidth : options.width;
  const cloudHeight = height
    ? height
    : Math.min(window.innerHeight * 0.5, 200000 / cloudWidth);
  renderWordCloud(elem, wordcloudData, null, cloudWidth, cloudHeight);
}

function renderCoop(options) {
  drawCoopWordCloud(d3.select("#coop-cloud"), options);
  renderBoxPlot(d3.select("#salary"), SALARY, options.width, 350, {
    xAxisTitle: "Co-op term #",
    yAxisTitle: "Hourly compensation",
    tickFormat: (d) => {
      return "$" + d;
    },
  });
  renderLineChart(
    d3.select("#work-location"),
    WORK_LOCATION,
    options.fullWidth,
    500,
    {
      toggle: "work-location",
      lineLabels: [
        {
          x: "6th",
          value: 3,
          location: "California",
        },
        {
          x: "6th",
          value: 11,
          location: "East Coast US",
        },
        {
          x: "6th",
          value: 12.25,
          location: "GTA / Toronto",
        },
        {
          x: "6th",
          value: 5,
          location: "K / W",
        },
        {
          x: "6th",
          value: 2.25,
          location: "MW US",
        },
        {
          x: "6th",
          value: 0.75,
          location: "Ott. / MTL",
        },
        {
          x: "6th",
          value: 0.25,
          location: "Other Ontario",
        },
        {
          x: "6th",
          value: 1.75,
          location: "PNW US",
        },
        {
          x: "6th",
          value: 11.75,
          location: "Remote",
        },
        {
          x: "6th",
          value: 1.25,
          location: "West Coast Canada",
        },
        {
          x: "6th",
          value: -0.25,
          location: "Outside NA",
        },
      ],
      xAxisTitle: "Co-op term number",
      yAxisTitle: "Proportion of students in the area",
      tickFormat: (d) => {
        return d + "%";
      },
    }
  );
  renderHorizontalBarChat(
    d3.select("#favourite-location"),
    FAVOURITE_LOCATION,
    options.width,
    240,
    true
  );
  // renderBoxPlot(d3.select('#age-salary'), AGE_SALARY, options.width, 280, {
  //   yAxisTitle: 'Average first 3 co-op hourly salary in CAD',
  //   xAxisTitle: 'Age started coding'
  // });
  renderBoxPlot(
    d3.select("#hackathon-salary"),
    HACKATHON_SALARY,
    options.width,
    400,
    {
      xAxisTitle: "Number of hackathons attended",
      yAxisTitle: "Average co-op hourly salary in CAD",
    }
  );
  renderBoxPlot(d3.select("#side-salary"), SIDE_SALARY, options.width, 350, {
    xAxisTitle: "Commitment to side projects",
    yAxisTitle: "Average co-op hourly salary in CAD",
  });
  renderMultiSeriesBoxPlot(
    d3.select("#admission-salary"),
    ADMISSION_SALARY,
    options.width,
    350,
    {
      yAxisTitle: "Average co-op hourly salary in CAD",
      xAxisTitle: "Admission average",
    },
    { "admission-salary-overall": 0, "admission-salary-first-year": 1 }
  );
  renderDotPlot(d3.select("#grade-salary"), GRADE_SALARY, options.width, 400, {
    yAxisTitle: "Hourly compensation in CAD",
    xAxisTitle: "Cumulative average",
    rawSize: true,
    domain: [50, 100],
    range: [0, 150],
  });
  renderLineChart(
    d3.select("#gender-salary"),
    GENDER_SALARY,
    options.width,
    300,
    {
      toggle: "gender-salary",
      lineLabels: [
        {
          x: "6th",
          value: 50,
          location: "Women",
        },
        {
          x: "6th",
          value: 66,
          location: "Men",
        },
      ],
      yAxisTitle: "Hourly salary in CAD",
      xAxisTitle: "Co-op term number",
    }
  );
  renderPieChart(
    d3.select("#missed_interview"),
    MISSED_INTERVIEW,
    options.width * 0.75,
    options.width * 0.75
  );
  renderPieChart(
    d3.select("#late_interview"),
    LATE_INTERVIEW,
    options.width * 0.75,
    options.width * 0.75
  );

  drawWordCloud(d3.select("#favourite-coop"), FAVOURITE_COOP, options);
  renderHorizontalBarChat(
    d3.select("#favourite-coop-reasons"),
    FAVOURITE_COOP_REASON,
    options.width,
    250,
    true
  );
  renderGroupedBarChart(
    d3.select("#coop-ratings"),
    COOP_RATINGS,
    options.width,
    250,
    coop_ratings,
    {
      yAxisTitle: "Number of respondents",
    }
  );
  renderGroupedBarChart(
    d3.select("#coop-types"),
    COOP_TYPES,
    options.width,
    250,
    coop_types,
    {
      yAxisTitle: "Number of respondents",
    }
  );
  renderGroupedBarChart(
    d3.select("#coop-breakdown"),
    COOP_BREAKDOWN,
    options.width,
    250,
    coop_breakdown_legend,
    {
      yAxisTitle: "Average count",
    }
  );
  renderGroupedBarChart(
    d3.select("#coop-jobs"),
    COOP_JOBS,
    options.width,
    250,
    coop_jobs,
    {
      yAxisTitle: "Percentage of respondents",
    }
  );
}

function renderLifestyle(options) {
  renderHorizontalBarChat(
    d3.select("#percent-home-made"),
    PERCENT_HOME_MADE,
    options.width,
    250,
    false
  );
  renderHorizontalBarChat(
    d3.select("#sleep-time"),
    SLEEP_TIME,
    options.width,
    250,
    false
  );
  renderHorizontalBarChat(
    d3.select("#sleep-duration"),
    SLEEP_DURATION,
    options.width,
    250,
    false
  );
  renderHorizontalBarChat(
    d3.select("#all-nighters"),
    ALL_NIGHTERS,
    options.width,
    250,
    false
  );
  renderHorizontalBarChat(
    d3.select("#party-before-covid"),
    PARTY_BEFORE_COVID,
    options.width,
    250,
    false
  );
  renderHorizontalBarChat(
    d3.select("#party-during-covid"),
    PARTY_DURING_COVID,
    options.width,
    250,
    false
  );
}

function renderAcademics(options) {
  renderBoxPlot(d3.select("#grades"), GRADES, options.width, 300, {
    yAxisTitle: "Term average",
    xAxisTitle: "Study term number",
  });

  renderLineChart(
    d3.select("#grades-median"),
    GRADES_MEDIAN,
    options.width,
    300,
    {
      yAxisTitle: "Grade (%)",
      xAxisTitle: "Academic term",
      range: [60, 100],
    }
  );

  renderGroupedBarChart(
    d3.select("#attendence-class"),
    ATTENDANCE,
    options.width,
    250,
    attendence_class_legend,
    {
      yAxisTitle: "Number of Respondents",
      xAxisTitle: "Term",
    }
  );

  renderHorizontalBarChat(
    d3.select("#num-midterms-failed"),
    NUM_MIDTERMS_FAILED,
    options.width,
    250,
    false
  );

  renderHorizontalBarChat(
    d3.select("#num-classes-failed"),
    NUM_CLASSES_FAILED,
    options.width,
    100,
    false
  );

  renderHorizontalBarChat(
    d3.select("#classes-failed"),
    CLASSES_FAILED,
    options.width,
    300,
    true
  );

  renderPieChart(
    d3.select("#office-hours"),
    ATTEND_OFFICE_HOURS,
    options.width * 0.75,
    options.width * 0.75,
    true
  );

  renderHorizontalBarChat(
    d3.select("#favourite-course"),
    FAVOURITE_COURSE,
    options.width,
    500,
    true
  );

  renderMultipleHorizontalBarCharts(
    favourite_course_per_term,
    FAVOURITE_COURSE_PER_TERM,
    options.width,
    400,
    true
  );

  renderHorizontalBarChat(
    d3.select("#least-favourite-course"),
    LEAST_FAVOURITE_COURSE,
    options.width,
    500,
    true
  );

  renderMultipleHorizontalBarCharts(
    least_favourite_course_per_term,
    LEAST_FAVOURITE_COURSE_PER_TERM,
    options.width,
    400,
    true
  );

  drawWordCloud(d3.select("#favourite-prof"), FAVOURITE_PROF, options);

  renderHorizontalBarChat(
    d3.select("#options-minors"),
    OPTIONS_OR_MINORS,
    options.width,
    300,
    true
  );

  renderHorizontalBarChat(
    d3.select("#fydp-category"),
    FYDP_CATEGORY,
    options.width,
    200,
    true
  );

  renderPieChart(
    d3.select("#like-fydp"),
    LIKE_FYDP,
    options.width * 0.75,
    options.width * 0.75
  );

  renderPieChart(
    d3.select("#continue-fydp"),
    CONTINUE_FYDP,
    options.width * 0.75,
    options.width * 0.75
  );

  renderGroupedBarChart(
    d3.select("#overload"),
    OVERLOAD,
    options.width,
    250,
    yes_no_legend,
    {
      yAxisTitle: "Number of Respondents",
      xAxisTitle: "Term",
    }
  );

  renderHorizontalBarChat(
    d3.select("#overload-reason"),
    OVERLOAD_REASON,
    options.width,
    500,
    true
  );

  renderPieChart(
    d3.select("#cr-nr-3a"),
    CR_NCR_IN_3A,
    options.width * 0.75,
    options.width * 0.75
  );

  renderHorizontalBarChat(
    d3.select("#cr-nr-3a-reason"),
    REASON_FOR_CR_NCR_IN_3A,
    options.width,
    250,
    false
  );

  renderMultiSeriesHorizontalBarChat(
    d3.select("#residence-location"),
    RESIDENCE,
    400,
    1000,
    false,
    housing_terms.reduce((acc, value) => {
      return { ...acc, [value]: Object.keys(acc).length };
    }, {})
  );

  renderMultipleHistograms(
    housing_cost_per_term,
    HOUSING_COSTS,
    options.width,
    250,
    {
      binCount: 7,
      yAxisTitle: "Number of Respondents",
      xAxisTitle: "Cost of housing",
      domain: [0, 6000],
      yDomain: [0, 30],
    }
  );

  renderMultipleHistograms(
    people_lived_with_per_term,
    PEOPLE_LIVED_WITH,
    options.width,
    250,
    {
      binCount: 10,
      yAxisTitle: "Number of Respondents",
      xAxisTitle: "Number of people lived with",
      domain: [0, 8],
      yDomain: [0, 30],
    }
  );

  renderMultipleHistograms(
    hackathons_per_term,
    HACKATHONS_ATTENDED,
    options.width,
    250,
    {
      binCount: 10,
      yAxisTitle: "Number of Respondents",
      xAxisTitle: "Number of Hackathons",
      domain: [0, 10],
      yDomain: [0, 45],
    }
  );

  renderMultipleHistograms(
    side_projects_per_term,
    HOURS_ON_SIDE_PROJECTS_PER_WEEK,
    options.width,
    250,
    {
      binCount: 10,
      yAxisTitle: "Number of Respondents",
      xAxisTitle: "Hours per Week",
      domain: [0, 10],
      yDomain: [0, 35],
    }
  );

  renderMultipleHistograms(
    se_events_per_term,
    HOURS_AT_SE_EVENTS_PER_WEEK,
    options.width,
    250,
    {
      binCount: 10,
      yAxisTitle: "Number of Respondents",
      xAxisTitle: "Hours per week",
      domain: [0, 10],
      yDomain: [0, 35],
    }
  );

  renderMultiSeriesHorizontalBarChat(
    d3.select("#technical-extracurriculars"),
    DESIGN_TEAM_OR_TECHNICAL_EXTRACURRICULARS,
    400,
    500,
    true,
    housing_terms.reduce((acc, value) => {
      return { ...acc, [value]: Object.keys(acc).length };
    }, {})
  );

  renderMultipleHistograms(
    technical_extra_per_term,
    HOURS_ON_DESIGN_TEAM_OR_TECHNICAL_EXTRACURRICULARS_PER_WEEK,
    options.width,
    250,
    {
      binCount: 10,
      yAxisTitle: "Number of Respondents",
      xAxisTitle: "Hours per week",
      domain: [0, 10],
      yDomain: [0, 45],
    }
  );

  drawWordCloud(
    d3.select("#non-technical-extracurriculars-cloud"),
    NON_TECHNICAL_EXTRACURRICULARS,
    options
  );

  renderMultipleHistograms(
    non_technical_extra_per_term,
    HOURS_ON_NON_TECHNICAL_EXTRACURRICULARS_PER_WEEK,
    options.width,
    250,
    {
      binCount: 10,
      yAxisTitle: "Number of Respondents",
      xAxisTitle: "Hours per week",
      domain: [0, 10],
      yDomain: [0, 40],
    }
  );

  renderMultipleHistograms(
    fydp_hours_per_term,
    HOURS_ON_FYDP_PER_WEEK,
    options.width,
    250,
    {
      binCount: 10,
      yAxisTitle: "Number of Respondents",
      xAxisTitle: "Hours per week",
      domain: [0, 10],
      yDomain: [0, 8],
    }
  );

  renderGroupedBarChart(
    d3.select("#burnout-per-term"),
    BURN_OUT_PER_TERM,
    options.width,
    250,
    { No: "No", Yes: "Yes" },
    {
      xAxisTitle: "Term",
      yAxisTitle: "Number of Students",
    }
  );
}

function renderBackground(options) {
  renderMultiSeriesHorizontalBarChat(
    d3.select("#ethnicity"),
    ETHNICITY,
    400,
    300,
    true,
    { "ethnicity-all": 0, "ethnicity-women": 1, "ethnicity-men": 2 }
  );
  renderPieChart(
    d3.select("#international"),
    INTERNATIONAL,
    options.width * 0.75,
    options.width * 0.75
  );
  renderHorizontalBarChat(
    d3.select("#parent-education"),
    PARENT_EDUCATION,
    options.width,
    280,
    true
  );
  renderPieChart(
    d3.select("#gender"),
    GENDER,
    options.width * 0.75,
    options.width * 0.75
  );
  renderHorizontalBarChat(
    d3.select("#family-income"),
    FAMILY_INCOME,
    400,
    300,
    false
  );
  renderPieChart(
    d3.select("#year-of-birth"),
    YEAR_OF_BIRTH,
    options.width * 0.75,
    options.width * 0.75
  );
  renderPieChart(
    d3.select("#sexual-orientation"),
    SEXUAL_ORIENTATION,
    options.width * 0.75,
    options.width * 0.75
  );
  renderHorizontalBarChat(
    d3.select("#home-location"),
    HOME_LOCATION,
    400,
    300,
    false
  );
  renderPieChart(
    d3.select("#immigrated"),
    IMMIGRATED,
    options.width * 0.75,
    options.width * 0.75
  );
  renderHorizontalBarChat(d3.select("#siblings"), SIBLINGS, 400, 300, false);
  renderHorizontalBarChat(
    d3.select("#enriched-program"),
    ENRICHED_PROGRAM,
    400,
    300,
    false
  );
  renderPieChart(
    d3.select("#cegep"),
    CEGEP,
    options.width * 0.75,
    options.width * 0.75
  );
  renderHorizontalBarChat(
    d3.select("#cegep-attended"),
    CEGEP_ATTENDED,
    400,
    300,
    true
  );
  renderHorizontalBarChat(
    d3.select("#mother-tongue"),
    MOTHER_TONGUE,
    400,
    300,
    true
  );
  renderPieChart(
    d3.select("#programming"),
    PROGRAMMING,
    options.width * 0.75,
    options.width * 0.75
  );
  renderHistogram(
    d3.select("#admission-average"),
    ADMISSION_AVERAGE,
    options.width,
    200,
    {
      binCount: 7,
      yAxisTitle: "Number of Students",
      xAxisTitle: "High School Admission Average",
    }
  );
  renderHorizontalBarChat(
    d3.select("#num-languages"),
    NUM_LANGUAGE,
    options.width,
    280,
    false
  );
  renderHorizontalBarChat(
    d3.select("#known-languages"),
    LANGUAGE_KNOWN,
    options.width,
    280,
    true
  );
  renderHorizontalBarChat(
    d3.select("#emigrated"),
    EMIGRATED_COUNTRY,
    options.width,
    280,
    true
  );
  renderGroupedBarChart(
    d3.select("#siblings-parents"),
    SIBLINGS_PARENTS,
    options.width,
    250,
    siblings_parents_legend,
    {
      yAxisTitle: "Number of Students",
      xAxisTitle: "Number of Siblings",
    }
  );
}

function renderExperience(options) {
  renderHorizontalBarChat(
    d3.select("#highest-workload"),
    COURSE_WITH_LARGEST_WORKLOAD,
    options.width,
    280,
    true
  );
  renderPieChart(
    d3.select("#p-eng"),
    P_ENG,
    options.width * 0.75,
    options.width * 0.75
  );
  renderPieChart(
    d3.select("#switch-out-se"),
    CONSIDERED_SWITCHING_OUT_OF_SE,
    options.width * 0.75,
    options.width * 0.75
  );
  renderHorizontalBarChat(
    d3.select("#program-switch-to"),
    PROGRAM_TO_SWITCH_TO,
    options.width,
    250
  );
  renderPieChart(
    d3.select("#drop-out-waterloo"),
    CONSIDERED_DROPPING_OUT_OF_UNI,
    options.width * 0.75,
    options.width * 0.75
  );
  renderHorizontalBarChat(
    d3.select("#redo-uni"),
    START_AGAIN_PROGRAM,
    options.width,
    280
  );
  renderPieChart(
    d3.select("#burnt-out-4B"),
    BURNT_OUT,
    options.width * 0.75,
    options.width * 0.75
  );
  renderPieChart(
    d3.select("#senioritis"),
    SENIORITIS,
    options.width * 0.75,
    options.width * 0.75
  );
  renderHorizontalBarChat(
    d3.select("#happy-with-choice"),
    HAPPY_WITH_CHOICE,
    options.width,
    280
  );
}

function renderFinances(options) {
  renderHorizontalBarChat(
    d3.select("#investing"),
    INVEST,
    options.width,
    250,
    false
  );
  renderHistogram(
    d3.select("#percentage-invested"),
    PERCENTAGE_INVESTED,
    options.width,
    250,
    { domain: [0, 100], binCount: 10, xAxisTitle: "%" }
  );
  renderHistogram(
    d3.select("#degree-money-coop"),
    MONEY_FROM_DEGREE.coop,
    options.width,
    250,
    { domain: [0, 100], binCount: 10, xAxisTitle: "%", yAxisTitle: "Coop" }
  );
  renderHistogram(
    d3.select("#degree-money-family"),
    MONEY_FROM_DEGREE.family,
    options.width,
    250,
    { domain: [0, 100], binCount: 10, xAxisTitle: "%", yAxisTitle: "Family" }
  );
  renderHistogram(
    d3.select("#degree-money-scholarships"),
    MONEY_FROM_DEGREE.scholarships,
    options.width,
    250,
    {
      domain: [0, 100],
      binCount: 10,
      xAxisTitle: "%",
      yAxisTitle: "Scholarships",
    }
  );
  renderHistogram(
    d3.select("#degree-money-hs"),
    MONEY_FROM_DEGREE.high_school_jobs,
    options.width,
    250,
    {
      domain: [0, 100],
      binCount: 10,
      xAxisTitle: "%",
      yAxisTitle: "Highschool Jobs",
    }
  );
  renderHistogram(
    d3.select("#degree-money-side"),
    MONEY_FROM_DEGREE.side_job,
    options.width,
    250,
    { domain: [0, 100], binCount: 10, xAxisTitle: "%", yAxisTitle: "Side jobs" }
  );
  renderHistogram(
    d3.select("#degree-money-other"),
    MONEY_FROM_DEGREE.other,
    options.width,
    250,
    { domain: [0, 100], binCount: 10, xAxisTitle: "%", yAxisTitle: "Other" }
  );
  renderHistogram(
    d3.select("#material-expenses"),
    SCHOOL_MATERIAL_EXPENSES,
    options.width,
    250,
    { domain: [0, 550] }
  );
  renderHistogram(
    d3.select("#student-loans"),
    STUDENT_LOANS,
    options.width * 1,
    250,
    { domain: [0, 40000] }
  );
  renderHorizontalBarChat(
    d3.select("#net-worth"),
    LIQUID_NET_WORTH,
    options.width,
    250,
    false
  );
  renderHorizontalBarChat(
    d3.select("#financially-satisfied"),
    FINANCIALLY_SATISFIED,
    options.width,
    250,
    false
  );
  // renderHorizontalBarChat(d3.select('#budgeting'), BUDGET, options.width, 250, false);
  // renderPieChart(d3.select('#resp'), RESP, options.width * 0.75, options.width * 0.75);
  // renderPieChart(d3.select('#loans'), LOANS, options.width * 0.75, options.width * 0.75);
  // renderHorizontalBarChat(d3.select('#new-debt'), NEW_DEBT, options.width, 250, false);
}

function renderHealth(options) {
  renderHorizontalBarChat(
    d3.select("#hospital"),
    HOSPITAL,
    options.width,
    250,
    false
  );
  renderHorizontalBarChat(
    d3.select("#health-extension"),
    EXTENSION_DUE_ILLNESS,
    options.width,
    250,
    false
  );
  renderHorizontalBarChat(
    d3.select("#sick-in-class"),
    SICK_IN_CLASS,
    options.width,
    250,
    false
  );
  // renderPieChart(d3.select('#health-extension'), EXTENSION_DUE_ILLNESS, options.width * 0.75, options.width * 0.75);
  renderPieChart(
    d3.select("#mental-health-count"),
    MENTAL_HEALTH,
    options.width * 0.75,
    options.width * 0.75
  );
  renderHorizontalBarChat(
    d3.select("#mental-health-issues"),
    MENTAL_HEALTH_ISSUES,
    options.width,
    250,
    false
  );
  renderHorizontalBarChat(
    d3.select("#mental-health-terms"),
    MH_AFFECTED_TERMS,
    options.width,
    250,
    false
  );
  renderHorizontalBarChat(
    d3.select("#councelling"),
    COUNSELLING_SERVICES,
    options.width,
    250,
    false
  );
  renderHorizontalBarChat(
    d3.select("#mental-health-diagnosed"),
    DIAGNOSED_MENTAL_HEALTH_ISSUES,
    options.width,
    250,
    false
  );

  renderHorizontalBarChat(
    d3.select("#exercise-frequency"),
    EXERCISE_FREQ,
    options.width,
    250,
    false
  );
  drawWordCloud(d3.select("#exercise-type"), EXERCISE_WORDS, options);
  renderPieChart(
    d3.select("#intramurals"),
    INTRAMURALS,
    options.width * 0.75,
    options.width * 0.75
  );
  renderHorizontalBarChat(
    d3.select("#sport-level"),
    SPORT_LEVEL,
    options.width,
    250,
    false
  );
  renderHorizontalBarChat(
    d3.select("#intramural-frequency"),
    INTRAMURAL_FREQ,
    options.width,
    250,
    false
  );

  renderPieChart(
    d3.select("#self-esteem"),
    SELF_ESTEEM,
    options.width * 0.75,
    options.width * 0.75
  );
  renderPieChart(
    d3.select("#imposter-syndrome"),
    IMPOSTER_SYNDROME,
    options.width * 0.6,
    options.width * 0.6
  );
  renderPieChart(
    d3.select("#imposter-syndrome-now"),
    IMPOSTER_SYNDROME_NOW,
    options.width * 0.6,
    options.width * 0.6
  );
}

function renderCovid(options) {
  renderPieChart(
    d3.select("#contracted-covid"),
    CONTRACTED_COVID,
    options.width * 0.75,
    options.width * 0.75
  );
  renderPieChart(
    d3.select("#know-someone-contracted-covid"),
    KNOW_SOMEONE_CONTRACTED_COVID,
    options.width * 0.75,
    options.width * 0.75
  );
  renderHorizontalBarChat(
    d3.select("#covid-doses"),
    COVID_DOSES,
    options.width,
    250,
    false
  );
  renderHistogram(d3.select("#covid-tests"), COVID_TESTS, options.width, 250, {
    domain: [0, 20],
    binCount: 4,
  });
  renderPieChart(
    d3.select("#follow-public-guidance"),
    FOLLOW_PUBLIC_GUIDANCE,
    options.width * 0.75,
    options.width * 0.75
  );
  renderHistogram(
    d3.select("#largest-gathering"),
    LARGEST_GATHERING,
    options.width,
    250,
    { domain: [1, 120], binCount: 15 }
  );
  renderPieChart(
    d3.select("#covid-full-time-impact"),
    FULL_TIME_AFFECTED_BY_COVID,
    options.width * 0.75,
    options.width * 0.75
  );
  renderHorizontalBarChat(
    d3.select("#how-covid-full-time-impact"),
    HOW_FULL_TIME_AFFECTED_BY_COVID,
    options.width,
    250,
    false
  );
}

function renderMisc(options) {
  renderHorizontalBarChat(
    d3.select("#burnout"),
    BURNOUT,
    options.width,
    250,
    false
  );
  renderPieChart(
    d3.select("#fights"),
    FIGHTS,
    options.width * 0.75,
    options.width * 0.75
  );
  renderHorizontalBarChat(
    d3.select("#reddit"),
    REDDIT_USAGE,
    options.width,
    150,
    false
  );
  renderPieChart(
    d3.select("#cat-or-dog"),
    CAT_OR_DOG,
    options.width * 0.75,
    options.width * 0.75
  );
  renderHorizontalBarChat(
    d3.select("#crying"),
    CRYING,
    options.width,
    250,
    false
  );
  renderPieChart(
    d3.select("#transfer-thoughts"),
    TRANSFER_THOUGHTS,
    options.width * 0.75,
    options.width * 0.75
  );
  renderPieChart(
    d3.select("#dropout-thoughts"),
    DROPOUT_THOUGHTS,
    options.width * 0.75,
    options.width * 0.75
  );
  renderPieChart(
    d3.select("#se21-grad"),
    SE21_GRAD,
    options.width * 0.75,
    options.width * 0.75
  );
}

function renderFuture(options) {
  renderHorizontalBarChat(
    d3.select("#post-grad"),
    POST_GRAD,
    options.width,
    150,
    true
  );

  renderHorizontalBarChat(
    d3.select("#career-motivations-1"),
    MOTIVATIONS_FIRST,
    options.width,
    180,
    true
  );

  renderHorizontalBarChat(
    d3.select("#career-motivations-2"),
    MOTIVATIONS_SECOND,
    options.width,
    180,
    true
  );

  renderHorizontalBarChat(
    d3.select("#career-motivations-3"),
    MOTIVATIONS_THIRD,
    options.width,
    180,
    true
  );

  renderHorizontalBarChat(
    d3.select("#post-location"),
    POST_LOCATION,
    options.width,
    180,
    true
  );

  drawWordCloud(d3.select("#ft-company"), FULL_TIME_COMPANY, options);

  renderHorizontalBarChat(
    d3.select("#ft-company-type"),
    FULL_TIME_COMPANY_TYPE,
    options.width,
    180,
    false
  );

  renderHorizontalBarChat(
    d3.select("#post-contentness"),
    POST_CONTENTNESS,
    options.width,
    180,
    false
  );

  renderHistogram(
    d3.select("#ft-base"),
    FULL_TIME_COMPENSATION.base,
    options.width,
    200,
    {
      binCount: 8,
      yAxisTitle: "Count",
      xAxisTitle: "CAD (thousands)",
    }
  );
  renderHistogram(
    d3.select("#ft-stock-first-year"),
    FULL_TIME_COMPENSATION.stock_first_year,
    options.width,
    200,
    {
      binCount: 6,
      yAxisTitle: "Count",
      xAxisTitle: "CAD (thousands)",
    }
  );
  renderHistogram(
    d3.select("#ft-one-time-bonus"),
    FULL_TIME_COMPENSATION.one_time_bonus,
    options.width,
    200,
    {
      binCount: 6,
      yAxisTitle: "Count",
      xAxisTitle: "CAD (thousands)",
    }
  );
  renderHistogram(
    d3.select("#ft-eoy-recurring-comp"),
    FULL_TIME_COMPENSATION.eoy_recurring_comp,
    options.width,
    200,
    {
      binCount: 6,
      yAxisTitle: "Count",
      xAxisTitle: "CAD (thousands)",
    }
  );
  renderHistogram(
    d3.select("#ft-year-1-total-comp"),
    FULL_TIME_COMPENSATION.year1_total_comp,
    options.width,
    200,
    {
      binCount: 6,
      yAxisTitle: "Count",
      xAxisTitle: "CAD (thousands)",
    }
  );
  renderHistogram(
    d3.select("#ft-total-stock-grant"),
    FULL_TIME_COMPENSATION.total_stock_grant,
    options.width,
    200,
    {
      binCount: 6,
      yAxisTitle: "Count",
      xAxisTitle: "CAD (thousands)",
    }
  );

  renderPieChart(
    d3.select("#coop-conversion"),
    COOP_CONVERSION,
    options.width * 0.75,
    options.width * 0.75
  );
  renderHorizontalBarChat(
    d3.select("#coop-return-which-term"),
    LAST_COOP_TERM_RETURN,
    options.width,
    180,
    false
  );
  renderHistogram(
    d3.select("#percent-remote"),
    PERCENT_REMOTE,
    options.width,
    200,
    {
      binCount: 10,
      yAxisTitle: "Count",
      xAxisTitle: "% of time remote",
    }
  );
  renderHorizontalBarChat(
    d3.select("#planned-time-at-company"),
    PLANNED_TIME_AT_COMPANY,
    options.width,
    180,
    false
  );
  renderHorizontalBarChat(
    d3.select("#return-to-home-country"),
    RETURN_TO_HOME_COUNTRY,
    options.width,
    180,
    false
  );
  renderPieChart(
    d3.select("#cont-fydp"),
    CONT_FYDP,
    options.width * 0.75,
    options.width * 0.75
  );
}

function renderTransfers(options) {
  renderHorizontalBarChat(
    d3.select("#last-se-term"),
    LAST_SE_TERM,
    options.width * 0.75,
    250,
    false
  );
  renderPieChart(
    d3.select("#reasons-transferred"),
    REASONS_TRANSFERRED,
    options.width * 0.75,
    options.width * 0.75
  );
  renderPieChart(
    d3.select("#happy-switching"),
    HAPPY_SWITCHING,
    options.width * 0.75,
    options.width * 0.75
  );
}

function renderRelationships(options) {
  // family section
  renderHorizontalBarChat(
    d3.select("#speak-year-1"),
    FAMILY.SPEAK_YEAR_1,
    options.width * 0.75,
    250,
    false
  );

  renderHorizontalBarChat(
    d3.select("#speak-year-4"),
    FAMILY.SPEAK_YEAR_4,
    options.width * 0.75,
    250,
    false
  );

  renderHorizontalBarChat(
    d3.select("#home-year-1"),
    FAMILY.HOME_YEAR_1,
    options.width * 0.75,
    250,
    false
  );

  renderHorizontalBarChat(
    d3.select("#home-year-4"),
    FAMILY.HOME_YEAR_4,
    options.width * 0.75,
    250,
    false
  );

  // friends section
  renderGroupedBarChart(
    d3.select("#friends-cumulative"),
    FRIENDSHIPS.CUMULATIVE,
    options.fullWidth,
    500,
    friends_groups,
    {
      yAxisTitle: "Number of Respondents",
      xAxisTitle: "Number of Friends",
    }
  );

  renderHorizontalBarChat(
    d3.select("#close-friend-se"),
    FRIENDSHIPS.CLOSE_FRIEND_SE,
    options.width * 0.75,
    250,
    false
  );

  renderHorizontalBarChat(
    d3.select("#se-people-met"),
    FRIENDSHIPS.SE_PEOPLE_MET,
    options.width * 0.75,
    250,
    false
  );

  // romance section
  renderHistogram(
    d3.select("#degree-non-single"),
    ROMANCE.DEGREE_NON_SINGLE,
    options.fullWidth,
    300,
    {
      binCount: 10,
      yAxisTitle: "Count",
      xAxisTitle: "Percentage (%) of degree (56 months)",
    }
  );

  renderHorizontalBarChat(
    d3.select("#relationship-count"),
    ROMANCE.RELATIONSHIP_COUNT,
    options.width,
    250,
    false
  );
  renderPieChart(
    d3.select("#secest"),
    ROMANCE.SECEST,
    options.width * 0.75,
    options.width * 0.75
  );

  renderHorizontalBarChat(
    d3.select("#sexual-partners"),
    ROMANCE.SEXUAL_PARTNERS,
    options.width,
    250,
    false
  );

  renderBoxPlot(
    d3.select("#rice-purity"),
    ROMANCE.RICE_PURITY,
    options.width,
    280,
    {
      yAxisTitle: "Rice Purity Test Score",
      xAxisTitle: "Time",
    }
  );

  renderPieChart(
    d3.select("#cheating"),
    ROMANCE.CHEATING,
    options.width * 0.75,
    options.width * 0.75
  );

  renderPieChart(
    d3.select("#dating-apps"),
    ROMANCE.DATING_APPS,
    options.width * 0.75,
    options.width * 0.75
  );

  drawWordCloud(
    d3.select("#controlled-substances"),
    ROMANCE.CONTROLLED_SUBSTANCES,
    options
  );

  renderPieChart(
    d3.select("#class-drunk"),
    ROMANCE.CLASS_DRUNK,
    options.width * 0.75,
    options.width * 0.75
  );

  renderPieChart(
    d3.select("#exam-drunk"),
    ROMANCE.EXAM_DRUNK,
    options.width * 0.75,
    options.width * 0.75
  );
}

function renderExchange(options) {
  renderPieChart(
    d3.select("#exchange-participation"),
    EXCHANGE.PARTICIPATION,
    options.width * 0.75,
    options.width * 0.75
  );
  renderHorizontalBarChat(
    d3.select("#exchange-schools"),
    EXCHANGE.SCHOOLS,
    options.width,
    250,
    false
  );
  renderHorizontalBarChat(
    d3.select("#exchange-favourite"),
    EXCHANGE.FAVOURITE,
    options.width,
    250,
    false
  );
  renderHorizontalBarChat(
    d3.select("#exchange-challenges"),
    EXCHANGE.CHALLENGES,
    options.width,
    250,
    false
  );
}
