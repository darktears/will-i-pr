import { LitElement, html, css } from 'lit';

import '@shoelace-style/shoelace/dist/components/select/select.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/option/option.js';
import '@shoelace-style/shoelace/dist/components/input/input.js';

export class SetupPanel extends LitElement {
    static styles = css`
        :host {
            width: 100%;
            height: 100%;
            z-index: 2;
        }

        .root {
            background-color: black;
            width: 100%;
            height: 100%;
            --sl-color-primary-50: var(--sl-color-green-50);
            --sl-color-primary-100: var(--sl-color-green-100);
            --sl-color-primary-200: var(--sl-color-green-200);
            --sl-color-primary-300: var(--sl-color-green-300);
            --sl-color-primary-400: var(--sl-color-green-400);
            --sl-color-primary-500: var(--sl-color-green-500);
            --sl-color-primary-600: var(--sl-color-green-600);
            --sl-color-primary-700: var(--sl-color-green-700);
            --sl-color-primary-800: var(--sl-color-green-800);
            --sl-color-primary-900: var(--sl-color-green-900);
            --sl-color-primary-950: var(--sl-color-green-950);
            --sl-input-focus-ring-color: hsl(141.1 64.9% 43% / 40%);
            --sl-input-border-color-focus: var(--sl-color-green-600);
        }

        .content {
            display: flex;
            flex-direction: column;
            align-self: center;
            justify-content: center;
            height: 100%;
            width: 100%;
        }

        .content-item {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-left: 10px;
            margin-right: 10px;
            margin-bottom: 20px;
            width: 90%;
        }

        .pr-panel-title {
            font-size: 1.5rem;
            width: 90%;
        }

        #distance {
            width: 90%;
        }

        sl-input {
            width: 30%;
            margin: 2px;
        }

        sl-button {
            margin-left: 5px;
            margin-right: 5px;
        }
    `;

    _nextButton;

    static get properties() {
        return {
            distance: {type: Number, reflectToAttribute: true, attribute: true },
            pr: {type: Number, reflectToAttribute: true, attribute: true },
        };
    }

    set distance(distance) {
        let oldDistance = this._distance;
        this._distance = distance;
        this.requestUpdate('distance', oldDistance);
    }
    
    get distance() { return this._distance; }

    set pr(pr) {
        let oldPr = this._pr;
        this._pr = pr;
        this.requestUpdate('pr', oldPr);
    }
    
    get pr() { return this._pr; }

    firstUpdated() {
        this._nextButton = this.shadowRoot.querySelector('sl-button');
        this._hoursPR = this.shadowRoot.querySelector('#hours-pr');
        this._minutesPR = this.shadowRoot.querySelector('#minutes-pr');
        this._secondsPR = this.shadowRoot.querySelector('#seconds-pr');
        this._distanceSelect = this.shadowRoot.querySelector('#distance');
    }

    constructor() {
        super();
        this._distance = 0;
        this._pr = 0;
    }

    connectedCallback() {
        super.connectedCallback();
    }

    _moveToRace() {
        if (this._minutesPR.value > 60) {
            return;
        }

        if (this._secondsPR.value > 60) {
            return;
        }

        if (this._distanceSelect.value === '') {
            return;
        }

        this.shadowRoot.host.style.display = "none";
        this.distance = this._distanceSelect.value;
        this.pr = this._calculatePRinMilliseconds(this._hoursPR.value, this._minutesPR.value, this._secondsPR.value);
        let event = new CustomEvent('distance-changed', {
            detail: { message: 'distance changed', distance: this.distance },
            bubbles: true,
            composed: true });
        this.dispatchEvent(event);
        event = new CustomEvent('pr-changed', {
            detail: { message: 'pr changed', pr: this.pr },
            bubbles: true,
            composed: true });
        this.dispatchEvent(event);
    }

    _calculatePRinMilliseconds(hours, minutes, seconds) {
        return (Number(hours) * 3600 + Number(minutes) * 60 + Number(seconds)) * 1000;
    }

    render() {
        return html`
            <div class="root">
                <div class="content">
                    <div class="content-item">
                        <div class="pr-panel-title">Select Distance:</div>
                        <sl-select id="distance" placeholder="Select one" size="large" value="1600">
                            <sl-option value="800">800m</sl-option>
                            <sl-option value="1500">1500m</sl-option>
                            <sl-option value="1600">1600m</sl-option>
                            <sl-option value="3000">3000m</sl-option>
                            <sl-option value="3200">3200m</sl-option>
                        </sl-select>
                    </div>
                    <div class="content-item">
                        <div class="pr-panel-title"> What's your PR target?</div>
                    </div>
                    <div class="content-item">
                        <sl-input id="hours-pr" type="number" label="Hours" value="0"></sl-input>
                        <sl-input id="minutes-pr" type="number" label="Minutes" value="5"></sl-input>
                        <sl-input id="seconds-pr" type="number" label="Seconds"value="29"></sl-input>
                    </div>
                    <sl-button variant="primary" @click="${this._moveToRace}">Next</sl-button>
                </div>
            </div>
        `;
    }
}
customElements.define("setup-panel", SetupPanel);