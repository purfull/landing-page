import React, { useState } from "react";
import "./footer.css";
import Logo from "../../assets/logo.png";
import instagramIcon from "/instagram.svg";
import facebookIcon from "/facebook.svg";
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
  
    // const { name, email, message } = formData;
  
    // const whatsappMessage = `Hello, my name is ${name}. My email is ${email}. Here is my message:\n\n${message}`;
  
    // const encodedMessage = encodeURIComponent(whatsappMessage);
  
    // const phoneNumber = '919360389903'; 
  
    // const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
    // window.open(whatsappURL, '_blank');
  
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

<div className="" style={{display: "flex"}}>

          <a href="https://www.instagram.com/downstairs_bw?igsh=MWpib3BkNm9vd2dqeg==" target="_blank"><img src={instagramIcon} alt="icons" className="media-icons" /></a>
          <a href="https://www.facebook.com/share/12KER66Uw5R/?mibextid=wwXIfr" target="_blank"><img src={facebookIcon} alt="icons" className="media-icons" /></a>
</div>
          <img src={Mug} alt="coffeemug" className="mug-image" />
        </div>
      <div className="larg-screen-footer">
        <hr className="custom-divider" />
        <p className="copyDesc">&copy; 2025 Downstairs. Halal Certified.</p>
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
        <p className="copyDesc">&copy; 2025 Downstairs. Halal Certified.</p>
      </div>
    </div>
  );
};

export default Footer;
