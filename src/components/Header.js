import React from 'react';
import SearchBox from './SearchBox';

const Header = ({ searchValue, setSearchValue }) => {
  return (
    <header className="header">
      <div className="logo">
        <h2>Kent Movies</h2>
      </div>
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
    </header>
  );
};

export default Header;
