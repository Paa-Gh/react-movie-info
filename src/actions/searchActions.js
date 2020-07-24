import {SearchMOVIE, FetchMOVIES, FetchMOVIE, LOADING} from './types';
import axios from 'axios';
import {APIKey} from '../APIKey'

export const searchMovie = text => dispatch => {
  dispatch({
    type: SearchMOVIE,
    payload: text
  });
};

export const  fetchMovies = text => dispatch => {
  axios.get(`https://www.omdbapi.com/?apikey=${APIKey}&s=${text}`)
    .then( response => dispatch ({
      type: FetchMOVIES,
      payload: response.data
    })
  )
    .catch (err => console.log(err));
};

export const fetchMovie = id => dispatch => {
  axios.get(`https://www.omdbapi.com/?apikey=${APIKey}&i=${id}`)
    .then( response => dispatch ({
      type: FetchMOVIE,
      payload: response.data
    })
  )
    .catch (err => console.log(err));
};

export const setLoading = () => {
  return {
    type: LOADING,
    loading: true
  }
}
