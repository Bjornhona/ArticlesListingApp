import React, {useState, useEffect} from 'react';
import { getArticlesListing } from '../../lib/articles-listing-service';
import ArticleItem from '../article_item/ArticleItem';
import './articlesList.scss';
import loadingIcon from "../../commons/images/loadingIcon.svg";
import PaginationBar from '../pagination/PaginationBar';
import DeskFilterBar from '../desk_filter_bar/DeskFilterBar';
import Search from '../search/Search';

const ArticlesList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [listing, setListing] = useState();
  const postsPerPage = 10;
  const totalPages = listing ? listing.length : 0;
  const [desk, setDesk] = useState();
  const [page, setPage] = useState(listing ? Math.round(totalPages / postsPerPage) : 1);
  const [text, setText] = useState('');

  // Search by keywords
  // News page with react router :id
  // ev. redux

  const desksList = ['Sports', 'Arts', 'Business', 'Health', 'Technology', 'Style', 'Play', 'Politics']

  useEffect(() => {
    const getListing = async () => {
      try {
        const result = await getArticlesListing(text, page, desk);
        setListing(result.response.docs);
        setIsLoading(false);
      }
      catch (error) {
        console.error(error);
      }
    };
 
    getListing();
  }, [text, page, desk]);

  // console.log(listing)

  return (
    <div className='articles-list'>
      <h1>The New York Times</h1>
      <Search text={text} setText={setText} />
      <DeskFilterBar desksList={desksList} desk={desk} setDesk={setDesk} />
      <div className='articles-list-container'>
        {isLoading
          ? <div className='articles-list-loading'>
              <img src={loadingIcon} alt='...loading' />
              <h3>...loading</h3>
            </div>
          : listing.length === 0
          ? <p>No hits</p>
          : listing.map(article => <ArticleItem key={article._id} article={article} />)
        }
      </div>

      <PaginationBar page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  )
}

export default ArticlesList;