import React, { Component } from 'react'
import ContactBookItem from '../ContactBookItem/ContactBookItem'
import './ContactBookList.css';


export default class ContactBookList extends Component {
  render() {
    const {contacts, onDelete} = this.props;
    return (
      <>
        {contacts.map(contact => {
          return <ContactBookItem key={contact.id} contact={contact} onDelete={() => onDelete(contact.id)}/>;
        })}
      </>
    )
  }
}
