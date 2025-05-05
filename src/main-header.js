import { LitElement, html, css } from 'lit';

import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';

export class MainHeader extends LitElement {
static styles = css`
    :host {
        width: 100%;
        height: 100%;
        color: white;
    }

    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    .root {
        background-color: var(--sl-color-green-400);
        font-size: 1.5rem;
        text-align: center;
        font-style: italic;
        display: flex;
        flex-direction: row;
        align-items: center;
        color: white;
    }

    .header {
        width: 80%;
    }

    sl-icon-button {
        color: white;
    }

    sl-icon-button::part(base):hover,
    sl-icon-button::part(base):focus {
        color: white;
    }

    sl-icon-button::part(base):active {
        color: white;
    }
`;

static get properties() {
    return { 
        isMainScreen: {type: Boolean, reflectToAttribute: true, attribute: true }
    };
}

set isMainScreen(mainScreen) {
    let oldIsMainScreen = this._isMainScreen;
    this._isMainScreen = mainScreen;
    this.requestUpdate('isMainScreen', oldIsMainScreen);
}

get isMainScreen() { return this._isMainScreen; }

_backClicked() {
    this.dispatchEvent(new CustomEvent('back-clicked', { bubbles: true, composed: true }));
    this.isMainScreen = true;
}

firstUpdated() {}

_isMainScreen;

constructor() {
    super();
    this._isMainScreen = true;
}

render() {
    return html`
    <div class="root">
        <sl-icon-button name="arrow-left-square" label="Back" ?disabled=${this.isMainScreen}
            @click="${this._backClicked}"></sl-icon-button>
        <div class="header">Will I PR?</div>
    </div>
    `;
}
}

customElements.define("main-header", MainHeader);