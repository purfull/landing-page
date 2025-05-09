import "./calledtoactiongrid.css";

const Calledtoaction = () => {
    return (
        <div className="cta-section">
            <div className="cta-wrapper">
                {/* Left side text section */}
                <div className="cta-text-area">
                    <div className="cta-text-content"> 
                        <button className="cta-category-btn">Ambience & Lifestyle</button>
                        <h1 className="cta-heading">More than a café. It's a mood.</h1>
                        <p className="cta-description">Step inside and discover a space curated for slow sips, inspired thinking, and meaningful connection. Every corner of Downstairs is designed to reflect comfort, creativity, and the quiet luxury of everyday rituals.</p>
                        <a target="_blank" href="https://www.instagram.com/downstairs_bw?igsh=MWpib3BkNm9vd2dqeg==" className="cta-instagram-btn" style={{textDecoration: "none"}}>View Instagram     <img src="/Frame (3).svg" alt="arrow-logo" />
                        </a>
                    </div>
                </div>

                {/* Right side image grid */}
                <div className="cta-parent-grid">
 
                    <div className="cta-image-grid-1" style={{width: "100%"}}>
                        <div class="item item1" style={{width: "100%"}}> <img src="/Rectanglefive.png" alt="" className="one" style={{width: "100%"}}/></div>
                        <div class="item item2" style={{width: "100%"}}><img src="/Rectanglefour.png" alt="" className="two" style={{width: "100%"}} /> </div>

                    </div>
                    <div className="cta-image-grid-2">
                        <div class="item item3"> <img src="/Rectangleone.png" alt="" className="three" /></div>
                        <div class="item item4"  style={{textAlign: "end"}}> <img src="/Rectanglethree.png" alt="" className="four" />  </div>
                        <div class="item item5"> <img src="/Rectangletwo.png" alt="" className="five" /></div>

                    </div>



                    <div className="cta-mobile-image-grid-2">

                        <div className="grid-for-mobile">    
                        <div class="item item5"> <img src="/Rectangletwo.png" alt="" className="mobile-five" /></div> 
               
                             <div class="item item4"> <img src="/Rectanglethree.png" alt="" className="mobile-four" />  </div>

                        </div>  
                        
                        <div class="item item3"> <img src="/Rectangleone.png" alt="" className="mobile-three" /></div>

                        {/* <div class="item item5"> <img src="/Rectangletwo.svg" alt="" className="mobile-five" /></div>  */}
                        {/* <div class="item item3"> <img src="/Rectangleone.svg" alt="" className="mobile-three" /></div>
                    //  <div class="item item4"> <img src="/Rectanglethree.svg" alt="" className="mobile-four" />  </div>
                     <div class="item item5"> <img src="/Rectangletwo.svg" alt="" className="mobile-five" /></div>  */}

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Calledtoaction;
