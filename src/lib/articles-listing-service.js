const API_KEY = process.env.REACT_APP_API_KEY

export const getArticlesListing = (text, page, desk) => {
  const deskParamString = desk ? `&fq=news_desk:(${desk})` : ''
  return fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?page=${page}&q=${text}&api-key=${API_KEY}${deskParamString}`)
  .then(response => response.json())
  .catch((err) => console.error(err));
}
