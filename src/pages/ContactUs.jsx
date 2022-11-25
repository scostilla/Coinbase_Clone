import React, { useState } from "react";
import './ContactUs.css';

const ContactUs = () => {

  const [data, setData] = useState({
    firstName: '',
    lastName:'',
    email:'',
    message:''
  })

  const handleInputChange = (e) =>{
    setData({
      ...data,
      [e.target.name] : e.target.value
    })
  }

  const sendForm = (e) => {
    e.preventDefault();
    alert("First Name:" + data.firstName + " - Last Name:" + data.lastName + " - Email:" + data.email + " - Message:" + data.message);
  };

  return (
    <div>
        <form onSubmit={sendForm}>
          <h5>First Name</h5>
          <input
            type="text"
            onChange={handleInputChange}
            name="firstName"
            className="form-control"
            
          />

          <h5>Last Name</h5>
          <input
            type="text"
            name="lastName"
            onChange={handleInputChange}
          />

          <h5>E-Mail</h5>
          <input
            type="text"
            name="email"
            onChange={handleInputChange}
          />

          <h5>Message</h5>
          <textarea
            name="message"
            onChange={handleInputChange}
          /><p/>
          <button
            type="submit"
            onClick={sendForm}
            className="login__signInButton"
          >
            Send Message
          </button>
        </form>
    </div>
  );
};

export default ContactUs;
