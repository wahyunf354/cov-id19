import './CardNews';

class NewsList extends HTMLElement {
  set articles(news) {
    this.articles = news;
    this.render();
  }

  render() {
    this.articles.forEach((news) => {
      const cardNews = document.createElement('card-news');
      cardNews.classList.add(
        'col-md-4',
        'col-12',
        'mb-5',
        'd-flex',
        'align-items-stretch',
      );
      cardNews.data = news;
      this.appendChild(cardNews);
    });
  }
}

customElements.define('article-list', NewsList);
