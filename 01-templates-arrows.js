import { students } from "./data.js";

const describe = (student) =>
  `${student.name} (${student.city}):${student.grade}`;

for (const student of students) {
  console.log(describe(student));
}
