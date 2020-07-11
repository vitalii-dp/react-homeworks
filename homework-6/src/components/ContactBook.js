import React from 'react'
import { connect } from 'react-redux';
import ContactsList from './ContactsList'
import ContactsForm from './ContactsForm'
import {toggleForm, addContact, deleteContact} from '../store/actions/actions'

function ContactBook({isFormVisible, toggleForm, addContact, deleteContact}) {
  return (
    <div className="row">
      <div className="col-8">
        <ContactsList deleteContact={deleteContact}/>
        <button type="button" className="btn btn-primary" onClick={toggleForm} disabled={isFormVisible}>Add new contact</button>
      </div>
      <div className="col">
        {isFormVisible ? <ContactsForm toggleForm={toggleForm} addContact={addContact}/> : null }
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isFormVisible: state.isFormVisible
  }
}

const mapDispatchToProps = {
  toggleForm,
  addContact,
  deleteContact
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactBook);
