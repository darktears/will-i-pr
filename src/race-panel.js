import { LitElement, html, css } from 'lit';

import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';

export class RacePanel extends LitElement {
    static styles = css`
        :host {
            width: 100%;
            height: 100%;
            z-index: 2;
        }

        .root {
            width: 100vw;
            height: 100vh;
            display: flex;
            flex-direction: column;
        }

        .header {
            width: 100vw;
            font-size: 1.5rem;
            height: 10vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 10px;
        }

        .split {
            margin-top: 5px;
            flex-basis: min-content;
        }

        .splits {
            width: 100vw;
            min-height: 20vh;
            border-top: solid 2px white;
            padding-left: 5px;
            padding-right: 5px;
            overflow-y: scroll;
        }

        .timer {
            width: 100%;
            font-size: 2.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 45vh;
        }

        .rounded-time {
            border: solid 4px var(--sl-color-green-500);
            border-radius: 50%;
            width: 300px;
            height: 300px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .timer-buttons {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin-top: 10px;
            width: 100%;
        }

        #startButton {
            touch-action: manipulation;
            background-color: var(--sl-color-green-500);
            border: solid 1px var(--sl-color-green-200);
            color: white;
            border-radius: 10px;
            width: 50%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }

        #lapButton {
            touch-action: manipulation;
            background-color: var(--sl-color-teal-500);
            border: solid 1px var(--sl-color-teal-200);
            color: white;
            border-radius: 10px;
            width: 25%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin-left: 10px;
            margin-right: 5px;
        }

        #resetButton {
            touch-action: manipulation;
            background-color: var(--sl-color-red-500);
            border: solid 1px var(--sl-color-red-200);
            color: white;
            border-radius: 10px;
            width: 25%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin-right: 10px;
            margin-left: 5px;
        }

        .timer-buttons sl-icon-button::part(base):hover,
        .timer-buttons sl-icon-button::part(base):focus {
            color: white;
        }

        .timer-buttons sl-icon-button::part(base):active {
            color: white;
        }

        .projected-time {
            width: 100%;
            font-size: 1.3rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 10vh;
            border-top: solid 2px white;
            margin-top: 5px;
            margin-bottom: 5px;
        }

        .current-pr {
            color: var(--sl-color-red-400);
            font-size: 1.2rem;
        }

        .projected-pace {
            color: var(--sl-color-green-600);
            font-size: 1.2rem;
        }

        .overall-ahead {
            width: 100%;
            font-size: 1.2rem;
            text-align: center;
        }

        .projected-header {
            margin-top: 5px;
        }

        .projected-legend {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            font-size: 1rem;
            margin-top: 10px;
        }

        .split-header {
            font-size: 1.5rem;
            margin-top: 10px;
            margin-bottom: 10px;
            height: 10%;
        }

        .split-list {
            width: 100%;
            height: 20vh;
            display: flex;
            flex-direction: column;
        }
    `;

    static get properties() {
        return { 
            distance: {type: Number, reflectToAttribute: true, attribute: true },
            pr: {type: Number, reflectToAttribute: true, attribute: true },
            splits: {type: Array, reflectToAttribute: false, attribute: true }
        };
    }

    set distance(distance) {
        let oldDistance = this._distance;
        this._distance = distance;
        this._calculateNumberOfLaps();
        this.requestUpdate('distance', oldDistance);
    }
    
    get distance() { return this._distance; }

    set pr(pr) {
        let oldPr = this._pr;
        this._pr = pr;
        this.requestUpdate('pr', oldPr);
    }
    
    get pr() { return this._pr; }

    set splits(splits) {
        let oldSplits = this._splits;
        this._splits = splits;
        this.requestUpdate('splits', oldSplits);
    }
    
    get splits() { return this._splits; }

    firstUpdated() {
        this._elapsedTimer = this.shadowRoot.querySelector('#elapsedTimer');
        this._startButton = this.shadowRoot.querySelector('#startButton');
        this._pauseButton = this.shadowRoot.querySelector('#pauseButton');
        this._resetButton = this.shadowRoot.querySelector('#resetButton');
        this._lapButton = this.shadowRoot.querySelector('#lapButton');
        this._projectedTime = this.shadowRoot.querySelector('#projected-time');
        this._overallAhead = this.shadowRoot.querySelector('#overall-ahead');
    }

    _distance;
    _pr;
    _numberOfLapsLeft;
    _timer;
    _elapsedTimer;
    _startButton;
    _pauseButton;
    _resetButton;
    _lapButton;
    _splits = [];
    _absoluteSplits = [];
    _elapsedTime;
    _wakeLock;

    constructor() {
        super();
        this._distance = 0;
        this._pr = 0;
        this._numberOfLapsLeft = 0;
        this._timer = null;
        this._elapsedTime = 0;
        this._absoluteSplits = [];
        this._wakeLock = null;
    }

    connectedCallback() {
        super.connectedCallback();
    }

    _calculateNumberOfLaps() {
        this._numberOfLapsLeft = Math.round(this.distance / 400);
    }

    async _startRace() {
        if (this._timer != null) {
            clearInterval(this._timer);
            this._timer = null;
            this._startButton.name = "play-circle";
            this._startButton.label = "start";
            this._lapButton.disabled = true;
            if (this._wakeLock) {
                this._wakeLock.release().then(() => {
                    this._wakeLock = null;
                });
            }
            return;
        }
        this._timer = setInterval(() => this._updateTimerDisplay(), 10);
        this._startButton.name = "pause-circle";
        this._startButton.label = "pause";
        this._resetButton.disabled = false;
        this._lapButton.disabled = false;
        if ("wakeLock" in navigator) {
            console.log("wakeLock is supported");
            if (this._wakeLock === null) {
                try {
                    this._wakeLock = await navigator.wakeLock.request("screen");
                    console.log("Wake Lock is active");
                } catch (err) {
                    console.log("Error while trying to request Wake Lock : " + err);
                }
            }
        }
    }

    resetRace() {
        clearInterval(this._timer);
        this._elapsedTime = 0;
        this.splits = [];
        this._absoluteSplits = [];
        this._numberOfLapsLeft = Math.round(this.distance / 400);
        this._elapsedTimer.innerHTML = ` 00 : 00 : 00 : 00`;
        this._lapButton.disabled = true;
        this._projectedTime.innerHTML = ` 00 : 00 : 00 : 00`;
        this._overallAhead.innerHTML = `Ahead: 00 : 00 : 00 : 00`;
        this._startButton.name = "play-circle";
        this._startButton.label = "start";
        if (this._wakeLock) {
            this._wakeLock.release().then(() => {
                this._wakeLock = null;
            });
        }
    }

    _updateTimerDisplay() {
        this._elapsedTime += 10;
        this._elapsedTimer.innerHTML = this._formatTime(this._elapsedTime);
    }

    _lap() {
        if (this._splits.length >= 1) {
            let lastSplit = this._elapsedTime - this._absoluteSplits[this._absoluteSplits.length - 1];
            this.splits.push(lastSplit);
            this._absoluteSplits.push(this._elapsedTime);
        } else {
            this.splits.push(this._elapsedTime);
            this._absoluteSplits.push(this._elapsedTime);
        }
        this._numberOfLapsLeft--;
        this.requestUpdate();
        this._calculateProjectedFinishTime();
        if (this._numberOfLapsLeft === 0) {
            this._lapButton.disabled = true;
            this._startRace();
        } 
    }

    _calculateProjectedFinishTime() {
        let projectedFinishTime = 0;
        if (this._splits.length===1 && this._distance === '1500') {
                projectedFinishTime =  this._elapsedTime + this._splits[0] * 1.25 * this._numberOfLapsLeft;
        } else if (this._splits.length===1 && this._distance === '3000') {
            // The first lap is half of the rest.
            projectedFinishTime =  this._elapsedTime + this._splits[0] * 2 * this._numberOfLapsLeft;
        } else {
            projectedFinishTime =  this._elapsedTime + this._splits[this._splits.length - 1] * this._numberOfLapsLeft;
        }
        let projectedFinishTimeDisplay = this._formatTime(projectedFinishTime);
        this._projectedTime.innerHTML = projectedFinishTimeDisplay;
        const overallAhead = projectedFinishTime - this.pr;
        if (overallAhead < 0) {
            this._overallAhead.style.color = "#069a17";
            this._overallAhead.innerHTML = 'Ahead: ' + this._formatTime(-overallAhead);
        } else {
            this._overallAhead.style.color = "#9a0606";
            this._overallAhead.innerHTML = 'Behind: ' + this._formatTime(overallAhead);
        }
    }

    _computePaceinKm(splitIndex) {
        const split = this._splits[splitIndex];
        let distanceKm = 0.4;
        if (this._distance === '1500' && splitIndex === 0) {
            distanceKm = 0.3;
        } else if (this._distance === '3000' && splitIndex === 0) {
            distanceKm = 0.2;
        }
        // Convert milliseconds to minutes
        const timeMin = split / (1000 * 60);

        const paceMinPerKm = timeMin / distanceKm;
        const minutes = Math.floor(paceMinPerKm);
        const secondsDecimal = (paceMinPerKm - minutes) * 60;
        const seconds = Math.round(secondsDecimal);

        const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

        return `${minutes}:${formattedSeconds} min/km`;
    }

    _computePaceinMiles(splitIndex) {
        const split = this._splits[splitIndex];
        let distanceMiles;
        if (this._distance === '1500' && splitIndex === 0) {
            // 1 mile is approximately 1609.344 meters
            distanceMiles = 300 / 1609.344;
        } else if (this._distance === '3000' && splitIndex === 0) {
            distanceMiles = 200 / 1609.344;
        } else {
            distanceMiles = 400 / 1609.344;
        }
        // Convert milliseconds to minutes
        const timeMin = split / (1000 * 60);

        const paceMinPerMile = timeMin / distanceMiles;
        const minutes = Math.floor(paceMinPerMile);
        const secondsDecimal = (paceMinPerMile - minutes) * 60;
        const seconds = Math.round(secondsDecimal);

        const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

        return `${minutes}:${formattedSeconds} min/mile`;
    }

    _computePaceinMilesFromDistance(distance, time) {
        if (distance === 0 || time === 0) {
            return '00:00 min/mile';
        }
        const distanceMiles = Number(distance) / 1609.344;
        // Convert milliseconds to minutes
        const timeMin = time / (1000 * 60);

        const paceMinPerMile = timeMin / distanceMiles.toFixed(1);
        const minutes = Math.floor(paceMinPerMile);
        const secondsDecimal = (paceMinPerMile - minutes) * 60;
        const seconds = Math.round(secondsDecimal);

        const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

        return `${minutes}:${formattedSeconds} min/mile`;
    }

    _formatTime(time) {
        let h = Math.floor(time / 3600000);
        let m = Math.floor((time % 3600000) / 60000);
        let s = Math.floor((time % 60000) / 1000);
        let ms = time % 1000;
        ms = ms / 10;
        return `${h < 10 ? "0" + h : h} : ${m < 10 ? "0" + m : m} : ${s < 10 ? "0" + s : s} : ${ms < 10 ? "0" + ms : ms < 100 ? "" + ms : ms}`;
    }

    render() {
        return html`
            <div class="root">
                <div class="header">
                    Distance: ${this.distance}
                    <div class="current-pr">Current PR: ${this._formatTime(this.pr)}</div>
                    <div class="projected-pace">Average pace: ${this._computePaceinMilesFromDistance(this.distance, this.pr)}</div>
                </div>
                <div class="timer">
                    <div class="rounded-time" id="elapsedTimer">00 : 00 : 00 : 00</div>
                    <div class="timer-buttons">
                        <sl-icon-button name="arrow-clockwise" @click="${this.resetRace}" disabled id="resetButton" label="reset"></sl-icon-button>
                        <sl-icon-button name="play-circle" @click="${this._startRace}" id="startButton" label="start"></sl-icon-button>
                        <sl-icon-button name="stopwatch" @click="${this._lap}" id="lapButton" label="lap"></sl-icon-button>
                    </div>
                </div>
                <div class="projected-time">
                    <div class="projected-header">Projected Finish Time</div>
                    <div id="projected-time" class="time">00 : 00 : 00 : 00</div>
                    <div class="projected-legend">
                        <div class="overall-ahead" id="overall-ahead">Ahead: 00 : 00 : 00 : 00</div>
                    </div>
                </div>
                <div class="splits">
                    <div class="split-header">Splits</div>
                    <div class="split-list">
                        ${this.splits.map((time, i) => html`
                            <div class="split">${++i} - ${this._formatTime(time)} - ${this._computePaceinMiles(--i)}</div>
                        `)}
                    </div>
                </div>
            </div>
        `;
    }
}
customElements.define("race-panel", RacePanel);