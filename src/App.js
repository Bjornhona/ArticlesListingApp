import React, {useEffect} from 'react';
import './App.scss';
import { getArticlesListing } from './lib/articles-listing-service';
import ArticlesList from './components/articles_list/ArticlesListContainer';
import {faImage} from '@fortawesome/free-regular-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';
library.add(faImage);

function App(props) {

  useEffect(() => {
    const getListing = async () => {
      const {text, page, desk} = props;
      props.setIsLoading(true);

      try {
        const result = await getArticlesListing(text, page, desk);
        props.setListing(result.response.docs);
        props.setIsLoading(false);
      }
      catch (error) {
        console.error(error);
      }
    };
 
    getListing();
  }, [props]);

  return (
    <div>
      <ArticlesList />
    </div>
  );
}

export default App;
