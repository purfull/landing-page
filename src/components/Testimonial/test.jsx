import React from "react";
import { Carousel } from "antd";
import "./test.css";
import Group4 from "../../assets/Group-4.png";
import Arrow from "../../assets/Arrow_07.png";
import Smile from "../../assets/Misc_04.png";
import Rays from "../../assets/Highlight_04.png";
import TwoArrow from "../../assets/Arrow_07.png";
import Highlight from "../../assets/Highlight_04.png";
import Misc from "../../assets/Misc_04.png";

const testimonials = [
  {
    feedback:
      "Downstairs is my little escape in the middle of a busy day. The coffee's always great, and the staff are super warm—it just feels good to be there.",
    name: "Laziya Vison",
    image: Group4,
  },
  {
    feedback:
      "I didn’t expect to fall in love with a café, but here we are. Downstairs has such a calm vibe, and their food hits the spot every time.",
    name: "Naledi Mokoena",
    image: Group4,
  },
  {
    feedback:
      "This place is like a hug in café form. Chill music, cozy corners, and the kind of coffee that makes you slow down and enjoy it.",
    name: "Sipho Dlamini",
    image: Group4,
  },
  {
    feedback:
      "Whenever I need to think, unwind, or just treat myself, I head to Downstairs. It’s got that comforting energy I didn’t know I needed.",
    name: "Thandiwe Mokoena",
    image: Group4,
  },
  {
    feedback:
      "Honestly, I just came in for a quick coffee—and now it’s my favorite spot in the city. Everything here feels intentional, in the best way.",
    name: "Karabo Nkosi",
    image: Group4,
  },
  {
    feedback:
      "Downstairs isn’t just a café, it’s a vibe. Good people, even better coffee, and always the perfect place to take a break.",
    name: "Lerato Mahlangu",
    image: Group4,
  },
];


export default function Testimonial() {
  return (
    <div className="testimonial-wrapper"> 
        <div className="carousel">
          <Carousel className="carousel-inner" dotPosition="bottom" dots={false} arrows={true}>
            {testimonials.map((t, index) => (
              <div key={index} style={{overflow: "visible"}}>
                <div className="testimonial-card">
                <img className="ray-image" src={Rays} alt={t.name} />
                  <div className="testimonial-left">
                    <div className="testimonial-image-wrapper">
                      <img className="testimonial-image" src={t.image} alt={t.name} />
                    </div>
                  </div>
                  <img className="arrow-image" src={Arrow} alt={t.name} />
                  <div className="testimonial-right">
                    <div className="testimonial-tagline">
                      <span>What Locals Are Saying</span>
                    </div>
                    <p className="testimonial-feedback">"{t.feedback}"</p>
                    <h3 className="testimonial-name">— {t.name}</h3>
                    <p className="testimonial-vibe">*Join the Downstairs vibe*</p>
                  </div>
                  <img className="smile-image" src={Smile} alt={t.name} />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>

  );
}
