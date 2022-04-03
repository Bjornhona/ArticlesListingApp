import React, {useState, useEffect} from 'react';
import { getArticlesListing } from '../../lib/articles-listing-service';
import ArticleItem from '../article_item/ArticleItem';
import './articlesList.scss';
import loadingIcon from "../../commons/images/loadingIcon.svg";
import PaginationBar from '../pagination/PaginationBar';

const ArticlesList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [listing, setListing] = useState();
  const postsPerPage = 10;
  const totalPages = listing ? listing.length : 0;
  const [desk, setDesk] = useState();
  const [page, setPage] = useState(listing ? Math.round(totalPages / postsPerPage) : 1);

  // const desksList = ['Sports', 'Arts', 'Business', 'Health & Fitness', 'Technology']

  useEffect(() => {
    const getListing = async () => {
      try {
        const result = await getArticlesListing(page, desk);
        console.log(result.response.docs)
        console.log(result.response.meta)
        setListing(result.response.docs);
        setIsLoading(false);
      }
      catch (error) {
        console.error(error);
      }
    };
 
    getListing();
  }, [page, desk]);

  console.log(page)

  return (
    <div className='articles-list'>
      <h1>The New York Times</h1>
      <nav></nav>
      <div className='articles-list-container'>
        {isLoading
          ? <div className='articles-list-loading'>
              <img src={loadingIcon} alt='...loading' />
              <h3>...loading</h3>
            </div>
          : listing.map(article => {
            return <ArticleItem key={article._id} article={article} />
          })
        }
      </div>

      <PaginationBar page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  )
}

export default ArticlesList;