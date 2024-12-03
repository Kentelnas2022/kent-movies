import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('Avengers');

  useEffect(() => {
    const fetchMovies = async () => {
      const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=541c907d`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.Search) {
          setMovies(data.Search);
        } else {
          setMovies([]);
        }
      } catch (error) {
        console.error('Error fetching movies:', error);
        setMovies([]);
      }
    };

    fetchMovies();
  }, [searchValue]);

  return (
    <div className="app">
      <Header title="MovieFlix" />
      <SearchBar setSearchValue={setSearchValue} />
      <MovieList movies={movies} />
      <Footer footerText="© 2024 MovieFlix. All Rights Reserved." />
    </div>
  );
};

export default App;
