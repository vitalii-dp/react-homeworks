import api from '../../api'

export const SET_ALBUMS = 'SET_ALBUMS';
export function fetchAlbums() {
  return function(dispatch) {
    api.get('/albums').then(res => {
      dispatch({
        type: SET_ALBUMS,
        payload: res.data
      })
    })
  }
}
