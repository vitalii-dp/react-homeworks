import React from 'react';
import { connect } from 'react-redux';
import {deleteTodo, toggleComplete} from '../store/actions/actions';
import './TodoItem.css'

function TodoItem({item, deleteTodo, toggleComplete}) {
  return (
    <li className="list-group-item py-1">
      <span onClick={() => toggleComplete(item.id)} style={{textDecoration: item.isCompleted ? 'line-through' : 'none'}}>{item.content}</span>
      <i className="fas fa-trash-alt" onClick={() => deleteTodo(item.id)}></i>
    </li>
  )
}

const mapDispatchToProps = {
  deleteTodo,
  toggleComplete
};

export default connect(null, mapDispatchToProps)(TodoItem);