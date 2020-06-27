import React from 'react';
import './App.css';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function App() {
  return (
    <div className="container">
      <header className="App-header">Todo App</header>
      <TodoList/>
      <br></br>
      <TodoForm/>
    </div>
  )
}

export default App;
