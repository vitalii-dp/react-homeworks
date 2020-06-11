import React, { Component } from 'react'
import ContactBookItem from'../ContactBookItem/ContactBookItem'
import './ContactBookList.css'

export default class ContactBookList extends Component {
  render() {
    const {contacts, onDelete, fillEditedContact} = this.props;
    return (
      <>
        {contacts.map(contact => {
          return <ContactBookItem key={contact.id} contact={contact} onDelete={() => onDelete(contact.id)} fillEditedContact={() => fillEditedContact(contact)}/>;
        })}
      </>
    )
  }
}
