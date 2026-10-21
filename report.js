const student = [];

export default function withStatus(students) {
  for (let i = 0; i < students.length; ++i) {
    if (students[i].grade >= 56)
      student[i] = { ...students[i], status: "pass" };
    else student[i] = { ...students[i], status: "fail" };
  }
  return student;
}
