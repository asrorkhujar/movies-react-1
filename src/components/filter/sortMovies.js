function sortMovies(movies, sortType) {
  if (sortType === 'az') {
    movies.sort((a, b) => {
      if (a.title > b.title) return 1;
      if (a.title < b.title) return -1;
      return 0;
    });
  } else if (sortType === 'za') {
    movies.sort((a, b) => {
      if (a.title < b.title) return 1;
      if (a.title > b.title) return -1;
      return 0;
    });
  } else if (sortType === 'rating_asc') {
    movies.sort((a, b) => a.imdbRating - b.imdbRating);
  } else if (sortType === 'rating_desc') {
    movies.sort((a, b) => b.imdbRating - a.imdbRating);
  } else if (sortType === 'year_asc') {
    movies.sort((a, b) => a.year - b.year);
  } else if (sortType === 'year_desc') {
    movies.sort((a, b) => b.year - a.year);
  }
}

export default sortMovies;