import "./CardNews.js";

class NewsList extends HTMLElement {
  set articles(news) {
    this._articles = news;
    this.render();
  }

  render() {
    this._articles.forEach((news) => {
      const cardNews = document.createElement("card-news");
      cardNews.classList.add("col-md-4");
      cardNews.classList.add("col-12");
      cardNews.classList.add("mb-5");
      cardNews.classList.add("col-12");
      cardNews.classList.add("d-flex");
      cardNews.classList.add("align-items-stretch");
      cardNews.data = news;
      this.appendChild(cardNews);
    });
  }
}

customElements.define("article-list", NewsList);
