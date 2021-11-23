/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */

import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import DrawerInitiator from '../utils/drawer-initiator';

class App {
  constructor({
    button, drawer, content, clsBtn,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._clsBtn = clsBtn;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
      clsBtn: this._clsBtn,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    try {
      this._content.innerHTML = await page.render();
      await page.afterRender();
    } catch (error) {
      console.log(error.message);
    }
  }
}

export default App;
