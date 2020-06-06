import React, { Component } from 'react'
import ContactBookList from '../ContactBookList/ContactBookList'
import ContactBookForm from '../ContactBookForm/ContactBookForm'
import './ContactBook.css'

export default class ContactBook extends Component {
  state = {
    contacts: [
      {
        id: 1,
        firstName: 'Leanne',
        lastName:  'Graham',
        email: 'Sincere@april.biz',
        phone: '1-770-736-8031 x56442',
      },
      {
        id: 2,
        firstName: 'Ervin',
        lastName: 'Howell',
        email: 'Shanna@melissa.tv',
        phone: '010-692-6593 x09125',
      },
      {
        id: 3,
        firstName: 'Clementine',
        lastName: 'Bauch',
        email: 'Nathan@yesenia.net',
        phone: '1-463-123-4447',
      },
      {
        id: 4,
        firstName: 'Patricia',
        lastName: 'Lebsack',
        email: 'Julianne.OConner@kory.org',
        phone: '493-170-9623 x156',
      },
      {
        id: 5,
        firstName: 'Chelsey',
        lastName: 'Dietrich',
        email: 'Lucio_Hettinger@annie.ca',
        phone: '(254)954-1289',
      },
      {
        id: 6,
        firstName: 'Mrs. Dennis',
        lastName: 'Schulist',
        email: 'Karley_Dach@jasper.info',
        phone: '1-477-935-8478 x6430',
      },
      {
        id: 7,
        firstName: 'Kurtis',
        lastName: 'Weissnat',
        email: 'Telly.Hoeger@billy.biz',
        phone: '210.067.6132',
      },
      {
        id: 8,
        firstName: 'Nicholas',
        lastName: 'Runolfsdottir V',
        email: 'Sherwood@rosamond.me',
        phone: '586.493.6943 x140',
      },
      {
        id: 9,
        firstName: 'Glenna',
        lastName: 'Reichert',
        email: 'Chaim_McDermott@dana.io',
        phone: '(775)976-6794 x41206',
      },
      {
        id: 10,
        firstName: 'Clementina',
        lastName: 'DuBuque',
        email: 'Rey.Padberg@karina.biz',
        phone: '024-648-3804',
      }
    ],
    isFormVisible: false
  }

  toggleForm = () => {
    this.setState({
      isFormVisible: !this.state.isFormVisible
    })
  }

  saveContact = contact => {
    console.log(contact);
    contact.id = Date.now().toString(16);

    this.setState({
      contacts: [...this.state.contacts, contact]
    });

    this.toggleForm();
  }

  deleteContact = id => {
    this.setState(({contacts}) => {
      const updatedContacts = contacts.filter(item => item.id !== id);
      return {
        contacts: updatedContacts
      }
    })
  }

  render() {
    const hiddenForm =
    <tr>
      <td colSpan="5">
        <button type="button" className="btn btn-secondary btn-sm" onClick={this.toggleForm}>Show Form</button>
      </td>
    </tr>

    return (
      <table className="contact-book">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tfoot>
          {this.state.isFormVisible ? <ContactBookForm onSave={this.saveContact} onCancel={this.toggleForm}/> : hiddenForm}
        </tfoot>
        <tbody>
          <ContactBookList onDelete={this.deleteContact} contacts={this.state.contacts}/>
        </tbody>
      </table>
    )
  }
}
