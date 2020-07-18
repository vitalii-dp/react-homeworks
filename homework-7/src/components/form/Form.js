import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Spinner from './../common/spinner/Spinner';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(3),
      width: 300,
    },
  },
  button: {
    margin: theme.spacing(1),
  }
}));

const initialState = {
  name: '',
  username: '',
  phone: ''
}

function Form({user, isNewUser, addUser, updateUser, deleteUser}) {
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    setInputValues({...user})
  }, [user]);
  
  const [inputValues, setInputValues] = useState(isNewUser ? initialState : user);
  
  function onSave() {
    if (isNewUser) {
      addUser(inputValues);
      history.push('/users/');
    } else {
      updateUser(user.id, inputValues);
      history.push('/users/');
    }
  }

  function onInputChange({target: {name, value}}) {
    setInputValues({
      ...inputValues,
      [name]: value
    })
  }

  function onDelete() {
    deleteUser(user.id);
    history.push('/users/');
  }

  function checkEmptyInputs() {
    if (inputValues) {
      return Object.values(inputValues).some(input => !input);
    }
    return false;
  }

  return (
    <>
    {isNewUser ? <h1>Add user</h1> : user ? <h1>Edit user</h1> : <h1>User does not exist</h1>}
    {user ?
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            name="name"
            label="Name"
            defaultValue={user.name}
            variant="outlined"
            onChange={onInputChange}
          />
        </div>
        <div>
          <TextField
            name="username"
            label="Username"
            defaultValue={user.username}
            variant="outlined"
            onChange={onInputChange}
          />
        </div>
        <div>
          <TextField
            name="phone"
            label="Phone"
            defaultValue={user.phone}
            variant="outlined"
            onChange={onInputChange}
          />
        </div>
        <Button className={classes.button} variant="contained" color="primary" disabled={checkEmptyInputs()} onClick={onSave}>Save</Button>
        <Button className={classes.button} variant="contained" color="primary" onClick={() => history.goBack()}>Cancel</Button>
        <Button className={classes.button} variant="contained" color="primary" disabled={isNewUser} onClick={onDelete}>Delete</Button>
      </form>
      : <Spinner />}
    </>
  )
}

const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  const user = id == 'add' ? initialState : state.users.find(user => user.id == id);
  const isNewUser = id == 'add';

  return {
    user,
    isNewUser
  };
};

export default withRouter(connect(mapStateToProps)(Form));
