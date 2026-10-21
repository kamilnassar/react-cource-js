import { students } from "./data.js";
import formatGrade, { average } from "./utils.js";

const grades = [];
for (const { grade } of students) {
  grades.push(grade);
}

console.log(`Average:${average(...grades)}`);
console.log(`Best:${formatGrade(Math.max(...grades))}`);