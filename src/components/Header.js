import React from 'react';

const Header = ({ title }) => (
  <header className="header">
    <div className="header-container">
      <h1 className="logo">{title}</h1>
    </div>
  </header>
);

export default Header;
