import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import '../../App.css';

function ContactForm() {
  //hook
  // clear input field on the component loading
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;
  //initial state is an empty string
  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(e) {
    //target email <input> element
    if (e.target.name === 'email') {
      //store return value in "isValid"
      const isValid = validateEmail(e.target.value);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      //check "message" and name "form" values
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    //only update if valid
    if (!errorMessage) {
      //... spread operator to retain the other key-value pairs in the object (otherwise would only contain name:value)
      //uses setFormState function to update formState value for the name property
      //.name refers to name attribute not name key
      //use [] to create dynamic property names
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }


  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section className="row">
      <div className="col s12 m6">
        <h2 className="center" id="contact" data-testid="h1tag">Contact me</h2>

        <h6 className="center" htmlFor="email">Email address: jlmulder2014@gmail.com</h6>
        <h6 className="center" htmlFor="email">Phone Number: 510.766.6583</h6>
      </div>
      <div className="col s12 m6">
        <h2 className="center" id="contact" data-testid="h1tag">Send Email</h2>
        <form id="contact-form" onSubmit={handleSubmit}>
          <div>
            <label className="white-text" htmlFor="name">Name:</label>
            <input className="input" type="text" name="name" defaultValue={name} onBlur={handleChange} />
          </div>
          <div>
            <label className="white-text" htmlFor="email">Email address:</label>
            <input className="input" type="email" name="email" defaultValue={email} onBlur={handleChange} />
          </div>
          <div>
            <label className="white-text" htmlFor="message">Message:</label>
            <textarea className="input" name="message" rows="5" defaultValue={message} onBlur={handleChange} />
          </div>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <button className="btn-small cyan" type="submit" data-testid="button">Submit</button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm;