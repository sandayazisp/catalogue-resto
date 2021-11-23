class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="header_inner">
      <h1 class="header_title">
          StreetFood
      </h1>
      <a href="#" id="hamburger" aria-label="navigation-menu">☰</a>
      <nav id="drawer" class="nav">
          <ul class="nav_list">
              <a href="javascript:void(0)" class="closebtn">&times;</a>
              <li class="nav_item"><a href="#/home">Home</a></li>
              <li class="nav_item"><a href="#/favorite">Favorite</a></li>
              <li class="nav_item"><a href="https://github.com/sandayazisp" target="_blank" rel="noopener"</a>About Us</li>
          </ul>
      </nav>
  </div>
      `;
  }
}

customElements.define('app-bar', AppBar);
