import {ADD_NEW_CONTACT, DELETE_CONTACT, SET_CONTACTS, TOGGLE_FORM_VISIBILITY} from '../actions/actions';


const initialState = {
  contacts: [],
  isFormVisible: false
}

export default function(state = initialState, {type, payload}) {
  switch (type) {
    case SET_CONTACTS:
      return { ...state, contacts: payload };
    case TOGGLE_FORM_VISIBILITY: 
      return { ...state, isFormVisible: !state.isFormVisible};
    case ADD_NEW_CONTACT:
      return { ...state, contacts: [...state.contacts, payload]};
     case DELETE_CONTACT:
       return { ...state, contacts: state.contacts.filter(item => item.id !== payload) };
    default: {
      return state;
    }
  }
}