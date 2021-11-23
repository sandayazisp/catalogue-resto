class ContentFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <p>Copyright &copy; 2021 - StreetFood</p>
          `;
  }
}

customElements.define('content-footer', ContentFooter);
