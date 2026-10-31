import { readFileSync } from "node:fs";

export const loadData = () => {
  const text = readFileSync("movies.json", "utf-8");
  return JSON.parse(text);
};
