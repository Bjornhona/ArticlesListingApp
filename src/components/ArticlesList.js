import React, {useState, useEffect} from 'react';
import { getArticlesListing } from '../lib/articles-listing-service';
import Image from './Image';

const ArticlesList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [listing, setListing] = useState();
  const [page, setPage] = useState(2);
  const [desk, setDesk] = useState();

  // const desksList = ['Sports', 'Arts', 'Business', 'Health & Fitness', 'Technology']

  useEffect(() => {
    const getListing = async () => {
      try {
        const result = await getArticlesListing(page, desk);
        setListing(result.response);
        setIsLoading(false);
      }
      catch (error) {
        console.error(error);
      }
    };
 
    getListing();
  }, [page, desk]);

  console.log(listing && listing.meta)
  console.log(listing && listing.docs);
  console.log(isLoading);

  return (
    <div className='articles-list'>
      {isLoading ? null : listing.docs.map(article => {
        return (
          <div key={article._id} className='article-list-item'>
            <h1>{article.headline.main && article.headline.main}</h1>
            <h3>{article.lead_paragraph && article.lead_paragraph}</h3>
            <Image src={`https://www.nytimes.com/${article.multimedia[0].url}`} alt={article.multimedia[0].crop_name} />
            <p>{article.abstract && article.snippet}</p>
            <p>{article.byLine && article.byLine.original && article.byLine.original}</p>
          </div>
        )
      })}
    </div>
  )
}

export default ArticlesList;