import React, { useState } from 'react';
import { TdsField, TdsButton } from '@trv-tds/react';

function NewConnection({newConnection}) {
    const errorMessages = {
    EMPTY_FIRST_NAME: "This needs a first name.",
    EMPTY_LAST_NAME: "This needs a last name."
  };

  const [form, setForm] = useState({
    firstname: "",
    lastname: ""
  })

  const [errors, setErrors] = useState({
    firstname: null,
    lastname: null
  })

  const isEmpty = (val) => val.trim().length === 0

  const validateForm = () => {
    let isValid = true
    let errors = {};

    if (isEmpty(form.firstname)) {
      errors["firstname"] = errorMessages.EMPTY_FIRST_NAME
      isValid = false
    }

    if (isEmpty(form.lastname)) {
      errors["lastname"] = errorMessages.EMPTY_LAST_NAME
      isValid = false
    }
    setErrors(errors)
    return isValid
  }

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
    setErrors({ ...errors, [event.target.name]: null })
  }

  const handleSubmit = (event) => {
    event.preventDefault() // prevents reloading of the page
    validateForm()
    newConnection(form)
  }
  return (
    <section>
      <div>
        <h2>Add a New Connection</h2>
        <div style={{ maxWidth: "25rem" }}>
          <h1> Connection Name</h1>
          <form noValidate onSubmit={handleSubmit}>
            <TdsField
              label="First Name"
              alert={errors.firstname && "error"}
              message={errors.firstname}>
              <input
                type="text"
                className="tds-field__input"
                name="firstname"
                onChange={handleChange}
                value={form.firstname}
              />
            </TdsField>
            <TdsField
              label="Last Name"
              alert={errors.lastname && "error"}
              message={errors.lastname}>
              <input
                type="text"
                className="tds-field__input"
                name="lastname"
                onChange={handleChange}
                value={form.lastname}
              />
            </TdsField>
            <TdsButton
              variant="primary"
              buttonType="submit"
              className="tds-margin-top-large">
              Add New Connection
            </TdsButton>
          </form>
        </div>
      </div>
      <br />
    </section>
  );
}

export default NewConnection;


