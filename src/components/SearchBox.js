import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBox = ({ searchValue, setSearchValue }) => {
  return (
    <div className="search-box">
      <FaSearch className="search-icon" />
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search for movies..."
      />
    </div>
  );
};

export default SearchBox;
