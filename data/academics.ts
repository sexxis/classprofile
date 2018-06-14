let GRADES = {
  "1A": [58.82, 63.18, 64.0, 64.46, 66.0, 66.8, 67.73, 68.0, 68.18, 69.0, 71.91, 72.0, 72.36, 74.0, 74.27, 74.46, 74.91, 75.0, 75.0, 76.27, 76.36, 76.73, 76.73, 77.0, 77.0, 77.0, 77.18, 78.91, 79.0, 79.2, 79.82, 79.91, 80.0, 80.0, 80.0, 80.91, 81.0, 81.0, 81.18, 81.36, 81.6, 81.91, 82.0, 82.0, 82.0, 82.46, 82.46, 84.0, 84.0, 84.0, 84.0, 84.09, 84.18, 84.36, 84.36, 84.73, 85.0, 85.64, 85.73, 86.1, 86.27, 86.91, 87.0, 87.0, 87.0, 87.0, 87.55, 87.64, 88.0, 88.5, 88.82, 89.0, 89.0, 89.46, 90.0, 90.0, 90.0, 90.0, 90.27, 90.36, 90.4, 90.55, 91.09, 91.09, 92.0, 92.55, 92.6, 92.64, 92.64, 92.73, 92.73, 93.0, 93.0, 93.0, 93.18, 93.27, 94.0, 94.18, 94.36, 94.5, 94.82, 94.82, 95.0, 95.0, 95.0, 96.0, 96.73, 97.8, 97.9, 98.0, 98.36],
  "1B": [49.5, 50.4, 60.0, 63.0, 65.8, 66.0, 66.0, 67.0, 67.0, 67.0, 67.0, 67.4, 68.0, 68.0, 68.4, 69.0, 69.6, 70.0, 70.0, 70.4, 70.8, 70.8, 72.6, 74.0, 74.0, 74.2, 74.2, 74.6, 75.0, 75.4, 75.6, 75.8, 76.0, 76.0, 77.0, 77.0, 77.0, 77.6, 78.0, 78.0, 78.0, 78.0, 78.8, 79.0, 79.0, 80.0, 80.0, 80.0, 80.2, 80.4, 81.0, 81.0, 81.2, 81.6, 81.8, 81.8, 81.8, 82.6, 83.0, 83.0, 83.2, 83.4, 83.6, 83.8, 84.0, 84.2, 84.4, 84.8, 85.0, 85.0, 85.0, 85.4, 85.5, 86.0, 86.0, 86.8, 87.0, 87.2, 87.2, 88.0, 88.0, 88.0, 88.2, 88.2, 88.2, 88.6, 88.6, 89.0, 89.2, 89.4, 89.6, 90.0, 90.0, 90.4, 90.8, 91.0, 91.0, 91.2, 91.4, 91.8, 92.0, 93.0, 93.2, 93.6, 94.0, 94.0, 95.0, 95.0, 95.6, 97.0],
  "2A": [55.67, 61.0, 64.0, 64.0, 64.5, 66.17, 67.67, 70.0, 70.0, 70.0, 70.67, 71.0, 71.0, 71.0, 71.67, 72.0, 72.0, 73.17, 73.33, 74.17, 74.6, 75.0, 75.0, 75.0, 75.0, 75.0, 75.17, 75.17, 75.5, 75.83, 76.33, 76.33, 77.0, 77.0, 77.0, 77.5, 77.67, 78.0, 78.5, 78.67, 79.0, 79.8, 80.0, 80.0, 80.0, 80.0, 80.0, 80.0, 80.17, 81.0, 81.0, 81.0, 81.5, 81.8, 81.83, 82.83, 82.83, 83.0, 83.0, 83.0, 83.0, 83.5, 84.0, 84.17, 84.67, 84.83, 85.0, 85.0, 85.0, 85.0, 85.5, 85.67, 86.0, 86.17, 86.3, 86.33, 86.33, 87.0, 87.0, 87.17, 87.17, 87.33, 88.0, 88.0, 88.5, 88.67, 88.83, 88.83, 88.83, 89.33, 89.57, 89.67, 90.0, 90.0, 90.0, 90.0, 90.0, 90.17, 90.5, 91.0, 91.17, 91.33, 92.17, 92.2, 92.5, 92.67, 93.67, 94.0, 94.0, 95.0, 96.2],
  "2B": [59.5, 60.0, 62.83, 63.5, 64.0, 64.83, 64.83, 65.0, 65.17, 66.0, 67.83, 68.0, 68.33, 70.0, 71.0, 71.5, 72.0, 73.0, 73.0, 73.0, 73.17, 73.5, 73.67, 73.67, 74.0, 74.0, 74.0, 74.33, 74.8, 75.0, 75.0, 75.83, 76.0, 76.2, 76.33, 76.33, 76.5, 76.8, 77.0, 77.17, 77.83, 78.0, 78.0, 78.0, 78.0, 78.0, 78.0, 78.67, 78.83, 79.2, 79.33, 80.0, 80.0, 80.0, 80.0, 80.0, 80.0, 80.33, 80.33, 80.67, 81.17, 81.5, 81.67, 81.83, 82.0, 82.0, 82.17, 82.5, 82.83, 83.0, 83.0, 83.0, 83.16, 83.33, 83.8, 84.0, 84.0, 84.0, 84.33, 85.0, 85.33, 86.0, 86.0, 86.0, 86.0, 86.3, 86.33, 86.33, 86.5, 86.67, 87.33, 87.33, 87.5, 88.0, 88.0, 88.0, 88.0, 88.33, 88.67, 89.5, 89.67, 89.83, 90.0, 90.0, 90.33, 90.67, 90.83, 91.0, 92.0, 93.0, 95.7],
  "3A": [62.0, 63.8, 65.6, 66.2, 69.0, 70.0, 72.0, 72.4, 73.0, 74.0, 74.33, 74.6, 75.0, 75.0, 75.8, 75.8, 76.0, 76.0, 76.4, 76.4, 77.0, 77.0, 78.0, 78.0, 79.0, 79.6, 80.0, 80.0, 80.0, 80.0, 80.0, 80.4, 80.8, 80.8, 81.0, 81.0, 81.2, 81.28, 81.4, 81.6, 81.6, 81.8, 82.0, 82.0, 82.2, 82.4, 82.8, 83.0, 83.0, 83.0, 83.2, 84.0, 84.0, 84.0, 84.0, 84.2, 84.2, 84.4, 84.4, 85.2, 85.4, 85.4, 85.8, 86.0, 86.0, 86.0, 86.8, 87.0, 87.0, 87.0, 87.6, 87.6, 87.6, 88.2, 88.4, 88.4, 88.6, 89.0, 89.0, 89.2, 89.4, 89.6, 90.0, 90.0, 90.0, 90.0, 90.0, 90.0, 90.0, 90.0, 90.2, 90.6, 91.0, 91.0, 91.0, 91.4, 91.8, 92.4, 92.8, 93.0, 93.2, 94.0, 94.4, 95.2, 95.4, 95.6],
  "3B": [57.33, 64.0, 66.8, 67.0, 67.8, 68.0, 68.0, 69.0, 69.67, 69.67, 69.83, 70.0, 70.33, 71.0, 71.0, 72.0, 72.67, 73.0, 73.0, 74.0, 74.5, 74.83, 75.0, 75.0, 75.0, 75.0, 75.33, 75.5, 75.67, 75.67, 76.0, 76.0, 76.5, 76.5, 76.5, 77.0, 77.0, 77.83, 78.0, 78.0, 78.0, 78.17, 78.33, 78.33, 79.0, 79.0, 79.0, 79.57, 79.83, 80.0, 80.0, 80.0, 80.0, 80.1, 80.67, 80.83, 81.0, 81.0, 81.5, 81.5, 81.67, 81.83, 82.0, 82.0, 82.0, 82.0, 82.33, 82.5, 82.67, 82.83, 83.0, 83.0, 83.0, 83.67, 83.83, 84.0, 84.0, 84.5, 84.5, 84.5, 85.0, 85.0, 85.33, 86.0, 86.1, 87.0, 87.5, 87.5, 87.8, 88.0, 88.0, 88.0, 88.33, 88.33, 88.67, 88.67, 88.83, 89.0, 89.29, 90.0, 90.17, 90.57, 91.0, 91.0, 92.0, 93.0],
  "4A": [63.4, 67.0, 70.4, 70.74, 72.0, 73.0, 73.6, 74.0, 74.2, 75.0, 75.0, 75.0, 75.5, 76.0, 76.67, 77.0, 78.0, 78.0, 78.0, 79.17, 79.2, 79.57, 79.6, 80.0, 80.0, 80.0, 80.0, 80.0, 80.0, 80.8, 81.0, 81.0, 81.2, 81.8, 82.0, 82.0, 82.0, 82.0, 82.0, 82.0, 82.2, 82.4, 82.4, 82.6, 83.0, 83.0, 83.0, 83.0, 83.0, 83.0, 83.2, 83.2, 83.25, 84.0, 84.2, 84.2, 84.5, 85.0, 85.0, 85.0, 85.0, 85.0, 85.2, 85.2, 85.33, 85.4, 85.4, 85.4, 85.6, 85.67, 86.0, 86.0, 86.0, 86.0, 86.0, 86.0, 86.8, 87.0, 87.0, 87.0, 87.0, 87.0, 87.2, 87.6, 87.68, 87.8, 88.0, 88.0, 88.0, 88.17, 88.5, 88.6, 88.67, 89.0, 89.0, 89.17, 89.5, 89.8, 89.83, 90.0, 90.0, 90.2, 90.4, 90.6, 90.6, 91.0, 91.17, 91.2, 94.0, 94.6, 95.8]
};

let FAVOURITE_MANDATORY = [{
  "name": "CS 240",
  "value": 2
  }, {
  "name": "CS 241",
  "value": 12
  }, {
  "name": "CS 341",
  "value": 8
  }, {
  "name": "CS 343",
  "value": 20
  }, {
  "name": "CS 349",
  "value": 3
  }, {
  "name": "ECE 124",
  "value": 1
  }, {
  "name": "ECE 222",
  "value": 1
  }, {
  "name": "MATH 135",
  "value": 1
  }, {
  "name": "MATH 239",
  "value": 3
  }, {
  "name": "SE 101",
  "value": 1
  }, {
  "name": "SE 212",
  "value": 1
  }, {
  "name": "SE 350",
  "value": 9
  }, {
  "name": "SE 380",
  "value": 2
}]

let FAVOURITE_ELECTIVE = [{
  "name": "CO 342",
  "value": 1
  }, {
  "name": "CS 449",
  "value": 5
  }, {
  "name": "CS 452",
  "value": 3
  }, {
  "name": "CS 458",
  "value": 1
  }, {
  "name": "CS 466",
  "value": 1
  }, {
  "name": "CS 475",
  "value": 1
  }, {
  "name": "CS 486",
  "value": 3
  }, {
  "name": "CS 488",
  "value": 10
  }, {
  "name": "CS 489",
  "value": 1
  }, {
  "name": "ECE 429",
  "value": 1
  }, {
  "name": "ECE 454",
  "value": 7
  }]

let DISLIKED_MANDATORY = [{
  "name": "CHE 102",
  "value": 3
}, {
  "name": "CS 240",
  "value": 1
}, {
  "name": "CS 247",
  "value": 1
}, {
  "name": "CS 341",
  "value": 1
}, {
  "name": "ECE 105",
  "value": 4
}, {
  "name": "ECE 106",
  "value": 5
}, {
  "name": "ECE 124",
  "value": 1
}, {
  "name": "MATH 213",
  "value": 4
}, {
  "name": "SE 212",
  "value": 10
}, {
  "name": "SE 350",
  "value": 3
}, {
  "name": "SE 380",
  "value": 34
}, {
  "name": "SE 463",
  "value": 34
}, {
  "name": "SE 464",
  "value": 1
}, {
  "name": "STAT 231",
  "value": 2
}]

let ATTENDANCE = [{
  "x": "1A",
  "value": [3.76],
}, {
  "x": "1B",
  "value": [3.27],
}, {
  "x": "2A",
  "value": [3.1],
}, {
  "x": "2B",
  "value": [2.98],
}, {
  "x": "3A",
  "value": [2.81],
}, {
  "x": "3B",
  "value": [2.46],
}, {
  "x": "4A",
  "value": [2.5],
}];

let PARENT_GRADES = {
  "College, post-secondary, high school": [64.33333333333333, 65.26666666666667, 72.66666666666667, 73.33333333333333, 73.95, 74.0, 76.0, 76.0, 81.0, 81.26666666666667, 82.0, 83.63333333333334, 84.66666666666667, 85.46666666666665, 87.21, 88.0, 88.58333333333333, 89.27666666666666],
  "Bachelors": [72.66666666666667, 73.66666666666667, 74.0, 75.02333333333333, 75.89999999999999, 76.12333333333333, 77.02333333333333, 77.04333333333334, 77.66666666666667, 77.66666666666667, 78.81, 79.33333333333333, 79.33333333333333, 79.66666666666667, 79.77666666666666, 80.0, 80.0, 80.16499999999999, 80.55, 80.64666666666666, 80.75666666666666, 81.93333333333334, 82.33333333333333, 82.66666666666667, 83.14333333333333, 83.58999999999999, 84.16666666666667, 84.23333333333333, 84.69999999999999, 84.81, 84.99000000000001, 85.33333333333333, 85.55666666666666, 85.66666666666667, 86.0, 86.61, 87.22333333333334, 87.31, 87.93333333333334, 88.0, 90.66666666666667, 90.7, 91.35666666666667, 92.0, 93.11, 93.38999999999999],
  "Masters, Doctorate": [63.95666666666667, 73.13333333333333, 74.0, 74.78000000000002, 75.27666666666667, 75.3, 76.66666666666667, 77.5, 77.77666666666666, 78.66666666666667, 78.66666666666667, 79.07666666666667, 80.0, 80.16666666666667, 80.2, 80.33333333333333, 80.82333333333334, 81.66666666666667, 81.71666666666665, 81.83333333333333, 82.92333333333333, 83.66666666666667, 84.0, 84.27666666666666, 84.66666666666667, 84.76666666666667, 84.87666666666667, 85.0, 85.0, 85.56666666666666, 85.66666666666667, 85.71, 85.89999999999999, 87.0, 88.5, 88.56666666666666, 88.63333333333333, 88.79, 89.0, 89.0, 89.085, 89.5, 89.71, 89.76666666666667, 90.38666666666667, 91.2, 93.06666666666666]
};

let ATTENDANCE_GRADE = [
{'y': 0, 'x': 0, 'size': 30} ,
{'y': 1, 'x': 0, 'size': 13} ,
{'y': 2, 'x': 0, 'size': 3} ,
{'y': -1, 'x': 0, 'size': 17} ,
{'y': -3, 'x': 0, 'size': 4} ,
{'y': -2, 'x': 0, 'size': 6} ,
{'y': 0, 'x': 1, 'size': 37} ,
{'y': 1, 'x': 1, 'size': 27} ,
{'y': 2, 'x': 1, 'size': 13} ,
{'y': 3, 'x': 1, 'size': 2} ,
{'y': -1, 'x': 1, 'size': 29} ,
{'y': -4, 'x': 1, 'size': 5} ,
{'y': -3, 'x': 1, 'size': 5} ,
{'y': -2, 'x': 1, 'size': 17} ,
{'y': 0, 'x': 2, 'size': 79} ,
{'y': 1, 'x': 2, 'size': 61} ,
{'y': 2, 'x': 2, 'size': 18} ,
{'y': 3, 'x': 2, 'size': 1} ,
{'y': -2, 'x': 2, 'size': 37} ,
{'y': -5, 'x': 2, 'size': 1} ,
{'y': -4, 'x': 2, 'size': 8} ,
{'y': -3, 'x': 2, 'size': 18} ,
{'y': -1, 'x': 2, 'size': 59} ,
{'y': 0, 'x': 3, 'size': 80} ,
{'y': 1, 'x': 3, 'size': 54} ,
{'y': 2, 'x': 3, 'size': 28} ,
{'y': -2, 'x': 3, 'size': 30} ,
{'y': -4, 'x': 3, 'size': 8} ,
{'y': -3, 'x': 3, 'size': 16} ,
{'y': -1, 'x': 3, 'size': 54}
];

export {
  FAVOURITE_MANDATORY,
  FAVOURITE_ELECTIVE,
  DISLIKED_MANDATORY,
  ATTENDANCE,
  GRADES,
  PARENT_GRADES,
  ATTENDANCE_GRADE
}
