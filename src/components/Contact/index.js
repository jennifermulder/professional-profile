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
      console.log(isValid);
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
  // console.log(formState);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <section className="row">
      <div class="col s12 m6">
        <h2 class="center" id="contact" data-testid="h1tag">Contact me</h2>

        <h6 class="center" htmlFor="email">Email address: jlmulder2014@gmail.com</h6>
        <h6 class="center" htmlFor="email">Phone Number: 510.766.6583</h6>
      </div>
      <div class="col s12 m6">
        <h2 class="center" id="contact" data-testid="h1tag">Send Email</h2>
        <form id="contact-form" onSubmit={handleSubmit}>
          <div>
            <label class="white-text" htmlFor="name">Name:</label>
            <input class="input" type="text" name="name" defaultValue={name} onBlur={handleChange} />
          </div>
          <div>
            <label class="white-text" htmlFor="email">Email address:</label>
            <input class="input" type="email" name="email" defaultValue={email} onBlur={handleChange} />
          </div>
          <div>
            <label class="white-text" htmlFor="message">Message:</label>
            <textarea class="input" name="message" rows="5" defaultValue={message} onBlur={handleChange} />
          </div>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <button class="btn-small cyan" type="submit" data-testid="button">Submit</button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm;