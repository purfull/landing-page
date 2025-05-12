import React, { useState } from "react";
import "./footer.css";
import Logo from "../../assets/logo.png";
import MediaIcon from "../../assets/medias.png";
import Mug from "../../assets/mug.png";

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
    alert("Your message has been sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-section">
      <div className="left-side">
        <div className="contactImage-container">
          <img src={Logo} alt="logo" className="logo-image" />

          <p class="logoDesc">
            Downstairs is your daily escape. A curated cafe
            <span class="line-break">
              experience where premium bakes meet honest brews.
            </span>
          </p>

          <img src={MediaIcon} alt="icons" className="media-icons" />
          <img src={Mug} alt="coffeemug" className="mug-image" />
        </div>
        <div className="larg-screen-footer">
          <hr className="custom-divider" />
          <p className="copyDesc">&copy; 2025 Downstairs. Halaal Certified.</p>
        </div>
      </div>

      <form className="contactForm" onSubmit={handleSubmit}>
        <h2 className="formTitle">Send us a message</h2>

        <div className="form-group">
          <label>Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label>E-mail</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="What would you like to say?"
            required
          />
        </div>

        <div className="form-group">
          <button type="submit">Send Message</button>
        </div>
      </form>

      <div className="small-screen-footer">
        <hr className="custom-divider" />
        <p className="copyDesc">&copy; 2025 Downstairs. Halaal Certified.</p>
      </div>
    </div>
  );
};

export default Footer;
