import { students } from "./data.js";
import withStatus from "./report.js";

const std = withStatus(students);

for (let i = 0; i < std.length; i++) {
  console.log(`${std[i].name}: ${std[i].status}`);
}
