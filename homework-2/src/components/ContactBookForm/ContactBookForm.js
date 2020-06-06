import React, { Component } from 'react'
import './ContactBookForm.css'

export default class ContactBookForm extends Component {
  state = {
    inputValues: {
      firstName: '',
      lastName:  '',
      email: '',
      phone: '',
    },
    isValid: {
      firstName: false,
      lastName:  false,
      email: false,
      phone: false,
    },
    isFormValid: false
  }

  onInputChange = ({target: {name, value}}) => {
    const {inputValues} = this.state;
    this.setState({
      inputValues: {
        ...inputValues,
        [name]: value
      }
    })

    this.validateForm(name, value);
  }

  validateForm = (name, value) => {
    const isValid = {
      ...this.state.isValid,
      [name]: this.validateInput(name, value),
  };

    this.setState({     
      isValid,
      isFormValid: !Object.keys(isValid).some(key => !isValid[key])
    })
  }

  onSaveClick = () => {
    this.props.onSave({...this.state.inputValues});
  }

  validateInput(name, value) {
    const emailReg = /^\S+@\S+$/g;
    const phoneReg = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s/0-9]*$/g;
    switch(name) {
      case 'firstName':
        return !!value;
      case 'lastName':
        return !!value;
      case 'email':
        return (!!value && emailReg.test(value));
      case'phone':
        return (!!value && phoneReg.test(value));
      default:
        return !!value;
    }
  }

  render() {
    const {inputValues, isValid, isFormValid} = this.state;
    return (
      <tr>
        <td>
          <input
            className={inputValues.firstName ? "" : "border border-danger"}
            type="text"
            name="firstName"
            value={inputValues.firstName}
            onChange={this.onInputChange}
          />
        </td>
        <td>
          <input
            className={isValid.lastName ? "" : "border border-danger"}
            type="text"
            name="lastName"
            value={inputValues.lastName}
            onChange={this.onInputChange}
          />
        </td>
        <td>
          <input
            className={isValid.email ? "" : "border border-danger"}
            type="text"
            name="email"
            value={inputValues.email}
            onChange={this.onInputChange}
          />
        </td>
        <td>
          <input
            className={isValid.phone ? "" : "border border-danger"}
            type="text"
            name="phone"
            value={inputValues.phone}
            onChange={this.onInputChange}
          />
        </td>
        <td>
          <button type="button" className="btn btn-secondary btn-sm" onClick={this.onSaveClick} disabled={!isFormValid}>Save</button>
          <button type="button" className="btn btn-secondary btn-sm" onClick={this.props.onCancel}>Cancel</button>
        </td>
      </tr>
    )
  }
}
