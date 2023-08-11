const image = "https://image.tmdb.org/t/p/w500";
class MovieItem extends HTMLElement {
  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    this.innerHTML = `
      <style>
        .card {
          position: relative;
          /* overflow: hidden; */
          cursor: pointer;
          border-radius: 10px;
          box-shadow: rgb(55, 55, 55) -5px 8px 20px -4px,rgb(60, 60, 60) 5px 6px 20px -4px;
          transition: all .1s ease-in-out;
        }
        
        .card:hover{
          transform: scale(1.02);
        }
        
        .card img {
          border-radius: 10px;
          width: 100%;
        }
        
        .card-body {
          display: flex;
          flex-direction: column;
          height: 7rem;
        }
        
        .card-info {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        
        .card-info span {
          background-color: rgba(0, 0, 0, 0.4);
          padding: 0.25rem 0.5rem;
        }
      </style>
      
      <div class="card text-white bg-dark">
        <img src="${image + this._movie.poster_path}" class="card-img-top" alt="${this._movie.title}">
        <div class="card-body">
          <div class="card-info">
            <h5 class="card-title my-auto">${this._movie.title}</h5>
            <span>
              <i class="bi bi-star-fill"></i>
              ${this._movie.vote_average}
            </span> 
          </div>
            <p class="my-auto">${this._movie.release_date}</p>
        </div>
      </div>
    `;
  }
}

customElements.define("movie-item", MovieItem);