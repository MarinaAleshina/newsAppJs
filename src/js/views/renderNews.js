import userInterfaceElements from "../config/ui.config";
import { createNewsElementHtml } from "../helpers/createNewsElementHtml";

import { clearContainer } from "./clearContainer";

const { newsContainer } = userInterfaceElements;

export const renderNews = async news => {
  if (newsContainer.children.length) {
    clearContainer(newsContainer);
  }
  let fragment = "";

  news.forEach(elementHtml => {
    const news = createNewsElementHtml(elementHtml);
    fragment += news;
  });

  newsContainer.insertAdjacentHTML("afterbegin", fragment);
};
