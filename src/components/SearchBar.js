import React from 'react';

const SearchBar = ({ setSearchValue }) => {
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for movies..."
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
