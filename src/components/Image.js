import React from "react";
import placeholder from "../commons/images/placeholder.svg";

const Image = ({article}) => {
  const articleExists = article.multimedia && article.multimedia.length > 0
  const src = (articleExists)
  ? `https://www.nytimes.com/${article.multimedia[0].url}`
  : placeholder;
  const alt = articleExists ? article.multimedia[0].crop_name : 'no image';

  const onBrokenImage = (event) => {
    event.target.src = placeholder;
  }

  return <img src={src} alt={alt} onError={onBrokenImage} />
}

export default Image;