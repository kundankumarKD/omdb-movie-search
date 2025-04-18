import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getMovieDetails } from '../redux/actions/movieActions';
import MovieDetails from '../components/MovieDetails';
import Spinner from '../components/Spinner';

const MoviePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { movieDetails, loading, error } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(getMovieDetails(id));
  }, [dispatch, id]);

  if (loading) return <Spinner />;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="movie-page">
      <MovieDetails movie={movieDetails} />
    </div>
  );
};

export default MoviePage;