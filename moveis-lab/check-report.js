import { loadData } from "./load.js";
import {
  getDirectorLine,
  getShortMovies,
  findByTitle,
  getOscarsLine,
  sortByYear,
  markAsWatched,
  renameActor,
} from "./report-utils.js";

const { movies } = loadData();

console.log("1:", getDirectorLine(movies[3]));

console.log("2:", getShortMovies(movies).map(movie => movie.title));

console.log("3:", findByTitle(movies, "Parasite").year);

console.log("4:", getOscarsLine(movies[4]));

const sorted = sortByYear(movies);
console.log("5:", sorted[0].title, "|", movies[0].title);

const watched = markAsWatched(movies, 1);
const inception = movies.find(movie => movie.id === 1);
console.log("6:", watched === movies, inception.watched);

const lionKing = movies.find(movie => movie.id === 2);
const renamed = renameActor(lionKing, 0, "Jonathan Taylor Thomas");
console.log("7:", renamed.cast[0].name, "|", lionKing.cast[0].name);