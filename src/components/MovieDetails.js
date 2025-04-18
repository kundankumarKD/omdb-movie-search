import React from 'react';
import { Link } from 'react-router-dom';

const MovieDetails = ({ movie }) => {
  if (!movie) return null;

  return (
    <div className="movie-details-container">
      <div className="movie-details-poster">
        <img
          src={
            movie.Poster !== 'N/A'
              ? movie.Poster
              : 'https://via.placeholder.com/300x450?text=No+Poster'
          }
          alt={movie.Title}
        />
      </div>
      <div className="movie-details-info">
        <h1>{movie.Title} ({movie.Year})</h1>
        <p><strong>Rated:</strong> {movie.Rated}</p>
        <p><strong>Released:</strong> {movie.Released}</p>
        <p><strong>Runtime:</strong> {movie.Runtime}</p>
        <p><strong>Genre:</strong> {movie.Genre}</p>
        <p><strong>Director:</strong> {movie.Director}</p>
        <p><strong>Writer:</strong> {movie.Writer}</p>
        <p><strong>Actors:</strong> {movie.Actors}</p>
        <p><strong>Plot:</strong> {movie.Plot}</p>
        <p><strong>Language:</strong> {movie.Language}</p>
        <p><strong>Country:</strong> {movie.Country}</p>
        <p><strong>Awards:</strong> {movie.Awards}</p>
        <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
        <p><strong>IMDB Votes:</strong> {movie.imdbVotes}</p>
        
        <Link to="/" className="back-button">
          Back to Search
        </Link>
      </div>
    </div>
  );
};

export default MovieDetails;