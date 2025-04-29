import React from "react";
import { Carousel } from "antd";
import "./test.css";
import Group4 from "../../assets/Group-4.png";
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
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    feedback:
      "Moving to Sri Lanka, I was worried about finding good quality produce. This website has been my savior...",
    name: "John Doe",
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    feedback:
      "As a busy restaurant owner, I need reliable suppliers who deliver premium quality. This service has exceeded my expectations!",
    name: "john Doe",
    image: "https://i.pravatar.cc/150?img=3",
  },
];

export default function Testimonial() {
  return (
    <div className="testimonial-wrapper">
      <div className="carosal">
        <Carousel className="carosal-inner" dotPosition="bottom" dots={false}>
          {testimonials.map((t, index) => (
            <div key={index}>
              <div className="testimonial-card">
                <div className="testimonial-left">
                  <img
                    className="testimonial-image"
                    src={t.image}
                    alt={t.name}
                  />
                </div>
                <div className="testimonial-right">
                  <h2 className="testimonial-header">What Locals are Saying</h2>
                  <div className="testimonial-content">
                    <p className="testimonial-feedback">{t.feedback}</p>
                    <h2 className="testimonial-name">{t.name}</h2>
                    <p className="text">"Join the Downstairs vibe"</p>
                    {/* <img src={Misc} alt="misc" className="smiley" /> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
