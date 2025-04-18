import axios from 'axios';
import {
  SEARCH_MOVIES_REQUEST,
  SEARCH_MOVIES_SUCCESS,
  SEARCH_MOVIES_FAILURE,
  GET_MOVIE_DETAILS_REQUEST,
  GET_MOVIE_DETAILS_SUCCESS,
  GET_MOVIE_DETAILS_FAILURE
} from './types';

const API_KEY = 'afc19183'; // Replace with your OMDB API key

export const searchMovies = (query, page = 1) => async (dispatch) => {
  try {
    dispatch({ type: SEARCH_MOVIES_REQUEST });

    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}&page=${page}`
    );

    if (response.data.Response === 'True') {
      dispatch({
        type: SEARCH_MOVIES_SUCCESS,
        payload: {
          movies: response.data.Search,
          totalResults: parseInt(response.data.totalResults),
          query,
          page
        }
      });
    } else {
      dispatch({
        type: SEARCH_MOVIES_FAILURE,
        payload: response.data.Error || 'Something went wrong'
      });
    }
  } catch (error) {
    dispatch({
      type: SEARCH_MOVIES_FAILURE,
      payload: error.message
    });
  }
};

export const getMovieDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_MOVIE_DETAILS_REQUEST });

    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`
    );

    if (response.data.Response === 'True') {
      dispatch({
        type: GET_MOVIE_DETAILS_SUCCESS,
        payload: response.data
      });
    } else {
      dispatch({
        type: GET_MOVIE_DETAILS_FAILURE,
        payload: response.data.Error || 'Something went wrong'
      });
    }
  } catch (error) {
    dispatch({
      type: GET_MOVIE_DETAILS_FAILURE,
      payload: error.message
    });
  }
};