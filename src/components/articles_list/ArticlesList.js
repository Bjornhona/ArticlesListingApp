import React, {useState, useEffect} from 'react';
import { getArticlesListing } from '../../lib/articles-listing-service';
import ArticleItem from '../article_item/ArticleItem';
import './articlesList.scss';

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

  return (
    <div className='articles-list'>
      <h1>The New Yourk Times</h1>
      <nav></nav>
      <div className='articles-list-container'>
        {isLoading ? null : listing.docs.map(article => {
          return <ArticleItem key={article._id} article={article} />
        })}
      </div>
    </div>
  )
}

export default ArticlesList;