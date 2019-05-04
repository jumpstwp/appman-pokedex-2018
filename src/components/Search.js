import React from "react";

const Search = ({ onChange }) => (
  <div>
    <input
      type="text"
      onChange={onChange}
      placeholder="Enter pokemon name..."
      autoFocus
    />
  </div>
);

export default Search;
