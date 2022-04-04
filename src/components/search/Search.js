import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useState} from "react";

const Search = ({text, setText}) => {
  // const [text, setText] = useState({
  //   firstNewsUrl: '',
  //   firstNewsAbstract: '',
  //   secondNewsUrl: '',
  //   secondNewsAbstract: '', 
  //   thirdNewsUrl: '',
  //   thirdNewsAbstract: '',
  //   value: '',
  //   query: ''
  // })

  // const getTopArticles = async (section) => {
  //   setLoading(true);
  //   const res = await axios.get(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${process.env.REACT_APP_NYTIMES_API_KEY}`);
  //   setTopStories(res.data.results);
  //   setLoading(false);
  // };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  // const handleSubmit = (event) => {
  //     event.preventDefault();
  //     searchArticles(text);
  // };

  return (
    <div>
      <form>
        <input
              label="Search articles"
              type="text"
              name="text"
              value={text}
              onChange={handleChange}
              // InputProps={{
                  // endAdornment: (
                      // <InputAdornment>
                      //     <IconButton>
                      //         <SearchIcon />
                      //     </IconButton>
                      // </InputAdornment>
                      // <FontAwesomeIcon icon={['fa', 'image']} />
                  // )
              // }}
          />
      </form>
    </div>
  )
}

export default Search;