import React from 'react';

const MovieList = ({ movies, handleFavouritesClick, favouriteComponent: FavouriteComponent }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div className="movie-card" key={movie.imdbID}>
          <img
            src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/200x300?text=No+Image'}
            alt={movie.Title}
            className="movie-poster"
          />
          <div className="movie-info">
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
          </div>
          <div onClick={() => handleFavouritesClick(movie)}>
            <FavouriteComponent />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
