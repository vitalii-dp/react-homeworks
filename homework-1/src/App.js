import React, { Component } from 'react'
import './App.css';
import { moviesQuotes } from './quotes';

export default class App extends Component {
  render() {
    const moviesList = Object.keys(moviesQuotes);
    const index = Math.floor(Math.random() * moviesList.length);
    const movie = moviesList[index];
    return (
      <div className="App-text">
        {moviesQuotes[movie]}<br></br>
        {movie}
      </div>
    )
  }
}
