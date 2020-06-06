import React, { Component } from 'react'

export default class ContactBookItem extends Component {
  render() {
    const {contact, onDelete} = this.props;
    return (
      <tr>
        <td>{contact.firstName}</td>
        <td>{contact.lastName}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
        <td>
          <button type="button" className="btn btn-outline-secondary btn-sm" onClick={onDelete}><i className="fas fa-user-minus fa-sm"></i></button>
        </td>
      </tr>
    )
  }
}
