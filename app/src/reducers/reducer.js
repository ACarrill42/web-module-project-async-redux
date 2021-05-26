import {SET_FETCHING_ARTWORK, SET_ARTWORK_SUCCESS, SET_ARTWORK_FAILURE} from '../actions/actions';

const initialState = {
  art: [],
  isFetching: false,
  error: ''
}
export const reducer = (state = initialState , action) => {
  switch (action.type) {
    case SET_FETCHING_ARTWORK:
      return {
        ...state,
        isFetching: true
      }
    case SET_ARTWORK_SUCCESS:
      return {
        ...state,
        isFetching: false,
        art: action.payload
      }  
    case SET_ARTWORK_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }  
    default:
      return state;
  }
}