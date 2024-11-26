import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate(); // Correctly calling the useNavigate hook

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchValue.trim() !== '') {
      // Ensure the search value is not empty
      navigate(`/search?q=${searchValue}`);
    }
  };

  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/">
          <img className="header__icon" src="../csshows.png" alt="Logo" />
        </Link>
        <Link to="/movies/popular" style={{ textDecoration: 'none' }}>
          <span>Popular</span>
        </Link>
        <Link to="/movies/top_rated" style={{ textDecoration: 'none' }}>
          <span>Top Rated</span>
        </Link>
        <Link to="/movies/recommended" style={{ textDecoration: 'none' }}>
          <span>Recommended</span>
        </Link>
        <Link to="/users" style={{ textDecoration: 'none' }}>
          <span>Sign in</span>
        </Link>
        <Link to="/about" style={{ textDecoration: 'none' }}>
          <span>About</span>
        </Link>
      </div>
      <div className="headerRight">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search movies..."
            value={searchValue}
            onChange={handleSearchChange}
          />
          <i className="search-icon fas fa-search"></i>
        </form>
      </div>
    </div>
  );
};

export default Header;
