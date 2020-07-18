import React from 'react';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import User from '../user/User';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

function UsersList({users, deleteUser}) {
  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <User user={user} key={user.id} deleteUser={deleteUser} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button color="primary" component={NavLink} to="add">
        Add user
        </Button>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(UsersList);
