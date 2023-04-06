console.log('LOADED');

window.customElements.define('custom-template', class extends HTMLElement {
    constructor() {
        super();
        this.text = "";
        this.color = "black";
    }

    static get observedAttributes() {
        return ['text', 'color'];
    }

    attributeChangedCallback(property, oldValue, newValue) {
        if (oldValue === newValue) return;
        this[ property ] = newValue;
    }

    connectedCallback() {
        this.innerHTML = `
            <p>${this.text}</p>

            <style>
                p {
                    color: ${this.color};
                }
            </style>
        `
    }
})
