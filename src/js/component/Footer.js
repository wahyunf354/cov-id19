class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <footer>
            <p>&copy; copyright Wahyu Nur Fadillah</p>
        </footer>
        `;
  }
}

customElements.define("foo-ter", Footer);
