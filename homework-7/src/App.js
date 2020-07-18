import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Navigation from './components/common/navigation/Navigation';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import UsersPage from './components/users-page/UsersPage';
import AlbumsPage from './components/albums-page/AlbumsPage';

function App() {
  return (
    <Router>
      <Container>
        <div className="App">
          <Navigation />
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Switch>
                  <Route path="/" exact>
                    <h1>Albums App</h1>
                  </Route>
                  <Route path="/users/">
                    <UsersPage />
                  </Route>
                  <Route path="/albums/">
                    <AlbumsPage />
                  </Route>
                  <Route path="*">
                    <Redirect to="/" />
                  </Route>
                </Switch>
              </Grid>
            </Grid>
        </div>
      </Container>
    </Router>
  );
}

export default App;
