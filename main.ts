import * as d3 from 'd3';
import * as $ from 'jquery';
import { renderWordCloud } from './shared/wordcloud';
import { renderHorizontalBarChat } from './shared/horizontalbarchart.js';
import { renderMultiSeriesHorizontalBarChat, renderGroupedBarChart } from './shared/multiserieshorizontalbarchart.js';
import { renderPieChart } from './shared/piechart.js';
import { renderLineChart } from './shared/linechart.js';
import { renderBoxPlot } from './shared/boxplot.js';
import { renderMultiSeriesBoxPlot } from './shared/multiseriesboxplot.js';
import * as util from './shared/utils';
import { renderDotPlot, renderBinnedDotLine } from './shared/dotplot.js';
import { renderHistogram } from './shared/histogram.js';
import { renderGeographicMap } from './shared/geographicmap.js';

import { TRANSFERRED,TERM_TRANSFERRED,REASONS_TRANSFERRED, DISLIKED_COURSES_TRANSFERRED,REGRET_TRANSFFERED } from './data/transfers'
import { EXTRACURRICULARS, GROCERY_STORES, TRAVEL_LOCATIONS, RESTAURANTS, SLEEP_TIME, SLEEP_DURATION, COOKING_FREQUENCY, EATING_OUT_FREQUENCY, FAVOURITE_EXERCISE, DESIGN_TEAM, PARTIES, HAPPY_THINGS, NEW_HOBBIES, PROGRAMMING_LANGUAGE, EDITOR, MOBILE_OS } from './data/lifestyle';
import { FAVOURITE_MANDATORY, FAVOURITE_ELECTIVE, DISLIKED_MANDATORY, ATTENDANCE, GRADES, PARENT_GRADES, ATTENDANCE_GRADE, CAMPUS_LOCATION_PRE, CAMPUS_LOCATION_POST, FAVOURITE_PROF_COUNT, FAILING, OPTIONS, OVERLOADING, OVERLOADING_REASONS, LARGEST_WORKLOAD, TRANSFER_FROM, ENRICHED_VS_GRADES, SLEEP_VS_GRADES, ENTRANCE_VS_GRADES, GRADES_OFFICIAL } from './data/academics';
import { INTERNATIONAL, PARENT_EDUCATION, ETHNICITY, GENDER, YEAR_OF_BIRTH, SEXUAL_ORIENTATION, HOME_LOCATION, FAMILY_INCOME, IMMIGRATED, SIBLINGS, ENRICHED_PROGRAM, CEGEP, CEGEP_ATTENDED, MOTHER_TONGUE, PROGRAMMING, CAT_OR_DOG, ADMISSION_AVERAGE, EMIGRATED_COUNTRY, NUM_LANGUAGE, LANGUAGE_KNOWN, SIBLINGS_PARENTS } from './data/background';
import { ORIGINAL, CHOOSE_PROGRAM, GENDER_RATING } from './data/outcome';
import { SALARY, WORK_LOCATION, FAVOURITE_LOCATION, HACKATHON_SALARY, SIDE_SALARY, ADMISSION_SALARY, COMPANY_WORK_COUNT, FAVOURITE_COMPANIES, GRADE_SALARY, GENDER_SALARY,LATE_INTERVIEWER, LATE_INTERVIEW, MISSED_INTERVIEW, FAVOURITE_COOP, FAVOURITE_COOP_REASON, COOP_RATINGS, COOP_TYPES, COOP_BREAKDOWN, COOP_JOBS } from './data/coop';
import { BURNOUT, FIGHTS, REDDIT_USAGE, CRYING, TRANSFER_THOUGHTS, DROPOUT_THOUGHTS, SE21_GRAD } from './data/misc';
import { POST_GRAD, POST_LOCATION, MOTIVATIONS, FULL_TIME_COMPENSATION, POST_RETURN_HOME, POST_CONTENTNESS, COOP_CONVERSION, FULL_TIME_COMPANY, CONT_FYDP, PENG } from './data/future';
import { FAMILY, FRIENDSHIPS, ROMANCE } from './data/relationships';
import { BUDGET, INVEST, RESP, SCHOOL_EXPENSES, NEW_DEBT, LOANS } from './data/finances';
import {SICK, OHIP, MENTAL_HEALTH, MENTAL_HEALTH_ISSUES, EXERCISE_FREQ, INTRAMURALS, EXERCISE_TYPE, EXERCISE_WORDS, WEIGHT, RECREATIONAL_SUBSTANCES, IMPOSTER_SYNDROME, IMPOSTER_SYNDROME_NOW} from './data/health';
import { EXCHANGE, EXCHANGE_GEO_DATA } from './data/exchange';

let ethnicity = ["ethnicity-all", "ethnicity-women", "ethnicity-men"];
let campus_location_term_pre = ["loc-1a", "loc-1b", "loc-2a", "loc-2b","loc-3a", "loc-3b"];
let campus_location_term_post = ["loc-4a", "loc-4b"];
let enriched_vs_grades = ["enriched-overall", "enriched-first-year"];
let admission_salary = ['admission-salary-overall','admission-salary-first-year'];
let entrance_vs_grades = ["entrance-overall", "entrance-first-year"];
let work_location = ["work-location-0", "work-location-1", "work-location-2", "work-location-3", "work-location-4", "work-location-5",
"work-location-6", "work-location-7", "work-location-8", "work-location-9", "work-location-10"];
let concise_version = false;

const friends_groups = {
  'friends-gain-coop': 'Gained over coop term',
  'friends-loss-coop': 'Lost over coop term',
  'friends-gain-study': 'Gained over study term',
  'friends-loss-study': 'Lost over study term'
};

const coop_ratings = {
  'rating-outstanding': 'Outstanding',
  'rating-excellent': 'Excellent',
  'rating-very-good': 'Very Good',
  'rating-satisfactory': 'Satisfactory'
};

const coop_types = {
  'coop-swe': 'Software Engineering / Web Developer',
  'coop-qa': 'QA / Testing',
  'coop-devops': 'DevOps',
  'coop-data-science': 'Data Science',
  'coop-research': 'Research',
  'coop-others': 'Others',
};

const coop_breakdown_legend = {
  'coop-app-num': 'Waterlooworks App.',
  'coop-app-num-ext': 'External App.',
  'coop-interviews': 'Interviews',
  'coop-offers': 'Offers',
};

const siblings_parents_legend = {
  'siblings-inc-zero': '0-50k / year',
  'siblings-inc-one': '50k-100k / year',
  'siblings-inc-two': '100k-150k / year',
  'siblings-inc-three': '150k-200k / year',
  'siblings-inc-four': '200k-250k / year',
  'siblings-inc-five': '250k-300k / year',
  'siblings-inc-six': '300k+ / year',
};

const coop_jobs = {
  'coop-first-round': 'First Round',
  'coop-continuous': 'Continuous',
  'coop-external': 'External',
};

window.onload = () => {
  let options = {
    width: (document.getElementsByClassName('half second')[0] as any).offsetWidth,
    fullWidth: (document.querySelector('div.full') as any).offsetWidth,
    isMobile: util.isMobile()
  };
  renderCoop(options);
  renderLifestyle(options);
  renderAcademics(options);
  renderBackground(options);
  renderOutcome(options);
  renderFinances(options);
  renderHealth(options);
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
  // setMultiBarActive("work-location-0", work_location);
  setupListeners();
}

function setupListeners() {
  let scaleItems = document.getElementsByClassName('scale-item');
  for (let i = 0; i < scaleItems.length; i++) {
    let j = i;
    (scaleItems[i] as any).onclick = function() {
      togglePressedForButtonItems(this, scaleItems);
      setActive(j);
    }
  }

  let ethnicityItems = document.getElementsByClassName('ethnicity-item');
  for (let i = 0; i < ethnicityItems.length; i++) {
    let j = ethnicity[i];
    (ethnicityItems[i] as any).onclick = function() {
      togglePressedForButtonItems(this, ethnicityItems);
      setMultiBarActive(j, ethnicity);
    }
  }
  
  let locPreItems = document.getElementsByClassName('loc-pre-item');
  for (let i = 0; i < locPreItems.length; i++) {
    let j = campus_location_term_pre[i];
    (locPreItems[i] as any).onclick = function() {
      togglePressedForButtonItems(this, locPreItems);
      setMultiBarActive(j, campus_location_term_pre);
    }
  }

  let locPostItems = document.getElementsByClassName('loc-post-item');
  for (let i = 0; i < locPostItems.length; i++) {
    let j = campus_location_term_post[i];
    (locPostItems[i] as any).onclick = function() {
      togglePressedForButtonItems(this, locPostItems);
      setMultiBarActive(j, campus_location_term_post);
    }
  }

  let friendsGainItems = document.getElementsByClassName('friends-gain-item');
  for (let i = 0; i < friendsGainItems.length; i++) {
    let currentClass = Object.keys(friends_groups)[i];
    (friendsGainItems[i] as any).onclick = function() {
      this.classList.toggle('pressed');
      const isActive = this.classList.contains('pressed');
      let items = document.getElementsByClassName(currentClass);
      for (let j = 0; j < items.length; j++) {
        if (isActive) {
          (items[j] as any).style.visibility = 'initial';
        } else {
          (items[j] as any).style.visibility = 'hidden';
        }
      }
      // setMultiBarActive(currentClass, Object.keys(friends_groups));
    }
  }

  let enrichedGradesItems = document.getElementsByClassName('enriched-grades-item');
  for (let i = 0; i < enrichedGradesItems.length; i++) {
    let j = enriched_vs_grades[i];
    (enrichedGradesItems[i] as any).onclick = function() {
      togglePressedForButtonItems(this, enrichedGradesItems);
      setMultiBarActive(j, enriched_vs_grades);
    }
  }

  let admissionSalary = document.getElementsByClassName('admission-salary-item');
  for (let i = 0; i < admissionSalary.length; i++) {
    let j = admission_salary[i];
    (admissionSalary[i] as any).onclick = function() {
      togglePressedForButtonItems(this, admissionSalary);
      setMultiBarActive(j, admission_salary);
    }
  }
  
  let entranceGradesItems = document.getElementsByClassName('entrance-grades-item');
  for (let i = 0; i < entranceGradesItems.length; i++) {
    let j = entrance_vs_grades[i];
    (entranceGradesItems[i] as any).onclick = function() {
      togglePressedForButtonItems(this, entranceGradesItems);
      setMultiBarActive(j, entrance_vs_grades);
    }
  }

  let workLocationItems = document.getElementsByClassName('work-location-item');
  for (let i = 0; i < workLocationItems.length; i++) {
    let currentClass = work_location[i];
    (workLocationItems[i] as any).onclick = function() {
      this.classList.toggle('pressed');
      const isActive = this.classList.contains('pressed');
      let items = document.getElementsByClassName(currentClass);
      for (let j = 0; j < items.length; j++) {
        if (isActive) {
          (items[j] as any).style.visibility = 'initial';
        } else {
          (items[j] as any).style.visibility = 'hidden';
        }
      }
    }
  }

  let conciseToggle = document.getElementById('concise-toggle');
  conciseToggle.onclick = function() {
    if(concise_version){
      show_all_content();
      concise_version = false;
    }else{
      hide_content();
      concise_version = true;
    }
  }
  window.addEventListener("scroll", onScroll);
}

function hide_content() {
  let items = document.getElementsByClassName("long_version");
  for(let i = 0; i < items.length; i++){
    (items[i] as any).style.display = 'none';
  }
}

function show_all_content() {
  let items = document.getElementsByClassName("long_version");
  for(let i = 0; i < items.length; i++){
    (items[i] as any).style.display = 'block';
  }
}

function setActive(term) {
  for (let i = 0; i <= 5; i++) {
    let items = document.getElementsByClassName(i.toString());
    for (let j = 0; j < items.length; j++) {
      if (i !== term) {
        (items[j] as any).style.visibility = 'hidden';
      } else {
        (items[j] as any).style.visibility = 'initial';
      }
    }
  }
}

function setMultiBarActive(term, arr) {
  for (let i = 0; i <= arr.length; i++) {
    let items = document.getElementsByClassName(arr[i]);
    for (let j = 0; j < items.length; j++) {
      if (arr[i] !== term) {
        (items[j] as any).style.visibility = 'hidden';
      } else {
        (items[j] as any).style.visibility = 'initial';
      }
    }
  }
}

/**
 * if selectedItem is not active, adds the pressed class to
 * selectedItem and removes it from the other items.
 *  */
function togglePressedForButtonItems(selectedItem: Element, items: HTMLCollectionOf<Element>) {
  if (selectedItem.classList.contains('pressed')) {
    return; // fast exit
  }
  for(let i = 0; i < items.length; i++) {
    if (items[i] === selectedItem) {
      items[i].classList.add('pressed'); // is active button
    } else {
      items[i].classList.remove('pressed'); // is inactive button
    }
  }
}

function onScroll(e) {
  var button = document.getElementById("goto_toc");
  var offsetFromToc = document.getElementById("toc").getBoundingClientRect().top
  
  if (offsetFromToc < 0) {
    button.style.visibility = "visible";
  } else {
    button.style.visibility = "hidden";
  }
}

function drawCoopWordCloud(elem, options) {
  let data = COMPANY_WORK_COUNT['data'];
  let words: any[] = [];
  let textSize = 15;
  if (options.fullWidth < 1200) {
    textSize = Math.pow(options.fullWidth / 1200, 0.25) * textSize;
  }
  for (let name in data) {
    words.push({
      text: name,
      size: Math.sqrt(data[name]) * textSize
    });
  }

  let scores = {};
  let data2 = FAVOURITE_COMPANIES['data'];
  for (let i in data2) {
    scores[data2[i][0]] = data2[i][1];
  }
  renderWordCloud(elem, words, scores, options.fullWidth, Math.min(window.innerHeight * 0.75, 800000 / options.fullWidth));
}

function drawWordCloud(elem, data, options, isFullWidth: boolean = false, height: Number = null) {
  let max = 0;
  for (var i in data) {
    if (data[i] > max) { max = data[i]; }
  }

  let wordcloudData: any[] = [];
  for (var i in data) {
    wordcloudData.push({
      text: i,
      size: Math.pow(data[i] * 1.0 / max, 0.25) * 36
    });
  }
  const cloudWidth = isFullWidth? options.fullWidth : options.width;
  const cloudHeight = height ? height : Math.min(window.innerHeight * 0.5, 200000 / cloudWidth);
  renderWordCloud(elem, wordcloudData, null, cloudWidth, cloudHeight);
}

function renderCoop(options) {
  drawCoopWordCloud(d3.select('#coop-cloud'), options);
  renderBoxPlot(d3.select('#salary'), SALARY, options.width, 350, {
    xAxisTitle: 'Co-op term #',
    yAxisTitle: 'Hourly compensation',
    tickFormat: (d) => { return '$' + d; }
  });
  renderLineChart(d3.select('#work-location'), WORK_LOCATION, options.fullWidth, 500, {
    toggle: 'work-location',
    lineLabels: [{
      'x': '6th',
      'value': 3,
      'location': 'California'
    }, {
      'x': '6th',
      'value': 11,
      'location': 'East Coast US'
    }, {
      'x': '6th',
      'value': 12.25,
      'location': 'GTA / Toronto'
    }, {
      'x': '6th',
      'value': 5,
      'location': 'K / W'
    }, {
      'x': '6th',
      'value': 2.25,
      'location': 'MW US'
    }, {
      'x': '6th',
      'value': 0.75,
      'location': 'Ott. / MTL'
    }, {
      'x': '6th',
      'value': 0.25,
      'location': 'Other Ontario'
    }, {
      'x': '6th',
      'value': 1.75,
      'location': 'PNW US'
    }, {
      'x': '6th',
      'value': 11.75,
      'location': 'Remote'
    }, {
      'x': '6th',
      'value': 1.25,
      'location': 'West Coast Canada'
    }, {
      'x': '6th',
      'value': -0.25,
      'location': 'Outside NA'
    }],
    xAxisTitle: 'Co-op term number',
    yAxisTitle: 'Proportion of students in the area',
    tickFormat: (d) => { return d + '%'; }
  });
  renderHorizontalBarChat(d3.select('#favourite-location'), FAVOURITE_LOCATION, options.width, 240, true);
  // renderBoxPlot(d3.select('#age-salary'), AGE_SALARY, options.width, 280, {
  //   yAxisTitle: 'Average first 3 co-op hourly salary in CAD',
  //   xAxisTitle: 'Age started coding'
  // });
  renderBoxPlot(d3.select('#hackathon-salary'), HACKATHON_SALARY, options.width, 400, {
    xAxisTitle: 'Number of hackathons attended',
    yAxisTitle: 'Average co-op hourly salary in CAD',
  });
  renderBoxPlot(d3.select('#side-salary'), SIDE_SALARY, options.width, 350, {
    xAxisTitle: 'Commitment to side projects',
    yAxisTitle: 'Average co-op hourly salary in CAD',
  });
  renderMultiSeriesBoxPlot(d3.select('#admission-salary'), ADMISSION_SALARY, options.width, 350, {
    yAxisTitle: 'Average co-op hourly salary in CAD',
    xAxisTitle: 'Admission average',
  }, {"admission-salary-overall": 0, "admission-salary-first-year": 1});
  renderDotPlot(d3.select('#grade-salary'), GRADE_SALARY, options.width, 400, {
    yAxisTitle: 'Hourly compensation in CAD',
    xAxisTitle: 'Cumulative average',
    rawSize: true,
    domain: [50, 100],
    range: [0, 150],
  });
  renderLineChart(d3.select('#gender-salary'), GENDER_SALARY, options.width, 300, {
    toggle: 'gender-salary',
    lineLabels: [{
      'x': '6th',
      'value': 50,
      'location': 'Women'
    }, {
      'x': '6th',
      'value': 66,
      'location': 'Men'
    }],
    yAxisTitle: 'Hourly salary in CAD',
    xAxisTitle: 'Co-op term number',
  });
  renderPieChart(d3.select('#missed_interview'), MISSED_INTERVIEW, options.width * 0.75, options.width * 0.75);
  renderPieChart(d3.select('#late_interview'), LATE_INTERVIEW, options.width * 0.75, options.width * 0.75);
  
  drawWordCloud(d3.select("#favourite-coop"), FAVOURITE_COOP, options)
  renderHorizontalBarChat(d3.select("#favourite-coop-reasons"), FAVOURITE_COOP_REASON, options.width, 250, true)
  renderGroupedBarChart(d3.select('#coop-ratings'), COOP_RATINGS, options.width, 250, coop_ratings,
  {
    yAxisTitle: 'Number of respondents',
  });
  renderGroupedBarChart(d3.select('#coop-types'), COOP_TYPES, options.width, 250, coop_types,
  {
    yAxisTitle: 'Number of respondents',
  });
  renderGroupedBarChart(d3.select('#coop-breakdown'), COOP_BREAKDOWN, options.width, 250, coop_breakdown_legend,
  {
    yAxisTitle: 'Average count',
  });
  renderGroupedBarChart(d3.select('#coop-jobs'), COOP_JOBS, options.width, 250, coop_jobs,
  {
    yAxisTitle: 'Percentage of respondents',
  });
}

function renderLifestyle(options) {
  renderHorizontalBarChat(d3.select('#programming-language'), PROGRAMMING_LANGUAGE, options.width, 400, true);
  renderHorizontalBarChat(d3.select('#editor'), EDITOR, options.width, 250, true);
  renderPieChart(d3.select('#mobile-os'), MOBILE_OS, options.width * 0.80, options.width * 0.80);

  renderPieChart(d3.select('#grocery-stores'), GROCERY_STORES, options.width * 0.80, options.width * 0.80);
  renderPieChart(d3.select('#fav-exercise'), FAVOURITE_EXERCISE, options.width * 0.80, options.width * 0.80);

  drawWordCloud(d3.select('#travel-locations'), TRAVEL_LOCATIONS, options);
  drawWordCloud(d3.select('#restaurants'), RESTAURANTS, options);
  drawWordCloud(d3.select('#happy-things'), HAPPY_THINGS.COUNTS, options);
  drawWordCloud(d3.select('#hobbies'), NEW_HOBBIES, options, true, Math.min(window.innerHeight * 0.55, 650000 / options.fullWidth));

  renderHorizontalBarChat(d3.select('#sleep-time'), SLEEP_TIME, options.width, 250, false);
  renderHorizontalBarChat(d3.select('#sleep-duration'), SLEEP_DURATION, options.width, 250, false);
  renderHorizontalBarChat(d3.select('#cooking-frequency'), COOKING_FREQUENCY, options.width, 250, false);
  renderHorizontalBarChat(d3.select('#eating-out-frequency'), EATING_OUT_FREQUENCY, options.width, 250, false);
  renderHorizontalBarChat(d3.select('#extracurriculars'), EXTRACURRICULARS, options.width, 250, false);
  renderHorizontalBarChat(d3.select('#design-team'), DESIGN_TEAM, options.width, 250, false);
  renderHorizontalBarChat(d3.select('#parties'), PARTIES, options.width, 250, false);
}

function renderAcademics(options) {
  renderMultiSeriesHorizontalBarChat(d3.select('#campus-location-pre'), CAMPUS_LOCATION_PRE, 400, 500, false, {"loc-1a": 0, "loc-1b": 1, "loc-2a": 2, "loc-2b": 3,"loc-3a": 4, "loc-3b": 5});
  renderMultiSeriesHorizontalBarChat(d3.select('#campus-location-post'), CAMPUS_LOCATION_POST, 400, 300, false, {"loc-4a": 0, "loc-4b": 1});
  drawWordCloud(d3.select('#prof-cloud'), FAVOURITE_PROF_COUNT, options);
  renderHorizontalBarChat(d3.select('#failing'), FAILING, options.width, 100, false);
  renderHorizontalBarChat(d3.select('#options'), OPTIONS, options.width, 100, true);
  renderHorizontalBarChat(d3.select('#overloading'), OVERLOADING, options.width, 200, false);
  renderHorizontalBarChat(d3.select('#overloading-reasons'), OVERLOADING_REASONS, options.width, 200, false);
  renderHorizontalBarChat(d3.select('#largest-workload'), LARGEST_WORKLOAD, options.width, 200, false);

  renderBoxPlot(d3.select('#grades'), GRADES, options.width, 300, {
    yAxisTitle: 'Term average',
    xAxisTitle: 'Study term number',
  });
  renderHorizontalBarChat(d3.select('#favourite-mandatory'), FAVOURITE_MANDATORY, options.width, 390, false);
  renderHorizontalBarChat(d3.select('#disliked-mandatory'), DISLIKED_MANDATORY, options.width, 420, false);
  renderHorizontalBarChat(d3.select('#favourite-elective'), FAVOURITE_ELECTIVE, options.width, 390, false);
  renderHorizontalBarChat(d3.select('#transfer-from'), TRANSFER_FROM, options.width, 100, false);
  renderLineChart(d3.select('#attendance'), ATTENDANCE, options.width, 300, {
    toggle: 'attendance',
    yAxisTitle: 'Proportion of class attended',
    xAxisTitle: 'Study term number',
    range: [50, 100]
  });
  renderBoxPlot(d3.select('#parent-grades'), PARENT_GRADES, options.width, 280, {
    yAxisTitle: 'Cumulative average',
    xAxisTitle: 'Parents\' education',
  });
  renderMultiSeriesBoxPlot(d3.select('#enriched-grades'), ENRICHED_VS_GRADES, options.width, 280, {
    yAxisTitle: 'Cumulative average',
    xAxisTitle: 'Enriched Programs',
  }, {"enriched-overall": 0, "enriched-first-year": 1});
  renderMultiSeriesBoxPlot(d3.select('#entrance-grades'), ENTRANCE_VS_GRADES, options.width, 280, {
    yAxisTitle: 'Cumulative average',
    // xAxisTitle: 'Enriched Program (EP)',
  }, {"entrance-overall": 0, "entrance-first-year": 1});
  renderBoxPlot(d3.select('#sleep-grades'), SLEEP_VS_GRADES, options.width, 280, {
    yAxisTitle: 'Cumulative average',
    xAxisTitle: 'Hours of Sleep',
  });
  renderDotPlot(d3.select('#distribution'), ATTENDANCE_GRADE, options.width, 300, {
    yAxisTitle: 'Grades relative to average',
    xAxisTitle: 'Proportion of class attended',
    domainValues: [0, 100],
    rangeValues: [0, 100],
    domain: [0, 10],
    range: [-4, 4],
    tickFormat: (d) => {
      let sign = '+';
      if (d < 0) { sign = ''; }
      return sign + (d * 5) + '%';
    },
    xTickFormat: (d) => {
      return ((d) * 10) + '%'
    }
  });
  renderLineChart(d3.select('#grades-official'), GRADES_OFFICIAL, options.width, 300, {
    yAxisTitle: 'Grade (%)',
    xAxisTitle: 'Academic term',
    range: [50, 100]
  });
}

function renderBackground(options) {
  renderMultiSeriesHorizontalBarChat(d3.select('#ethnicity'), ETHNICITY, 400, 300, true, {"ethnicity-all": 0, "ethnicity-women": 1, "ethnicity-men": 2});
  renderPieChart(d3.select('#international'), INTERNATIONAL, options.width * 0.75, options.width * 0.75);
  renderHorizontalBarChat(d3.select('#parent-education'), PARENT_EDUCATION, options.width, 280, true);
  renderPieChart(d3.select('#gender'), GENDER, options.width * 0.75, options.width * 0.75);
  renderHorizontalBarChat(d3.select('#family-income'), FAMILY_INCOME, 400, 300, false);
  renderPieChart(d3.select('#year-of-birth'), YEAR_OF_BIRTH, options.width * 0.75, options.width * 0.75);
  renderPieChart(d3.select('#sexual-orientation'), SEXUAL_ORIENTATION, options.width * 0.75, options.width * 0.75);
  renderHorizontalBarChat(d3.select('#home-location'), HOME_LOCATION, 400, 300, false);
  renderPieChart(d3.select('#immigrated'), IMMIGRATED, options.width * 0.75, options.width * 0.75);
  renderHorizontalBarChat(d3.select('#siblings'), SIBLINGS, 400, 300, false);
  renderHorizontalBarChat(d3.select('#enriched-program'), ENRICHED_PROGRAM, 400, 300, false);
  renderPieChart(d3.select('#cegep'), CEGEP, options.width * 0.75, options.width * 0.75);
  renderHorizontalBarChat(d3.select('#cegep-attended'), CEGEP_ATTENDED, 400, 300, true);
  renderHorizontalBarChat(d3.select('#mother-tongue'), MOTHER_TONGUE, 400, 300, true);
  renderPieChart(d3.select('#programming'), PROGRAMMING, options.width * 0.75, options.width * 0.75);
  renderHistogram(d3.select('#admission-average'),
    ADMISSION_AVERAGE,
    options.width,
    200,
    {
      binCount: 7,
      yAxisTitle: 'Number of Students',
      xAxisTitle: 'High School Admission Average',
    }
  );
  renderHorizontalBarChat(d3.select('#num-languages'), NUM_LANGUAGE, options.width, 280, false);
  renderHorizontalBarChat(d3.select('#known-languages'), LANGUAGE_KNOWN, options.width, 280, true);
  renderHorizontalBarChat(d3.select('#emigrated'), EMIGRATED_COUNTRY, options.width, 280, true);
  renderGroupedBarChart(d3.select('#siblings-parents'), SIBLINGS_PARENTS, options.width, 250, siblings_parents_legend,
  {
    yAxisTitle: 'Number of Students',
    xAxisTitle: 'Number of Siblings'
  });
}

function renderOutcome(options) {
  renderHorizontalBarChat(d3.select('#choose-program'), CHOOSE_PROGRAM, options.width, 280, true);
  renderBoxPlot(d3.select('#gender-rating'), GENDER_RATING, options.width, 280, {
    xAxisTitle: 'Gender',
    yAxisTitle: 'Rating',
    tickFormat: (d) => { return (d * 20) + '%'; }
  });
}

function renderFinances(options) {
  renderHorizontalBarChat(d3.select('#budgeting'), BUDGET, options.width, 250, false);
  renderHorizontalBarChat(d3.select('#investing'), INVEST, options.width, 250, false);
  renderPieChart(d3.select('#resp'), RESP, options.width * 0.75, options.width * 0.75);
  renderPieChart(d3.select('#loans'), LOANS, options.width * 0.75, options.width * 0.75);
  renderHorizontalBarChat(d3.select('#expenses'), SCHOOL_EXPENSES, options.width, 250, false);
  renderHorizontalBarChat(d3.select('#new-debt'), NEW_DEBT, options.width, 250, false);
}

function renderHealth(options) {
  renderHorizontalBarChat(d3.select('#sickness'), SICK, options.width, 250, false);
  renderPieChart(d3.select('#health-insurance'), OHIP, options.width * 0.75, options.width * 0.75);
  renderPieChart(d3.select('#mental-health-count'), MENTAL_HEALTH, options.width * 0.75, options.width * 0.75);
  renderHorizontalBarChat(d3.select('#mental-health-issues'), MENTAL_HEALTH_ISSUES, options.width, 250, false);
  renderHorizontalBarChat(d3.select('#exercise-frequency'), EXERCISE_FREQ, options.width, 250, false);
  drawWordCloud(d3.select('#exercise-type'), EXERCISE_WORDS, options);
  renderHorizontalBarChat(d3.select('#intramurals'), INTRAMURALS, options.width, 250, false);
  renderHorizontalBarChat(d3.select('#weight'), WEIGHT, options.width, 250, false);
  drawWordCloud(d3.select('#controlled-substances'), RECREATIONAL_SUBSTANCES, options);
  renderPieChart(d3.select('#imposter-syndrome'), IMPOSTER_SYNDROME, options.width * 0.60, options.width * 0.60);
  renderPieChart(d3.select('#imposter-syndrome-now'), IMPOSTER_SYNDROME_NOW, options.width * 0.60, options.width * 0.60);
}

function renderMisc(options) {
  renderHorizontalBarChat(d3.select('#burnout'), BURNOUT, options.width, 250, false);
  renderPieChart(d3.select('#fights'), FIGHTS, options.width * 0.75, options.width * 0.75);
  renderHorizontalBarChat(d3.select('#reddit'), REDDIT_USAGE, options.width, 150, false);
  renderPieChart(d3.select('#cat-or-dog'), CAT_OR_DOG, options.width * 0.75, options.width * 0.75);
  renderHorizontalBarChat(d3.select('#crying'), CRYING, options.width, 250, false);
  renderPieChart(d3.select('#transfer-thoughts'), TRANSFER_THOUGHTS, options.width * 0.75, options.width * 0.75);
  renderPieChart(d3.select('#dropout-thoughts'), DROPOUT_THOUGHTS, options.width * 0.75, options.width * 0.75);
  renderPieChart(d3.select('#se21-grad'), SE21_GRAD, options.width * 0.75, options.width * 0.75);
}

function renderFuture(options) {
  drawWordCloud(d3.select('#ft-company'), FULL_TIME_COMPANY, options);

  renderPieChart(d3.select('#coop-conversion'), COOP_CONVERSION, options.width * 0.75, options.width * 0.75);
  renderPieChart(d3.select('#cont-fydp'), CONT_FYDP, options.width * 0.75, options.width * 0.75);
  renderPieChart(d3.select('#peng'), PENG, options.width * 0.75, options.width * 0.75);
  renderPieChart(d3.select('#post-return-home'), POST_RETURN_HOME, options.width * 0.75, options.width * 0.75);

  renderHorizontalBarChat(d3.select('#post-grad'), POST_GRAD, options.width, 150, true);
  renderHorizontalBarChat(d3.select('#post-location'), POST_LOCATION, options.width, 180, true);
  renderHorizontalBarChat(d3.select('#motivation'), MOTIVATIONS, options.width, 180, true);
  renderHorizontalBarChat(d3.select('#post-contentness'), POST_CONTENTNESS, options.width, 180, false);

  renderHistogram(d3.select('#ft-total'),
    FULL_TIME_COMPENSATION.TOTAL,
    options.width,
    200,
    {
      binCount: 8,
      yAxisTitle: 'Count',
      xAxisTitle: 'CAD (thousands)'
    }
  );
  renderHistogram(d3.select('#ft-hourly'),
    FULL_TIME_COMPENSATION.HOURLY,
    options.width,
    200,
    {
      binCount: 5,
      yAxisTitle: 'Count',
      xAxisTitle: 'CAD'
    }
  );
  renderHistogram(d3.select('#ft-stock'),
    FULL_TIME_COMPENSATION.STOCK,
    options.width,
    200,
    {
      binCount: 6,
      yAxisTitle: 'Count',
      xAxisTitle: 'CAD (thousands)'
    }
  );
  renderHistogram(d3.select('#ft-signing'),
    FULL_TIME_COMPENSATION.SIGNING,
    options.width,
    200,
    {
      binCount: 6,
      yAxisTitle: 'Count',
      xAxisTitle: 'CAD (thousands)'
    }
  );
}

function renderTransfers(options) {
  renderPieChart(d3.select('#students-transferred'), TRANSFERRED, options.width * 0.75, options.width * 0.75, false);
  renderHorizontalBarChat(d3.select('#term-transferred'), TERM_TRANSFERRED, options.width * 0.75, 250, false);
  renderPieChart(d3.select('#reasons-transferred'), REASONS_TRANSFERRED, options.width * 0.75, options.width * 0.75);
  renderHorizontalBarChat(d3.select('#disliked-courses-transferred'), DISLIKED_COURSES_TRANSFERRED, options.width * 0.75, 250);
  renderPieChart(d3.select('#regret-transferred'), REGRET_TRANSFFERED, options.width * 0.75, options.width * 0.75);
}

function renderRelationships(options) {
  // family section
  renderHistogram(d3.select('#fam-digital'),
    FAMILY.DIGITAL,
    options.width,
    200,
    {
      binCount: 7,
      yAxisTitle: 'Count',
      xAxisTitle: 'Hours'
    }
  );

  renderHistogram(d3.select('#fam-physical'),
    FAMILY.PHYSICAL_DAYS,
    options.width,
    200,
    {
      binCount: 10,
      yAxisTitle: 'Count',
      xAxisTitle: 'Days'
    }
  );

  renderBinnedDotLine(d3.select('#fam-distance'),
    FAMILY.DISTANCE,
    options.fullWidth,
    400,
    {
      domain: [0, 13], // ignoring the last few values that skew the graph
      binCount: 12,
      fillColour: '#18bbc9',
    }
  );

  // friends section
  renderGroupedBarChart(d3.select('#friends-gain-term'), FRIENDSHIPS.CUMULATIVE, options.fullWidth, 500, friends_groups,
  {});

  // romance section
  renderHistogram(
    d3.select('#romance-degree'), ROMANCE.DEGREE_NON_SINGLE,
    options.fullWidth, 300,
    {
      binCount: 10,
      yAxisTitle: 'Count',
      xAxisTitle: 'Percentage (%) of degree (56 months)',
    }
  );

  renderHorizontalBarChat(d3.select('#romance-relationship-count'),
    ROMANCE.RELATIONSHIP_COUNT,
    options.width,
    250,
    false
  );
  renderPieChart(d3.select('#romance-secest'), ROMANCE.SECEST, options.width * 0.75, options.width * 0.75);
  
  renderBoxPlot(d3.select('#romance-sex'), ROMANCE.SEXUAL_PARTNERS, options.width, 280, {
    yAxisTitle: 'Number of sexual partners',
    xAxisTitle: 'Sexual activity',
  });
  
  renderPieChart(d3.select('#romance-cheating'), ROMANCE.CHEATING, options.width * 0.75, options.width * 0.75);
  renderHorizontalBarChat(d3.select('#romance-cheating-reasons'),
    ROMANCE.CHEATING_REASONS,
    options.width,
    250,
    false
  );
}

function renderExchange(options) {
  renderPieChart(d3.select('#exchange-participation'), EXCHANGE.PARTICIPATION, options.width * 0.75, options.width * 0.75);
  renderHorizontalBarChat(d3.select('#exchange-no-reasons'),
    EXCHANGE.NO_REASON,
    options.fullWidth,
    300,
    true
  );

  // exchange map handlers
  function onMouseOver(data) {
    if (data.properties.schools) {
      d3.select(this)
        .attr('fill', () => '#ffe2b5');
    }
  }
  function onMouseOut(data) {
    if (data.properties.schools) {
      d3.select(this)
        .attr('fill', '#ffb84d');
    } else {
      d3.select(this)
      .attr('fill', '#c3d6d2');
    }
  }
  function onClick(data) {
    const props = data.properties;
    let exchangeStr = `<h5>${props.name}</h5>`;
    if (props.schools) {
      props.schools.forEach((school) => {
        exchangeStr += `<div class="hvb"/> - ${school.uni_name} (${school.uni_abbrev}): ${school.count}`;
      });
    } else {
      exchangeStr += `<div class="hvb"/> No respondents went on exchange in this country.`
    }
    d3.select("#exchange-map-text").html(exchangeStr);
  }

  renderGeographicMap(
    d3.select('#exchange-countries-map'), EXCHANGE_GEO_DATA,
    options.fullWidth, options.fullWidth * 0.45,
    {
      zoomThreshold: [0.5, 20],
      scale: 250,
      fillColourFunction: (data) => {
        if (data.properties.schools) {
          return '#ffb84d';
        }
        return '#c3d6d2';
      },
      onMouseOver,
      onMouseOut,
      onClick,
    });
}
