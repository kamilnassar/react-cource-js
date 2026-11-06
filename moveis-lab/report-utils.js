export const getDirectorLine = movie => `Director:${movie.director}`;

export const getShortMovies = movies =>
  movies.filter(movie => {
    movie.duration < 100;
  });

export const findByTitle = (movies, title) =>
  movies.filter(movie => movie.title === title);

export const getOscarsLine = movie => `Oscars:${movie.awards.oscars}`;

export const sortByYear = movies => movies.sort((a, b) => a.year - b.year);

export const markAsWatched = (movies, id) => {
  const movie = movies.find(movie => movie.id === id);
  movie.watched = true;
  return movies;
};

export const renameActor = (movie, index, newName) => {
  const copy = { ...movie };
  copy.cast[index].name = newName;
  return copy;
};