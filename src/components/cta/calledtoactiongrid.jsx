import "./calledtoactiongrid.css";
import appImages from "../../Globals/AppImages";

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
                        <button className="cta-instagram-btn">View Instagram     <img src={appImages?.ARROW_LOGO} alt="arrow-logo" />
                        </button>
                    </div>
                </div>

                {/* Right side image grid */}
                <div className="cta-parent-grid">

 
                    <div className="cta-image-grid-1">
                        <div class="item item1"> <img src="/Rectanglefive.svg" alt="" className="one" /></div>
                        <div class="item item2"><img src="/Rectanglefour.svg" alt="" className="two" /> </div>


                    </div>
                    <div className="cta-image-grid-2">
                        <div class="item item3"> <img src={appImages?.Grid_IMG_5} alt="img-3" className="three" /></div>
                        <div class="item item4"> <img src={appImages?.Grid_IMG_4} alt="img-4" className="four" />  </div>
                        <div class="item item5"> <img src={appImages?.Grid_IMG_3} alt="img-5" className="five" /></div>

                    </div>



                    <div className="cta-mobile-image-grid-2">

                        <div className="grid-for-mobile">    
                        <div class="item item5">  <img src={appImages?.Grid_IMG_3}  alt="" className="mobile-five" /></div> 
               
                             <div class="item item4"> <img src={appImages?.Grid_IMG_4}  alt="" className="mobile-four" />  </div>

                        </div>  
                        
                        <div class="item item3">  <img src={appImages?.Grid_IMG_5} alt="" className="mobile-three" /></div>


                    </div>

                </div>

            </div>
        </div>
    );
};

export default Calledtoaction;
