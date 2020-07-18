import React, { useEffect } from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import AlbumsList from '../albums-list/AlbumsList';
import { connect } from 'react-redux';
import { fetchAlbums } from '../../store/actions/albums-actions';
import PhotosList from './../photos-list/PhotosList';
import { fetchUsers } from '../../store/actions/users-actions';

function AlbumsPage({ fetchAlbums, fetchUsers }) {
  useEffect(() => {
    fetchAlbums();
  }, [fetchAlbums]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const { path } = useRouteMatch();

  return (
    <Paper>
      <Switch>
        <Route path={path} exact>
          <AlbumsList />
        </Route>
        <Route path={path + ":id/"} exact>
          <PhotosList />
        </Route>
      </Switch>
    </Paper>
  )
}

const mapDispatchToProps = {
  fetchAlbums,
  fetchUsers
};

export default connect(null, mapDispatchToProps)(AlbumsPage);

