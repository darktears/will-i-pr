import { LitElement, html, css } from 'lit';
import { Workbox, messageSW} from 'workbox-window';
import '@shoelace-style/shoelace/dist/themes/dark.css';
import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/alert/alert.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/switch/switch.js';
import './setup-panel.js';
import './race-panel.js';
import './main-header.js';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
setBasePath('/docs/');

export class MainApplication extends LitElement {
  static styles = css`
    :host {
      width: 100vw;
      height: 100vh;
      color: white;
      background-color: black;
    }

    *,
    *::after,
    *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }

    .alert-sw {
      position: absolute;
      bottom: 3vh;
      right: 1vw;
      z-index: 5;
    }

    .text-sw {
      padding-bottom: 10px;
    }

    .reload {
      margin-left: 5px;
    }

    main-header {
      height: 5vh;
    }
  `;

  _swAlert;
  _wb;
  _wbRegistration = undefined;

  static get properties() {
    return { viewportWidth: { type: String}, viewportHeight: { type: String} };
  }

  firstUpdated() {
    this._swAlert = this.shadowRoot.querySelector('#sw-alert');
    // Check that service workers are supported
    if ('serviceWorker' in navigator) {
      // Use the window load event to keep the page load performant
      window.addEventListener('load', async () => {
        this._wb = new Workbox('./sw.js');
        this._wb.addEventListener('waiting', () => this._showSWAlert());
        this._wb.addEventListener('externalwaiting', () => this._showSWAlert());
        this._wbRegistration = await this._wb.register();
      });
    }

    this._selectDistancePanel = this.shadowRoot.querySelector('select-distance-panel');
    this._racePanel = this.shadowRoot.querySelector('race-panel');
  }

  constructor() {
    super();
  }

  _showSWAlert() {
    this._swAlert.show();
  }

  _reloadSW() {
    this._wb.addEventListener('controlling', () => {
      window.location.reload();
      this._wbRegistration = undefined;
    });
    // Send a message to the waiting service worker instructing
    // it to skip waiting, which will trigger the `controlling`
    // event listener above.
    if (this._wbRegistration && this._wbRegistration.waiting) {
      messageSW(this._wbRegistration.waiting, {type: 'SKIP_WAITING'})
    }
  }

  _distanceChanged(event) {
    this._racePanel.distance = event.detail.distance;
  }

  _prChanged(event) {
    this._racePanel.pr = event.detail.pr;
  }

  render() {
    return html`
      <main-header></main-header> 
      <setup-panel @distance-changed="${this._distanceChanged}" @pr-changed="${this._prChanged}"></setup-panel>
      <race-panel></race-panel>
      <div class="alert-sw">
        <sl-alert id="sw-alert" variant="primary" closable duration="10000">
          <sl-icon slot="icon" name="info-circle"></sl-icon>
          <div class="text-sw">
            <strong>A newer version of the application is available</strong>
          </div>
          Please reload to update: 
          <sl-button class="reload" size="small" @click="${this._reloadSW}">Reload</sl-button>
        </sl-alert>
      </div>
    `;
  }
}

customElements.define("main-application", MainApplication);