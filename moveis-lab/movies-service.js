export const getTitles = (movies) => movies.map((movie) => movie.title);

export const getAvailable = movies => movies.filter(movie => movie.available);

export const getById = (movies, id) => movies.find(movie => movie.id === id);

export const getByGenre = (movies, genre) =>
  movies.filter(movie => movie.genres.includes(genre));

export const searchByTitle = (movies, text) =>
  movies.filter(movie => movie.title.toLowerCase().includes(text.toLowerCase()));

export const hasMoviesBefore = (movies, year) => movies.some(movie => movie.year < year);

export const allHaveDirector = movies => movies.every(movie => movie.director?.name);

export const getCastNames = movie => movie.cast.map(actor => actor.name);

export const getDirectorTitles = (movies, directorName) =>
  movies
    .filter(movie => movie.director.name === directorName)
    .map(movie => movie.title);

    export const getTopRated = (movies, count) =>
  [...movies].sort((a, b) => b.rating - a.rating).slice(0, count);