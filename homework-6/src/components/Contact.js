import React from 'react'

function Contact({contact, deleteContact}) {
  return (
    <tr>
      <td>{contact.name}</td>
      <td>{contact.surname}</td>
      <td>{contact.phone}</td>
      <td><button type="button" className="btn btn-outline-secondary btn-sm" onClick={() => deleteContact(contact.id)}><i className="fas fa-user-minus fa-sm"></i></button></td>
  </tr>
  )
}

export default Contact;
