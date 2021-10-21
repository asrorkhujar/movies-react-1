import { useState } from "react";
import Input from "../input/input";
import Select from "../select/select";
import sortMovies from "./sortMovies";
import allMovies from "../../normalized-movies";
import findGenres from "./findGenres";

function Filter({setMovies}) {
  const [selectValue, setSelectValue] = useState();
  const [inputValue, setInputValue] = useState("");
  const [ratingValue, setRatingValue] = useState("");
  const [genresValue, setGenresValue] = useState("All");
  const [minYear, setMinYearValue] = useState("");
  const [maxYear, setMaxYearValue] = useState("");

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    const titleRegExp = new RegExp(inputValue, "gi");
    let filteredMovies = findGenres(allMovies, titleRegExp, genresValue, minYear, maxYear,ratingValue);
    sortMovies(filteredMovies, selectValue);
    setMovies(filteredMovies);
  }

  const handleSortChange = (evt) => {
    setSelectValue(evt.target.value);
  }

  const handleSearchChange = (evt) => {
    setInputValue(evt.target.value);
  };
  const handleRatingChange = (evt) => {
    setRatingValue(evt.target.value);
  };

  const handleGenresChange = (evt) => {
    setGenresValue(evt.target.value);
  }
  const handleMinYearChange = (evt) => {
    setMinYearValue(evt.target.value);
  }
  const handleMaxYearChange = (evt) => {
    setMaxYearValue(evt.target.value);
  }

  return (
    <section className="mb-4">
      <h2 className="sr-only">Movie search form</h2>
      <form onSubmit={handleFormSubmit} className="js-search-form" action="https://echo.htmlacademy.ru" method="GET" autoComplete="off">
        <div className="form-group">
          <Input onChange={handleSearchChange} placeholder="Search" name="search" type="search" />
          <p>{inputValue.length < 10 ? "Hammasi yaxshi" : "Chota ni to!"}</p>
          {/* <input className="form-control js-search-form__title-input" type="search" name="title" placeholder="Avengers" aria-label="Title" /> */}
        </div>
        <div className="form-group">
          <Input onChange={handleRatingChange} type="number" step="any" name="min_rating" placeholder="Movies rating" aria-label="Minimum rating" min="0" />
          {/* <input className="form-control js-search-form__rating-input" type="number" step="any" name="min_rating" placeholder="7.5" defaultValue={5} aria-label="Minimum rating" /> */}
        </div>
        <div className="form-group">
          {/* <select className="form-control js-search-form__genre-select" defaultValue="All" name="genre" aria-label="Genre">
            <option value="All">All</option>
          </select> */}
          <Select onChange={handleGenresChange} name="genre" aria-label="Select genre" defaultValue="All">
            <option value="All">All</option>
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
            <option value="Animation">Animation</option>
            <option value="Biography">Biography</option>
            <option value="Comedy">Comedy</option>
            <option value="Crime">Crime</option>
            <option value="Documentary">Documentary</option>
            <option value="Drama">Drama</option>
            <option value="Family">Family</option>
            <option value="Fantasy">Fantasy</option>
            <option value="History">History</option>
            <option value="Horror">Horror</option>
            <option value="Music">Music</option>
            <option value="Musical">Musical</option>
            <option value="Mystery">Mystery</option>
            <option value="News">News</option>
            <option value="Reality-TV">Reality-TV</option>
            <option value="Romance">Romance</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Sport">Sport</option>
            <option value="Thriller">Thriller</option>
            <option value="Uncategorized">Uncategorized</option>
            <option value="War">War</option>
            <option value="Western">Western</option>
          </Select>
        </div>
        <div className="form-group">
          <select onChange={handleSortChange} className="form-control js-search-form__sort-select" name="sort" aria-label="Sorting">
            <option value="rating_desc">Rating (high to low)</option>
            <option value="rating_asc">Rating (low to high)</option>
            <option value="az">A-Z</option>
            <option value="za">Z-A</option>
            <option value="year_desc">Year (new to old)</option>
            <option value="year_asc">Year (old to new)</option>
          </select>
        </div>
        <button className="btn btn-primary btn-block" type="submit">Search</button>
      </form>
    </section>
  );
}

export default Filter;