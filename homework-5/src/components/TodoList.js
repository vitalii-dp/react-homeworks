import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem'

function TodoList({todos}) {
  return (
    <div className="list-group">
      {todos.map(item => (
        <TodoItem key={item.id} item={item}/>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(TodoList);