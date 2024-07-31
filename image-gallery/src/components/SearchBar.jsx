import React from 'react';

const SearchBar = ({ query, setQuery }) => (
  <input
    type="text"
    placeholder="Search by title..."
    value={query}
    onChange={(e) => setQuery(e.target.value)}
  />
);

export default SearchBar;
