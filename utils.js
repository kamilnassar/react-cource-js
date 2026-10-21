export const average = (...numbers) => {
  let sum = 0;
  for (const n of numbers) {
    sum += n;
  }
  return sum / numbers.length;
};

const formatGrade = (grade) => `${grade} / 100`;
export default formatGrade;
