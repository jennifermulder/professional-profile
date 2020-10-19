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

  var form = document.forms["contact"];

  function handleSubmit(e) {
    e.preventDefault();
    // Set Initial Variables
		// var target = e.target || e.srcElement;
		var to = 'jlmulder2014@gmail.com';
		var uri = 'mailto:' + to;
		var body = '';

		// Set Form Values to Variables
		var name = "jenn";
		var subject = "jenn";
		var phone = "510";
    var message = "jenn";
    
    // var name = target.elements['name'].value;
		// var subject = target.elements['subject'].value;
		// var phone = target.elements['phone'].value;
		// var message = target.elements['message'].value;

		// Build Body / Message with all Input Fields
		body += message + "\r\n\r\n";
		body += "Name: " + name + "\r\n";
		body += "Phone Number: " + phone + "\r\n";

		// Build final Mailto URI
		uri += '?subject=' + encodeURIComponent(subject);
		uri += '&body=' + encodeURIComponent(body);

		// Open Mailto in New Window / Tab
		window.open(uri,'_blank');
  }

  
	// form.addEventListener('submit',handleSubmit,false);

	// function contact_submit(e) {
	// 	// Stop Form From Submitting
	// 	e.preventDefault();

		
	// }

  return (
    <section className="row bg-text">
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