import React, { useEffect } from 'react'
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Form from '../form/Form';
import UsersList from '../users-list/UsersList';
import { fetchUsers } from '../../store/actions/users-actions';
import { connect } from 'react-redux';
import { addUser } from '../../store/actions/users-actions';
import { deleteUser, updateUser } from './../../store/actions/users-actions';

function UsersPage({ fetchUsers, addUser, deleteUser, updateUser }) {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const { path } = useRouteMatch();

  return (
    <Paper>
      <Switch>
        <Route path={path} exact>
          <UsersList deleteUser={deleteUser}/>
        </Route>
        <Route path={path + ":id"}>
          <Form updateUser={updateUser} addUser={addUser} deleteUser={deleteUser}/>
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Paper>
  )
}

const mapDispatchToProps = {
  fetchUsers,
  addUser,
  deleteUser,
  updateUser
};

export default connect(null, mapDispatchToProps)(UsersPage);
