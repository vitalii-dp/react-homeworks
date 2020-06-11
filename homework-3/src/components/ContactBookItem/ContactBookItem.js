import React, { Component } from 'react'

export default class ContactBookItem extends Component {

  onItemClick = () => {
    this.props.fillEditedContact(this.props.contact);
  }

  render() {
    const {contact} = this.props;
    return (
      <tr onClick={this.onItemClick}>
        <td>{contact.firstName}</td>
        <td>{contact.lastName}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
      </tr>
    )
  }
}
