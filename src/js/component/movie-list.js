import "./movie-item.js";

class MovieList extends HTMLElement {
  set movies(movies) {
    this._movies = movies;
    this.render();
  }

  renderError(message) {
    this.innerHTML = `<h2>${message}</h2>
    `;
  }

  render() {
    this.innerHTML = `
    <style>
      .trend{
        margin-bottom: 40px;
      }
    </style>
    <h2 class="trend">Top movies</h2>`;
    this._movies.forEach(movie => {
      const movieItemElement = document.createElement("movie-item");
      movieItemElement.classList.add("col-lg-3");
      movieItemElement.classList.add("mb-5");
      movieItemElement.movie = movie;
      this.appendChild(movieItemElement);
    })
  }
}

customElements.define("movie-list", MovieList);