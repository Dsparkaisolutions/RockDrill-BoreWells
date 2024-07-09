import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobilenumber: '',
    enquiry: '',
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send form data to the PHP backend
    fetch('http://localhost/RockDrill-BoreWells/src/components/Contact/Contact.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(formData).toString(),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === "Registered successfully.") {
          setShowPopup(true);
          setFormData({
            name: '',
            email: '',
            mobilenumber: '',
            enquiry: '',
          });
          setTimeout(() => {
            setShowPopup(false);
          }, 3000);
        } else {
          console.error(data.message);
        }
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  return (
    <div>
      <section className='c-wrapper'>
        <div className="paddings innerWidth c-container">
          <div className="c-left">
            <form onSubmit={handleSubmit} className="contact-form">
              <h2 className='orangeText'>Contact for any Enquiry</h2>
              <div className="form-group">
                <label htmlFor="name" className='primaryText'>Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className='primaryText'>Email ID:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="mobilenumber" className='primaryText'>Mobile Number:</label>
                <input
                  type="tel"
                  id="mobilenumber"
                  name="mobilenumber"
                  value={formData.mobilenumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="enquiry" className='primaryText'>Enquiry Details:</label>
                <textarea
                  id="enquiry"
                  name="enquiry"
                  value={formData.enquiry}
                  onChange={handleChange}
                  placeholder='up to 500 words'
                  maxLength="3000"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-button">Send</button>
            </form>
          </div>

          <div className="flexCenter c-right">
            <div className="contact-image-container">
              <img src="./rockhomebang.jpeg" alt="contact" />
            </div>
          </div>
        </div>
      </section>

      {showPopup && (
        <div className="popup">
          <p>Your enquiry has been sent</p>
        </div>
      )}
    </div>
  );
};

export default Contact;
