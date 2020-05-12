class CardNews extends HTMLElement {
  //   constructor() {
  //     super();
  //     this._shadowRoot = this.attachShadow({ mode: "closed" });
  //   }

  set data(data) {
    this._data = data;
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="card d-flex justify-content-between flex-column">
                <img src="${this._data.urlToImage}"class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${this._data.title}</h5>
                    <p class="card-text">${this._data.description}</p>
                    <a href="${this._data.url}" class="btn btn-dark">Go situs</a>
                </div>
            </div>
        `;
  }
}

customElements.define("card-news", CardNews);
