import React from 'react';
import { connect } from 'react-redux';
import {add} from '../store/actions/actions';
import { useState } from 'react';

function TodoForm({add}) {
  const [inputValue, setInputValue] = useState('')

  function handleInput(e) {
    setInputValue(e.target.value);
  }

  function addTodo() {
    add(inputValue);
    setInputValue('');
  }

  function handleKeyDown(e) {
    if(e.keyCode === 13 && inputValue) {
      addTodo();
    }
  }

  function handleClick() {
    if (inputValue) {
      addTodo();
    }
  }

  return (
    <div className="input-group mb-3">
      <input type="text" className="form-control" value={inputValue} placeholder="What needs to be done?" onChange={handleInput} onKeyDown={handleKeyDown}/>
      <div className="input-group-append">
        <button className="btn btn-primary" type="button" onClick={handleClick}>Add todo</button>
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  add,
};

export default connect(null, mapDispatchToProps)(TodoForm);
