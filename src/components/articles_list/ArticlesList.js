import React from 'react';
import ArticleItem from '../article_item/ArticleItem';
import './articlesList.scss';
import loadingIcon from "../../commons/images/loadingIcon.svg";
import PaginationBar from '../pagination/PaginationBarContainer';
import DeskFilterBar from '../desk_filter_bar/DeskFilterBarContainer';
import Search from '../search/SearchContainer';

const ArticlesList = (props) => {
  const {docs, isLoading} = props;

  return (
    <div className='articles-list'>
      <h1>The New York Times</h1>
      <Search />
      <DeskFilterBar />
      <div className='articles-list-container'>
        {isLoading
          ? <div className='articles-list-loading'>
              <img src={loadingIcon} alt='...loading' />
              <h3>...loading</h3>
            </div>
          : docs.length === 0
          ? <p>No hits</p>
          : docs.map(article => <ArticleItem key={article._id} article={article} />)
        }
      </div>

      <PaginationBar />
    </div>
  )
}

export default ArticlesList;