import React, { useState } from "react";
import "./footer.css";
import contactImage from "../../assets/contact-image.png";
import CopyRight from "../../assets/copyright.png";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
    alert("Your message has been sent!");
  };

  return (
    <div className="contact-section">
      <div className="image-section">
        <img src={contactImage} alt="Contact" className="contact-image" />
        <img src={CopyRight} alt="copyrightImg" className="copyright-image" />
      </div>

      <form className="contactForm" onSubmit={handleSubmit}>
        <h2 className="formTitle">Send us a message</h2>

        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your e-mail"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="What would you like to say?"
            required
          ></textarea>
        </div>

        <div className="form-group">
          <button type="submit">Send Message</button>
        </div>
      </form>
    </div>
  );
};

export default Footer;
