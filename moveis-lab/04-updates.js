import { writeFileSync } from "node:fs";
import { loadData } from "./load.js";
import * as service from "./movies-service.js";

const data = loadData();
const { movies } = data;

const coco = {
  id: 7,
  title: "Coco",
  year: 2017,
  genres: ["Animation", "Family"],
  rating: 8.4,
  duration: 105,
  available: true,
  director: { name: "Lee Unkrich", country: "USA" },
  cast: [{ name: "Anthony Gonzalez", role: "Miguel" }],
  reviews: [],
};

const withCoco = service.addMovie(movies, coco);
console.log(movies.length, withCoco.length);

const withoutInception = service.removeMovie(movies, 1);
console.log(service.getTitles(withoutInception));
console.log(movies.length);

const rated = service.updateRating(movies, 5, 8.9);
console.log(service.getById(movies, 5).rating, service.getById(rated, 5).rating);
console.log(movies[0] === rated[0], movies[4] === rated[4]);

const toggled = service.toggleAvailable(movies, 3);
console.log(service.getById(movies, 3).available, service.getById(toggled, 3).available);

const moved = service.updateDirectorCountry(movies, 2, "Canada");
console.log(service.getById(movies, 2).director.country, service.getById(moved, 2).director.country);

const review = { score: 9, text: "So funny", author: { username: "maya_r", country: "IL" } };
const reviewed = service.addReview(movies, 5, review);
console.log(service.getById(movies, 5).reviews.length, service.getById(reviewed, 5).reviews.length);

let result = service.addMovie(movies, coco);
result = service.updateRating(result, 7, 8.6);
result = service.addReview(result, 7, review);

const newData = { ...data, updatedAt: "2026-10-24", movies: result };
writeFileSync("movies-updated.json", JSON.stringify(newData, null, 2));
console.log("Saved", newData.movies.length, "movies");