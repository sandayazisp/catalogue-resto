class ContentRestaurat extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <section class="content">
            <div class="latest">
                <h1 class="latest_label">Recomended Restaurant</h1>
                <div class="post"></div>
            </div>
        </section>
          `;
  }
}

customElements.define('content-restaurant', ContentRestaurat);
