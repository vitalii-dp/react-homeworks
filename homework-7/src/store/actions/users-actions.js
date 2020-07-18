import api from '../../api';

export const SET_USERS = 'SET_USERS';
export function fetchUsers() {
  return function(dispatch) {
    api.get('/users').then(res => {
      dispatch({
        type: SET_USERS,
        payload: parseData(res.data)
      })
    })
  }
}

export function parseData(data) {
  return data.map(user => {
    return {
      id: user.id,
      name: user.name,
      username: user.username,
      phone: user.phone
    }
  })
}

export const ADD_NEW_USER = 'ADD_NEW_USER';
export function addUser(user) {
  return function(dispatch) {
    api.post('/users', user).then(res => {
      dispatch({
        type: ADD_NEW_USER,
        payload: res.data
      })
    })
  }
}

export const UPDATE_USER = 'UPDATE_USER';
export function updateUser(id, user) {
  return function(dispatch) {
    api.put('/users/' + id, user).then(res => {
      dispatch({
        type: UPDATE_USER,
        payload: res.data
      })
    })
  }
}

export const DELETE_USER = 'DELETE_USER';
export function deleteUser(id) {
  return function (dispatch) {
    api.delete('/users/' + id).then(() => dispatch({
      type: DELETE_USER,
      payload: id
    }))
  }
}