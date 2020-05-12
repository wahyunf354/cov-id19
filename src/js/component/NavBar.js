class NavBar extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this._shadowRoot.innerHTML = `
            <style>

                nav {
                  background-color: #222b45;
                  color: white;
                  font-size: 2rem;
                  padding-top: .5rem;
                  padding-bottom: .5rem;
                  padding-left: 3rem;
                  box-shadow: 0.1rem 0.1rem 0.5rem rgba(0, 0, 0, 0.5);
                }
                
                nav h3 {
                font-family: "Roboto", sans-serif;
                }
                
            </style>
            <nav>
                <h3>Cov-id19</h3>
            </nav>
        `;
  }
}

customElements.define("nav-bar", NavBar);
