import React from 'react'
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { useHistory } from 'react-router-dom';

function Album({album, user}) {

  const history = useHistory();

  function onAlbumClick() {
    history.push(`/albums/${album.id}`)
  }

  return (
    <>
    {(user && album) ?
      <TableRow onDoubleClick={onAlbumClick}>
        <TableCell>{album.title}</TableCell>
        <TableCell>{user.name}</TableCell>
      </TableRow> : null}
    </>
  )
}

export default Album
