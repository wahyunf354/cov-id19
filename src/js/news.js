import $ from "jquery";
import "../../src/js/component/NewsList.js";

const newsContent = (data) => {
  const newsList = document.createElement("article-list");
  newsList.classList.add("row");
  newsList.articles = data;
  $("#content-news").html(newsList);
};

const errorNews = (err) => {
  $("#content-news").html(`
    Maaf terjadi Kesalahan, ${err}
  `);
};

export { newsContent };
