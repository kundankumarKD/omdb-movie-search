import {
    SEARCH_MOVIES_REQUEST,
    SEARCH_MOVIES_SUCCESS,
    SEARCH_MOVIES_FAILURE,
    GET_MOVIE_DETAILS_REQUEST,
    GET_MOVIE_DETAILS_SUCCESS,
    GET_MOVIE_DETAILS_FAILURE
  } from '../actions/types';
  
  const initialState = {
    movies: [],
    movieDetails: null,
    loading: false,
    error: null,
    query: '',
    page: 1,
    totalResults: 0
  };
  
  const movieReducer = (state = initialState, action) => {
    switch (action.type) {
      case SEARCH_MOVIES_REQUEST:
      case GET_MOVIE_DETAILS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null
        };
      case SEARCH_MOVIES_SUCCESS:
        return {
          ...state,
          loading: false,
          movies: action.payload.movies,
          totalResults: action.payload.totalResults,
          query: action.payload.query,
          page: action.payload.page
        };
      case GET_MOVIE_DETAILS_SUCCESS:
        return {
          ...state,
          loading: false,
          movieDetails: action.payload
        };
      case SEARCH_MOVIES_FAILURE:
      case GET_MOVIE_DETAILS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
          movies: [],
          movieDetails: null
        };
      default:
        return state;
    }
  };
  
  export default movieReducer;