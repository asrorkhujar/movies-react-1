function findGenres(movies, titleRegex, genresValue, maxYear, minYear, imdbRating) {
  return movies.filter(movie => {
    const meetsCriteria = movie.title.match(titleRegex) && (genresValue === 'All' || movie.categories.includes(genresValue)) && (minYear === '' || movie.year >= Number(minYear)) && (maxYear === '' || movie.year <= Number(maxYear)) && (movie.imdbRating >= +imdbRating);
    return meetsCriteria;
  });
}

export default findGenres;