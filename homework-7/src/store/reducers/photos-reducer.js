import { SET_PHOTOS } from './../actions/photos-actions';

export default function (state = [], { type, payload }) {
  switch (type) {
    case SET_PHOTOS:
      return [...payload];
    default:
      return state;
  }
}