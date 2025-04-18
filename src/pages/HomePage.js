import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchMovies } from '../redux/actions/movieActions';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';
import Spinner from '../components/Spinner';

const HomePage = () => {
  const dispatch = useDispatch();
  const { movies, loading, error, query, page, totalResults } = useSelector(
    (state) => state.movie
  );

  useEffect(() => {
    if (query) {
      dispatch(searchMovies(query, page));
    }
  }, [dispatch, query, page]);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= Math.ceil(totalResults / 10)) {
      dispatch(searchMovies(query, newPage));
    }
  };

  return (
    <div className="home-page">
      <h1>OMDB Movie Search</h1>
      <SearchBar />
      
      {loading && <Spinner />}
      
      {error && <div className="error-message">{error}</div>}
      
      {movies.length > 0 && (
        <>
          <div className="movies-grid">
            {movies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </div>
          
          <div className="pagination">
            <button
              onClick={() => handlePageChange(page - 1)}
              disabled={page <= 1}
            >
              Previous
            </button>
            <span>Page {page} of {Math.ceil(totalResults / 10)}</span>
            <button
              onClick={() => handlePageChange(page + 1)}
              disabled={page >= Math.ceil(totalResults / 10)}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;