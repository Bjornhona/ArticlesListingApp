import React from "react";
import Image from '../Image';
import './articleItem.scss';

const ArticleItem = ({article}) => {
  var date = new Date(article.pub_date);

  const formatedDate = date.toLocaleString('en-US', {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit'
  });

  return (
    <div className='article-item'>
      <div className='article-item-main'>
        <h4>{article.news_desk && article.news_desk}</h4>
        <Image article={article} />
        <h2>{article.headline.main && article.headline.main}</h2>
        <h3>{article.abstract && article.snippet}</h3>
        <p>{article.lead_paragraph && article.lead_paragraph}</p>
      </div>
      <div className='article-item-footer'>
        <h5>{formatedDate} - {article.byline && article.byline.original && article.byline.original}</h5>
        <p>read more >></p>
      </div>
    </div>
  )
}

export default ArticleItem;