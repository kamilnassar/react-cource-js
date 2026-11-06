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

    export const addMovie = (movies, movie) => [...movies, movie];

    export const removeMovie = (movies, id) => movies.filter(movie => movie.id !== id);

    export const updateRating = (movies, id, rating) =>
  movies.map(movie => (movie.id === id ? { ...movie, rating } : movie));

    export const toggleAvailable = (movies, id) =>
  movies.map(movie =>
    movie.id === id ? { ...movie, available: !movie.available } : movie
  );

  export const updateDirectorCountry = (movies, id, country) =>
  movies.map(movie =>
    movie.id === id
      ? { ...movie, director: { ...movie.director, country } }
      : movie
  );

  export const addReview = (movies, id, review) =>
  movies.map(movie =>
    movie.id === id
      ? { ...movie, reviews: [...movie.reviews, review] }
      : movie
  );