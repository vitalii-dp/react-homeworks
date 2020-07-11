import api from '../../api'

export const SET_CONTACTS = 'SET_CONTACTS';
export function setContacts(contacts) {
  return {
    type: SET_CONTACTS,
    payload: contacts
  }
}

export function fetchContacts() {
  return function(dispatch) {
    api.get().then(res => dispatch(setContacts(res.data)))
  }
}

export const TOGGLE_FORM_VISIBILITY = 'TOGGLE_FORM_VISIBILITY';
export function toggleForm() {
  return {
    type: TOGGLE_FORM_VISIBILITY
  }
}

export const ADD_NEW_CONTACT = 'ADD_NEW_CONTACT';
export function addContact(contact) {
  return function(dispatch) {
    api.post('', contact).then(res => dispatch({
        type: ADD_NEW_CONTACT,
        payload: res.data
    }))
  }
}

export const DELETE_CONTACT = 'DELETE_CONTACT';
export function deleteContact(id) {
  return function(dispatch) {
    api.delete(id).then(() => dispatch({
      type: DELETE_CONTACT,
      payload: id
    }))
  }
}