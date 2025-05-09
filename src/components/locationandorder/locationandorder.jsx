import "./locationandorder.css";

const LocationAndOrder = () => {
    return (
        <div className="location-order-container">

            <div className="info-section">

                <div className="map-container">   <iframe
                    src="https://www.google.com/maps?q=-24.676833,25.936250&output=embed"
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
                        <img src="/cloud.svg" alt="cloud-img" className="icon-cloud" />
                    </div>



                    <div className="location-info">
                        <span className="location-header">
                            <img src="/location.svg" alt="location" className="icon" />
                            Location
                        </span>



                        <div className="map-container-mobile">   <iframe
                            src="https://www.google.com/maps?q=-24.676833,25.936250&output=embed"
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
                            <img src="/clock.svg" alt="clock" className="icon" />
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
                <button
  className="whatsapp-button"
  onClick={() => {
    const phoneNumber = '919360389903'; // Replace with your number in international format, e.g., '26771234567'
    const message = encodeURIComponent('Hi, I would like to place an order!');
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank');
  }}
  style={{cursor: "pointer"}}
>
  <img src="/whatsapp.svg" alt="WhatsApp logo" className="icon" />
  Order Now on WhatsApp
</button>
            </div>

        </div>
    );
};

export default LocationAndOrder;
