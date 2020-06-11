import React, { Component } from 'react'
import './ContactBookForm.css'

export default class ContactBookForm extends Component {

  onInputChange = ({target: {name, value}}) => {
    this.props.changeInput(name, value);
  }

  onSaveClick = (e) => {
    e.preventDefault();
    if (this.props.isFormInEditMode) {
      this.props.onContactUpdate();
    } else {
      this.props.onSave();
    }
  }

  onDeleteClick = () => {
    this.props.onDelete();
  }

  clearForm = () => {
    this.props.clearForm();
  }

  render() {
    const {inputValues, isFormInEditMode} = this.props;
    return (
      <div className="container contact-book-form">
        <header>{isFormInEditMode ? 'Edit contact' : 'Add new contact'}</header>
        <div className="form-container">
          <form action="" onSubmit={this.onSaveClick}>
            <div className="form-group">
              <label htmlFor="firstName">First name:</label>
              <input
                type="text"
                name="firstName"
                value={inputValues.firstName}
                onChange={this.onInputChange}
                className="form-control"
                placeholder="First name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last name:</label>
              <input
                type="text"
                name="lastName"
                value={inputValues.lastName}
                onChange={this.onInputChange}
                className="form-control"
                placeholder="Last name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                value={inputValues.email}
                onChange={this.onInputChange}
                className="form-control"
                placeholder="Email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input
                type="tel"
                name="phone"
                value={inputValues.phone}
                onChange={this.onInputChange}
                className="form-control"
                placeholder="Phone"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
            <button type="button" className="btn btn-primary" onClick={this.clearForm}>Cancel</button>
            <button type="button" className="btn btn-primary" onClick={this.onDeleteClick} disabled={!isFormInEditMode}>Delete</button>
          </form>
        </div>
      </div>
    )
  }
}
