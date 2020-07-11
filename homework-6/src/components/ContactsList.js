import React from 'react'
import { connect } from 'react-redux';
import Contact from './Contact'
import './ContactsList.css'

function ContactsList({contacts, deleteContact}) {
  return (
    <table className="table table-sm">
      <thead className="thead-dark">
        <tr>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Phone</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} deleteContact={deleteContact}/>
      ))}
      </tbody>
    </table>
  )
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts
  }
}

export default connect(mapStateToProps)(ContactsList);
