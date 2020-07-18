import React from 'react'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { useHistory, useRouteMatch } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

function User({user, deleteUser}) {
  const {url} = useRouteMatch();
  const history = useHistory();

  function onUserClick() {
    history.push(url + user.id);
  }

  return (
    <>
      <TableRow onDoubleClick={onUserClick}>
        <TableCell>{user.name}</TableCell>
        <TableCell>{user.username}</TableCell>
        <TableCell>{user.phone}</TableCell>
        <TableCell>
          <Button
            size="small"
            variant="contained"
            color="secondary"
            startIcon={<DeleteIcon />}
            onClick={() => deleteUser(user.id)}
          >
            Delete
      </Button>
        </TableCell>
      </TableRow>
    </>
  )
}

export default User;
