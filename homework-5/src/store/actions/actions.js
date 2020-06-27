export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';

export function add(todoText) {
  return {
    type: ADD_TODO,
    payload: {
      id: Date.now(),
      content: todoText,
      isCompleted: false
    }
  }
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    payload: id
  }
}

export function toggleComplete(id) {
  return {
    type: TOGGLE_COMPLETE,
    payload: id
  }
}