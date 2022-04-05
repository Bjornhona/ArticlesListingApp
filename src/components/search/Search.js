import React from "react";
import './search.scss';

const Search = ({text, setText}) => {

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <form>
      <input
        label="Search articles"
        type="text"
        name="text"
        value={text}
        onChange={handleChange}
        placeholder="Search..."
      />
    </form>
  )
}

export default Search;