import React, { useState } from 'react'

function ContactsForm({toggleForm, addContact}) {
  const initialInputs = {
    name: '',
    surname:  '',
    phone: ''
  }
  const initialValidation = {
    isValid: {
      name: false,
      surname: false,
      phone: false,
    },
    isFormValid: false
  }

  const [inputValues, setInputValues] = useState(initialInputs);
  const [isInputValid, setIsInputValid] = useState(initialValidation);

  function onInputChange ({target: {name, value}}) {
    setInputValues({
        ...inputValues,
        [name]: value
    })

    validateForm(name, value);
  }

  function validateForm(name, value) {
    const isValidRaw = {
      ...isInputValid.isValid,
      [name]: validateInput(name, value),
  };

    setIsInputValid({
      isValid: isValidRaw,
      isFormValid: !Object.keys(isValidRaw).some(key => !isValidRaw[key])
    })
  }

  function validateInput(name, value) {
    const phoneReg = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s/0-9]*$/g;
    switch(name) {
      case 'name':
        return !!value;
      case 'surname':
        return !!value;
      case'phone':
        return (!!value && phoneReg.test(value));
      default:
        return !!value;
    }
  }

  function onSave() {
    addContact(inputValues);
    setInputValues(initialInputs);
    setIsInputValid(initialValidation);
  }

  return (
    <div className="container">
      <div className="form-container">
        <form action="">
          <div className="form-group">
            <label htmlFor="name">First name:</label>
            <input
              type="text"
              name="name"
              value={inputValues.name}
              onChange={onInputChange}
              className={isInputValid.isValid.name ? "form-control" : "form-control border border-danger"}
              placeholder="First name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="surname">Last name:</label>
            <input
              type="text"
              name="surname"
              value={inputValues.surname}
              onChange={onInputChange}
              className={isInputValid.isValid.surname ? "form-control" : "form-control border border-danger"}
              placeholder="Last name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              name="phone"
              value={inputValues.phone}
              onChange={onInputChange}
              className={isInputValid.isValid.phone ? "form-control" : "form-control border border-danger"}
              placeholder="Phone"
            />
          </div>
          <button type="button" className="btn btn-primary" disabled={!isInputValid.isFormValid} onClick={onSave}>Save</button>
          <button type="button" className="btn btn-primary" onClick={toggleForm}>Cancel</button>
        </form>
      </div>
    </div>
  )
}

export default ContactsForm;
