import "../component/nav-bar.js";
import "../component/search-bar.js";
import "../component/movie-list.js";
import "../component/footer-bar.js";
import DataSource from "../data/data-source.js";

const main = () => {
  const navbarElement = document.querySelector("nav-bar");
  const searchElement = document.querySelector("search-bar");
  const movieListElement = document.querySelector("movie-list");
  const footerElement = document.querySelector("footer-bar");

  const onButtonSearchClicked = () => {
    DataSource.searchMovie(searchElement.value)
      .then(renderResult)
      .catch(displayMovie)
  }

  const displayMovie = () => {
    DataSource.getMovie()
      .then(renderResult)
      .catch(fallbackResult)
  }

  const renderResult = results => {
    movieListElement.movies = results;
  }

  const fallbackResult = message => {
    movieListElement.renderError(message);
  }

  searchElement.clickEvent = onButtonSearchClicked;
  displayMovie();
}

export default main;