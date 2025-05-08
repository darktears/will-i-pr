import { LitElement, html, css } from 'lit';

export class RotateBox extends LitElement {
    static styles = css`
        :host {
            width: 100%;
            height: 100%;
            z-index: 99;
            position: absolute;
            top: 0;
            left: 0;
            visibility: hidden;
            display: flex;
            text-align: center;
            align-items: center;
            background-color: black;
            color: white;
        }

        *,
        *::after,
        *::before {
            margin: 0;
            padding: 0;
            box-sizing: inherit;
        }

        @media all and (orientation:landscape) {
            :host {
                visibility: visible;
            }
        }

        @media all and (orientation:portrait) {
            :host {
                visibility: hidden;
            }
        }

        #fullscreen-rotate {
            font-size: 2rem;
            width: 100%;
        }
    `;

    render() {
    return html`
        <div id="fullscreen-rotate">
            Please rotate your device to portrait.
        </div>
    `;
    }
}

customElements.define("rotate-box", RotateBox);
