/*
  Only students who have attended enough classes are eligible to sit an exam.

  Create a function which:
  - Accepts an array which contains all the students' names and their attendance counts
    (see tests to confirm how this data will be structured)
  - Returns an array containing onl the names of the who have attended AT LEAST 8 classes
*/

function eligibleStudents(students) {
  let studentsName = students.filter(([a, b]) => b >= 8);
  let filterStudentsName = studentsName.map(x => x.slice(0, 1));
  let finalNames = [].concat(...filterStudentsName);
  console.log(finalNames);
  return finalNames;
}

/* ======= TESTS - DO NOT MODIFY ===== */

const attendances = [
  ["Ahmed", 8],
  ["Clement", 10],
  ["Elamin", 6],
  ["Adam", 7],
  ["Tayoa", 11],
  ["Nina", 10]
];

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}

function test(test_name, expr) {
  let status;
  if (expr) {
    status = "PASSED";
  } else {
    status = "FAILED";
  }

  console.log(`${test_name}: ${status}`);
}

test(
  "eligibleStudents function works",
  arraysEqual(eligibleStudents(attendances), [
    "Ahmed",
    "Clement",
    "Tayoa",
    "Nina"
  ])
);
