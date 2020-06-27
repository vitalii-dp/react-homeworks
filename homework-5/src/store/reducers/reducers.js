import {ADD_TODO, DELETE_TODO, TOGGLE_COMPLETE } from '../actions/actions';


const initialState = {
  todos: [
    {
      id: 1,
      content: 'Todo 1', 
      isCompleted: false
    },
    {
      id: 2,
      content: 'Todo 2', 
      isCompleted: true
    },
  ]
}

export default function(state = initialState, {type, payload}) {
  switch (type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, payload]
      };
    case DELETE_TODO:
      return {
        todos: state.todos.filter(item => item.id !== payload)
      }
    case TOGGLE_COMPLETE:
      return {
        todos: state.todos.map(todo => todo.id === payload ? {...todo, isCompleted: !todo.isCompleted} : todo)
      }

    default: {
      return state;
    }
  }
}