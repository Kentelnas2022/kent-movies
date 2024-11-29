import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('Avengers');

  // Fetch movies from the API
  const fetchMovies = async () => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=541c907d`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.Search) {
        setMovies(data.Search);
      } else {
        setMovies([]); // Clear movies if no results are found
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
      setMovies([]);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [searchValue]); // Fetch movies when `searchValue` changes

  return (
    <div className="app">
      <Header />
      <SearchBar setSearchValue={setSearchValue} />
      <MovieList movies={movies} />
      <Footer />
    </div>
  );
};

export default App;
