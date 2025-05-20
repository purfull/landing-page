import './Navbar.css';
import { useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';
import HalalLogo from "/halal-logo.png"

const NavBarComp = ({ onHomeClick, onAboutClick, onTestimonialsClick, onMenuClick }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div>
            <div className="navbar-component">
                <div className="navbar-logo">
                    <img src="/downstairsLOGO.png" alt="Logo" />
                </div>

                {/* Desktop Links */}
                <div className="navbar-links">
        <div className="navbar-links-item" style={{ color: '#442a27' }}>Home</div>
        <div className="navbar-links-item" onClick={onAboutClick}>About</div>
        <div className="navbar-links-item" onClick={onTestimonialsClick}>Testimonials</div>
        <button 
          onClick={() => {
    const link = document.createElement('a');
    link.href = '/Downstairs Menu (Strictly not for print).pdf'; 
    link.download = 'Downstairs Menu (Strictly not for print).pdf';
    link.click();
  }} className="navbar-links-button" >View Menu</button>
      </div>

                {/* Mobile Hamburger Icon */}
                <div className="navbar-hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <MenuOutlined style={{ fontSize: '24px' }} />
                </div>

                {/* Mobile Dropdown */}
                {isMenuOpen && (
                    <div className="navbar-mobile-menu">
          <div className="navbar-mobile-item" >Home</div>
          <div className="navbar-mobile-item" onClick={() => { onAboutClick(); setIsMenuOpen(false); }}>About</div>
          <div className="navbar-mobile-item" onClick={() => { onTestimonialsClick(); setIsMenuOpen(false); }}>Testimonials</div>
          <button 
          onClick={() => {
    const link = document.createElement('a');
    link.href = '/Downstairs Menu (Strictly not for print).pdf'; 
    link.download = 'Downstairs Menu (Strictly not for print).pdf';
    link.click();
  }}
   className="navbar-mobile-button" >View Menu</button>
        </div>
                )}
            </div>


            <div className='coffee-group-container'>
                <div className='downstairs-cake-container'>
                    <button className='down-stairs-button'>Down stairs</button>
                    <div className='premium-bakes'>Premium Bakes.</div>
                    <div style={{ display: "flex" }}>
                        <div>
                            <div className='honest-brews'>Honest Brews.</div>
                            <img className='coffee-cup hero-text-underline' src={'/UnderLine.png'} alt="Coffee Cup" />
                        </div>
                        <span className='premium-bakes' style={{ fontSize: '30px', marginLeft: '5px', marginBottom: "0" }}>Daily</span>

                    </div>
                    <div className='rituals-container'>Rituals.</div>
                    <button onClick={() => {
    const link = document.createElement('a');
    link.href = '/Downstairs Menu (Strictly not for print).pdf'; 
    link.download = 'Downstairs Menu (Strictly not for print).pdf';
    link.click();
  }} className='navbar-links-button'>View Our Menu</button>


                </div>

                <div style={{textAlign: 'center'}}>
                    <img className='coffee-cup' src={'/CofeeGrp.png'} alt="Coffee Cup" />
                </div>

            </div>

            <div style={{ position: 'relative' }}>
            <img className='halal-logo' src={HalalLogo} alt="" />
                <div class="about-section">
                    <h2>About Downstairs</h2>
                    <p className='about-para'>Downstairs is your daily escape. A curated cafe experience where premium bakes meet honest brews.</p>

                    <div class="cards">
                        <div class="card-container">
                            <div class="card">
                                <img src="https://img.icons8.com/ios/50/croissant.png" alt="croissant" width="40" />
                                <h3 style={{ color: "#4B2E2B" }}>Premium Quality</h3>
                                <p style={{ color: "#6F4E37" }}> Every pastry tells a story – ours begin with the finest ingredients, baked fresh each day.</p>
                            </div>
                        </div>
                        <div class="card-container">
                            <div class="card">
                                <img src="https://img.icons8.com/ios/50/coffee.png" alt="coffee" width="40" />
                                <h3 style={{ color: "#4B2E2B" }}>Honest Brews</h3>
                                <p style={{ color: "#6F4E37" }}>Our coffee begins at the source – with ethically traded beans, roasted to bring out bold, balanced flavors.</p>
                            </div>
                        </div>
                        <div class="card-container">
                            <div class="card">
                                <img src="https://img.icons8.com/ios/50/sun.png" alt="rituals" width="40" />
                                <h3 style={{ color: "#4B2E2B" }}>Daily Rituals</h3>
                                <p style={{ color: "#6F4E37" }}>Whether you're starting your morning or pausing mid-day, Downstairs is your space for meaningful moments.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="quote-section">
                    <div class="quote-text">
                        "We believe in crafting moments that matter,<br />
                        one cup and one plate at a time."
                    </div>
                    <div class="quote-img">
                        <img src="/CoffeeFillImg.png" alt="Coffee pour" />
                    </div>
                </div>
            </div>


        </div>
    )
};

export default NavBarComp;