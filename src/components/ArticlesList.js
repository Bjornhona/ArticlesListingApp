import React, {useState, useEffect} from 'react';
import { getArticlesListing } from '../lib/articles-listing-service';

const ArticlesList = () => {
  const [isLoading, setIsLoading] = useState();
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
    <div></div>
  )
}

export default ArticlesList;