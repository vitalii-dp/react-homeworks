import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from 'react-router-dom';
import ContactBook from './ContactBook'

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item nav-link">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item nav-link">
                <Link to="/contacts">Contacts</Link>
              </li>
              <li className="nav-item nav-link">
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div> 
        </nav>
        <h1>Contacts Book</h1>
        <Switch>
          <Route path="/" exact render={() => {
            return <h3>Click on the 'Contacts' link to navigate to contacts list</h3>
          }} />
          <Route path="/contacts">
            <ContactBook />
          </Route>
          <Route path="/about" render={() => {
            return <h3>Homework #6 'Contacts App' made by Vitalii Leshchynskyi</h3>
          }} />
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
