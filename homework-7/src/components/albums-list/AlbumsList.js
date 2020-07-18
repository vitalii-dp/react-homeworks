import React from 'react'
import { connect } from 'react-redux';
import Album from './../album/Album';

import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import TableBody from '@material-ui/core/TableBody';
import Table from '@material-ui/core/Table';

function AlbumsList({albums, users}) {
  return (
    <> 
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Album Title</TableCell>
              <TableCell>Album Owner</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {albums.map((album) => {
              const userId = album.userId;
              const user = users[userId - 1];
              return <Album album={album} key={album.id} user={user}/>
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    albums: state.albums,
    users: state.users
  }
}

export default connect(mapStateToProps)(AlbumsList);
