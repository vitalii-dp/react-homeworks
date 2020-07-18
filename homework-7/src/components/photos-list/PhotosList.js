import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchPhotos } from '../../store/actions/photos-actions';
import { useRouteMatch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  }
}));

function PhotosList({ fetchPhotos, photos }) {
  const {params} = useRouteMatch();
  const classes = useStyles();

  useEffect(() => {
    fetchPhotos(params.id);
  }, [fetchPhotos, params.id]);

  return (
    <div className={classes.root}>
      <GridList cellHeight={600} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Photos</ListSubheader>
        </GridListTile>
        {photos.map(photo => (
          <GridListTile key={photo.id}>
            <img src={photo.url} alt={photo.title} />
            <GridListTileBar title={photo.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    photos: state.photos
  }
}

const mapDispatchToProps = {
  fetchPhotos
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotosList);
