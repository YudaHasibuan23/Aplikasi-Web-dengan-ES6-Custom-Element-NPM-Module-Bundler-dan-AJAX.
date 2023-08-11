class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  render() {
    this.innerHTML = `
    <style>
    .navbar {
      background-color: rgb(85 15 15);
      box-shadow: rgb(55, 55, 55) -9px 5px 20px -2px;
    }
    
    span{
      color: orangered;
    }
    </style>

      <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container">
          <a class="navbar-brand" href="../index.html">
            <h1 class="fs-2 fw-bold my-auto">Layar<span>Bioskop</span></h1>
          </a>
        </div>
      </nav>
    `;
  }
}

customElements.define("nav-bar", NavBar);