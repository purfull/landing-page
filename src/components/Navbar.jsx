import './Navbar.css';

const NavBarComp = () => {
    return (
        <div>
            <div className="navbar-component">
                <div className='navbar-logo' >
                    <img src="/downstairsLOGO.png" />
                </div>
                <div className='navbar-links'>
                    <div className='navbar-links-item'>
                        Home
                    </div>
                    <div className='navbar-links-item'>
                        About
                    </div>
                    <div className='navbar-links-item'>Testimonials</div>
                    <button className='navbar-links-button'>View Menu</button>
                </div>


            </div >

            <div className='coffee-group-container'>
                <div className='downstairs-cake-container'>
                    <button className='down-stairs-button'>Down stairs</button>
                    <div className='premium-bakes'>Premium Bakes.</div>
                    <div>
                        <div>
                            <div className='honest-brews'>Honest Brews.</div>
                            <img className='coffee-cup' src={'/UnderLine.png'} alt="Coffee Cup" width={'173px'} />
                        </div>
                        <span style={{ fontSize: '30px', marginLeft: '5px' }}>Daily</span>

                    </div>
                    <div className='rituals-container'>Rituals.</div>
                    <button className='navbar-links-button'>View Menu</button>


                </div>

                <div>
                    <img className='coffee-cup' src={'/CofeeGrp.svg'} alt="Coffee Cup" />
                </div>

            </div>

            <div style={{ position: 'relative' }}>
                <div class="about-section">
                    <h2>About Downstairs</h2>
                    <p>Downstairs is your daily escape. A curated cafe experience where premium bakes meet honest brews.</p>

                    <div class="cards">
                        <div class="card">
                            <img src="https://img.icons8.com/ios/50/croissant.png" alt="croissant" width="40" />
                            <h3 style={{ color: "#4B2E2B" }}>Premium Quality</h3>
                            <p style={{color: "#6F4E37"}}> Every pastry tells a story – ours begin with the finest ingredients, baked fresh each day.</p>
                        </div>
                        <div class="card">
                            <img src="https://img.icons8.com/ios/50/coffee.png" alt="coffee" width="40" />
                            <h3 style={{ color: "#4B2E2B" }}>Honest Brews</h3>
                            <p style={{color: "#6F4E37"}}>Our coffee begins at the source – with ethically traded beans, roasted to bring out bold, balanced flavors.</p>
                        </div>
                        <div class="card">
                            <img src="https://img.icons8.com/ios/50/sun.png" alt="rituals" width="40" />
                            <h3 style={{ color: "#4B2E2B" }}>Daily Rituals</h3>
                            <p style={{color: "#6F4E37"}}>Whether you're starting your morning or pausing mid-day, Downstairs is your space for meaningful moments.</p>
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