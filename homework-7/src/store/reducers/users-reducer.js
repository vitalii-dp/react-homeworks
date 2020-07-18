import { ADD_NEW_USER, DELETE_USER, SET_USERS, UPDATE_USER } from '../actions/users-actions';


export default function (state = [], { type, payload }) {
  switch (type) {
    case SET_USERS:
      return [...payload];
    case ADD_NEW_USER:
      return [...state, payload];
    case UPDATE_USER:
      const idx = state.findIndex(el => el.id === payload.id);
      const newState = [...state];
      newState[idx] = payload;
      return newState;   
    case DELETE_USER:
      return state.filter(user => user.id !== payload);
    default:
      return state;
  }
}