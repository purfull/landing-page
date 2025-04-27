import appImages from "../../Globals/AppImages";
import "./locationandorder.css";

const LocationAndOrder = () => {
    return (
        <div className="location-order-container">

            <div className="info-section">

                <div className="map-container">   <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252533.52378786818!2d76.59318959453125!3d8.515269100000022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bd66dc4f9ded%3A0x4d6d57767b9fdae8!2sStarbucks!5e0!3m2!1sen!2sin!4v1745393184639!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: " 1px solid #A47149", borderRadius: "15px" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe></div>

                <div className="address-section">

                    <div className="visit-button-wrapper">
                        <button className="visit-button">Visit Us</button>
                        <img src={appImages?.CLOUD_IMG} alt="cloud-img" className="icon-cloud" />

                    </div>



                    <div className="location-info">
                        <button className="location-header">
                            <img src={appImages?. LOCATION_IMG} alt="location" className="icon" />
                            Location
                        </button>



                        <div className="map-container-mobile">   <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252533.52378786818!2d76.59318959453125!3d8.515269100000022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bd66dc4f9ded%3A0x4d6d57767b9fdae8!2sStarbucks!5e0!3m2!1sen!2sin!4v1745393184639!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: " 1px solid #A47149", borderRadius: "15px" }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe></div>


                        <span className="address-text">
                            123 Riverwalk Avenue<br />
                            San Antonio, TX 78205<br />
                            United States
                        </span>
                    </div>

                    <div className="operating-hours">
                        <div className="hours-header">
                            <img src={appImages?.CLOCK_LOGO} alt="clock" className="icon" />
                            <span>Hours of Operation</span>
                        </div>

                        <div className="hours-row">
                            <span>Monday - Friday</span>
                            <span>7:00 AM - 8:00 PM</span>
                        </div>
                        <div className="hours-row">
                            <span>Saturday</span>
                            <span>8:00 AM - 9:00 PM</span>
                        </div>
                        <div className="hours-row">
                            <span>Sunday</span>
                            <span>8:00 AM - 6:00 PM</span>
                        </div>
                    </div>

                </div>
            </div>

            <div className="order-section">
                <button className="highlight-button">Order Ahead. Skip the Queue.</button>
                <h1 className="order-heading">Your favourite brew or bite is just a message away.</h1>
                <p className="order-description">
                    Tap below to place your order via WhatsApp - we’ll have it ready when you arrive
                </p>
                <button className="whatsapp-button">
                    <img src={appImages?.WHATSAPP_ICON} alt="WhatsApp logo" className="icon" />
                    Order Now on WhatsApp
                </button>
            </div>

        </div>
    );
};

export default LocationAndOrder;
