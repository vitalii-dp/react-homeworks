import api from '../../api';

export const SET_PHOTOS = 'SET_PHOTOS';
export function fetchPhotos(albumId) {
  return function(dispatch) {
    api.get(`/photos?albumId=${albumId}`).then(res => {
      dispatch({
        type: SET_PHOTOS,
        payload: res.data
      })
    })
  }
}