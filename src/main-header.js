import { LitElement, html, css } from 'lit';

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
        background-color: #069a17;
        font-size: 1.5rem;
        text-align: center;
        font-style: italic;
    }
`;

firstUpdated() {}

constructor() {
    super();
}

render() {
    return html`
    <div class="root">
        Will I PR?
    </div>
    `;
}
}

customElements.define("main-header", MainHeader);