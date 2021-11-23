class ContentTemplate extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="hero">
            <div class="hero_inner">
                <div class="hero_title">
                    <h1>Welcome to StreetFood</h1>
                </div>
                <div class="hero_tagline">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero porro enim adipisci vel praesentium nesciunt tenetur, blanditiis debitis, ratione, illo ex dolore pariatur similique a temporibus quaerat. Sint, quidem maiores.</p>
                </div>
            </div>
        </div>
          `;
  }
}

customElements.define('content-template', ContentTemplate);
