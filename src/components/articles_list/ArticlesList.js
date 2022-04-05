import React from 'react';
import ArticleItem from '../article_item/ArticleItem';
import './articlesList.scss';
import loadingIcon from "../../commons/images/loadingIcon.svg";
import PaginationBar from '../pagination/PaginationBarContainer';
import DeskFilterBar from '../desk_filter_bar/DeskFilterBar';
import Search from '../search/Search';

const ArticlesList = (props) => {
  const {listing, isLoading, desk, text} = props;
  const desksList = ['Sports', 'Arts', 'Business', 'Health', 'Technology', 'Style', 'Play', 'Politics']

  return (
    <div className='articles-list'>
      <h1>The New York Times</h1>
      <Search text={text} setText={props.setText} />
      <DeskFilterBar desksList={desksList} desk={desk} setDesk={props.setDesk} />
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

      <PaginationBar />
    </div>
  )
}

export default ArticlesList;