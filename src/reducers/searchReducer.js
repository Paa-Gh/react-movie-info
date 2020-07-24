import {SearchMOVIE, FetchMOVIES, FetchMOVIE, LOADING} from '../actions/types';

const initialState = {
  text: '',
  movies: [],
  loading : false,
  movie: []
}

export default function (state= initialState, action) {
  switch (action.type) {
    case SearchMOVIE:
      return {
        ...state,
        text: action.payload,
        loading: false
      };
    case FetchMOVIES:
      return {
        ...state,
        movies: action.payload,
        loading: false
      };
    case FetchMOVIE:
      return {
        ...state,
        movie: action.payload,
        loading: false
      };
    case LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state
  }
}
