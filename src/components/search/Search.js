import React, {useState} from "react";
import './search.scss';

const Search = (props) => {
  const [input, setInput] = useState('');

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.setPage(1);
    props.setText(input);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        label="Search articles"
        type="text"
        name="text"
        value={input}
        onChange={handleChange}
        placeholder="Search..."
      />
    </form>
  )
}

export default Search;