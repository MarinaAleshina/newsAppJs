import "../css/style";
import { getNews, everything } from "./servises/api";
import userInterfaceElements from "./config/ui.config";
import { renderNews } from "./views/renderNews";
import { clearContainer } from "./views/clearContainer";

const {
  form,
  countrySelect,
  searchInput,
  newsContainer
} = userInterfaceElements;

window.addEventListener("load", async () => {
  showPreloader();

  loadNews();
  form.addEventListener("submit", e => {
    e.preventDefault();
    loadNews();
  });

  async function loadNews() {
    const country = countrySelect.value;
    const searchText = searchInput.value;

    if (!searchText) {
      const dataNews = await getNews(country);

      await renderNews(dataNews);
    } else {
      const dataEvery = await everything(searchText);
      if (!dataEvery.length) {
        clearContainer(newsContainer);
        showErrMsg();
        return;
      }
      await renderNews(dataEvery);
    }
  }
});

function showPreloader() {
  document.body.classList.add("js-loaded_hiding");
  window.setTimeout(function () {
    document.body.classList.add("js-loaded");
    document.body.classList.remove("js-loaded_hiding");
  }, 500);
}

function showErrMsg() {
  const msg = document.createElement("p");
  msg.innerText = "no news";
  newsContainer.appendChild(msg);
}
