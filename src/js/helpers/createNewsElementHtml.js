export const createNewsElementHtml = ({
  urlToImage,
  title,
  url,
  description
}) => {
  return `
        <div class="col">
          <div class="card">
            <div class="card-image">
              <img src="${urlToImage}" />
              <span class="card-title">${title || ""}</span>
            </div>
            <div class="card-content">
              <p>${description || ""}</p>
            </div>
            <div class="card-action">
              <a href="${url}">Read more</a>
            </div>
          </div>
        </div>
  `;
};
