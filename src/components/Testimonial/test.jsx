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
      "The pastries here are unmatched! Each bite is a little moment of joy. Paired with their speciality coffee, it's pure bliss.",
    name: "Laziya Vison",
    image: Group4,
  },
  {
    feedback:
      "I've been ordering from this service for over 6 months now, and the quality of produce has been consistently excellent. The mangoes and rambutan are always perfectly ripe...",
    name: "Shizukz Admin",
    image: Group4,
  },
  {
    feedback:
      "Moving to Sri Lanka, I was worried about finding good quality produce. This website has been my savior...",
    name: "John Doe",
    image: Group4,
  },
  {
    feedback:
      "As a busy restaurant owner, I need reliable suppliers who deliver premium quality. This service has exceeded my expectations!",
    name: "john Doe",
    image: Group4,
  },
];

export default function Testimonial() {
  return (
    <div className="testimonial-wrapper">
      <div className="carousel">
        <Carousel
          className="carousel-inner"
          dotPosition="bottom"
          dots={false}
          arrows={true}
        >
          {testimonials.map((t, index) => (
            <div key={index} style={{ overflow: "visible" }}>
              <div className="testimonial-card">
                <img className="ray-image" src={Rays} alt={t.name} />
                <div className="testimonial-left">
                  <div className="testimonial-image-wrapper">
                    <img
                      className="testimonial-image"
                      src={t.image}
                      alt={t.name}
                    />
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
