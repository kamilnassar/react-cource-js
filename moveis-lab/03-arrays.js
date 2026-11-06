import { loadData } from "./load.js";
import * as service from "./movies-service.js";

const { movies } = loadData();

console.log(service.getTitles(movies));

const available = service.getAvailable(movies);
console.log(service.getTitles(available));

console.log(service.getById(movies, 4).title);
console.log(service.getById(movies, 99));

console.log(service.getTitles(service.getByGenre(movies, "Drama")));

console.log(service.getTitles(service.searchByTitle(movies, "the")));

console.log(service.hasMoviesBefore(movies, 1990), service.hasMoviesBefore(movies, 2000));
console.log(service.allHaveDirector(movies));

const interstellar = service.getById(movies, 3);
console.log(service.getCastNames(interstellar));