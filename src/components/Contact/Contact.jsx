import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    enquiry: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic here
    console.log(formData);
  };

  return (
    <div>
      <section className='c-wrapper'>
        <div className="paddings innerWidth  c-container">
          {/* leftside */}
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
                <label htmlFor="mobile" className='primaryText'>Mobile Number:</label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
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
                  maxLength="3000" // 500 words is approximately 3000 characters
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-button">Send</button>
            </form>
          </div>

          {/* right-side */}
          <div className="flexCenter c-right">
            <div className="contact-image-container">
              <img src="./rockhomebang.jpeg" alt="contact" />
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Contact;
