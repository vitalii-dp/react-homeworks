import { SET_ALBUMS } from './../actions/albums-actions';

export default function (state = [], { type, payload }) {
  switch (type) {
    case SET_ALBUMS:
      return [...payload];
    default:
      return state;
  }
}