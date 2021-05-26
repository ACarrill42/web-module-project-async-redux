import axios from 'axios';
export const SET_FETCHING_ARTWORK = 'SET_FETCHING_ARTWORK';
export const SET_ARTWORK_SUCCESS = 'SET_ARTWORK_SUCCESS';
export const SET_ARTWORK_FAILURE = 'SET_ARTWORK_FAILURE';

export const getRandomArtwork = () => {
  return (dispatch) => {
    dispatch({type: SET_FETCHING_ARTWORK});

    axios.get('https://api.artic.edu/api/v1/artworks')
    .then(res => {
      console.log(res.data.data)
      dispatch({type: SET_ARTWORK_SUCCESS, payload: res.data.data})
    })

    .catch(err => {
      dispatch({type:SET_ARTWORK_FAILURE, payload: err})
    })
  }
}