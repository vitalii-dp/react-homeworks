import React, { Component } from 'react'
import ContactBook from '../ContactBook/ContactBook'
import '../../components/App/App.css'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <header className='table-header'>Contact Book</header>
        <ContactBook />
      </div>
    )
  }
}

