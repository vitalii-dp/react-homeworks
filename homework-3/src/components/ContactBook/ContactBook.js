import React, { Component } from 'react'
import ContactBookList from '../ContactBookList/ContactBookList'
import ContactBookForm from '../ContactBookForm/ContactBookForm'
import './ContactBook.css'


export default class ContactBook extends Component {
  state = {
    contacts: [],
    inputValues: {
      id: null,
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    },
    isFormInEditMode: false,
  }

  async componentDidMount() {
    const list = await this.getData();
    this.setState(() => {
      const usersInfo = this.parseData(list);
      return {
        contacts: usersInfo
      }
    })
  }

  async getData() {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
    return data;
  }

  parseData(data) {
    return data.map(item => {
      return {
        id: item.id,
        firstName: item.name.split(' ')[0],
        lastName:  item.name.split(' ')[1],
        email: item.email,
        phone: item.phone
      }
    })
  }

  postData(data) {
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify({
        name: `${data.firstName} ${data.lastName}`,
        email: data.email,
        phone: data.phone
      })
    })
    .then(response => response.json())
    .then(json => console.log(json))
  }

  changeInput = (name, value) => {
    const {inputValues} = this.state;
    this.setState({
      inputValues: {
        ...inputValues,
        [name]: value
      }
    })
  }

  clearForm = () => {
    this.setState({
      inputValues: {
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
      },
      isFormInEditMode: false,
    })
  }

  saveContact = () => {
    const newContact = {
      ...this.state.inputValues,
      id: Date.now()
    }

    this.setState({
      contacts: [...this.state.contacts, newContact]
    });

    this.clearForm();
    this.postData(newContact);
  }

  deleteContact = () => {
    this.setState(({contacts}) => {
      const updatedContacts = contacts.filter(item => item.id !== this.state.inputValues.id);
      return {
        contacts: updatedContacts
      }
    })
    this.clearForm();

    fetch(`https://jsonplaceholder.typicode.com/users/${this.state.inputValues.id}`, {
      method: 'DELETE'
    })
  }

  updateContact = () => {
    const idx = this.state.contacts.findIndex(el => el.id === this.state.inputValues.id);
    this.setState(() => {
      const updatedContacts = [...this.state.contacts];
      updatedContacts[idx] = {
        id: this.state.inputValues.id,
        ...this.state.inputValues
      };
      return {
        contacts: updatedContacts
      }
    })

    this.clearForm();

    fetch(`https://jsonplaceholder.typicode.com/users/${this.state.inputValues.id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify({
        id: this.state.inputValues.id,
        name: `${this.state.inputValues.firstName} ${this.state.inputValues.lastName}`,
        email: this.state.inputValues.email,
        phone: this.state.inputValues.phone
      })
    })
    .then(response => response.json())
    .then(json => console.log(json))
  }

  fillEditedContact = contact => {
    this.setState({
      inputValues: {
        id: contact.id,
        firstName: contact.firstName,
        lastName: contact.lastName,
        email: contact.email,
        phone: contact.phone,
      },
      isFormInEditMode: true
    })
  }

  render() {
    return (
      <div className="row">
        <div className="col-8">
          <table className="contact-book">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <td colSpan="4" className="text-center">
                  <button type="button" className="btn btn-primary" onClick={this.clearForm}>Add contact</button>
                </td> 
              </tr>
            </tfoot>
            <tbody>
              <ContactBookList
                onDelete={this.deleteContact}
                contacts={this.state.contacts}
                fillEditedContact={this.fillEditedContact}
              />
            </tbody>
          </table>
        </div>
        <div className="col">
          <ContactBookForm
            inputValues={this.state.inputValues}
            isFormInEditMode={this.state.isFormInEditMode}
            changeInput={this.changeInput}
            clearForm={this.clearForm}
            onSave={this.saveContact}
            onDelete={this.deleteContact}
            onContactUpdate={this.updateContact}/>
        </div>
      </div>
    )
  }
}
