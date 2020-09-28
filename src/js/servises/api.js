import restConfig from "../config/restConfig";
const { articlesUrl, apiKey, everythingUrl } = restConfig;
export const getNews = async countryCode => {
  try {
    let response = await fetch(
      `
    ${articlesUrl}?country=${countryCode}&apiKey=${apiKey}`
    ).then(res => res.json());

    return response.articles;
  } catch (error) {
    console.error("error");
  }
};

export const everything = async query => {
  try {
    let responseEvery = await fetch(
      `
    ${everythingUrl}?q=${query}&apiKey=${apiKey}`
    ).then(resp => resp.json());

    return responseEvery.articles;
  } catch (error) {
    console.error("error");
  }
};
