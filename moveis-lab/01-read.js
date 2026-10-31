import { readFileSync } from "node:fs";

const text = readFileSync("movies.json", "utf-8");

console.log(typeof text);
console.log(text.slice(0, 40));

const data = JSON.parse(text);

console.log(typeof data);
console.log(data.site);
console.log(data.movies.length);