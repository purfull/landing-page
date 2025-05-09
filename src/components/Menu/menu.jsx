import React from "react";
import "./menu.css";
import Frame from "../../assets/Frame.png";
import Component1 from "../../assets/Component-1.png";
import Component2 from "../../assets/Component-2.png";
import Component3 from "../../assets/Component-3.png";
import Component4 from "../../assets/Component-4.png";
import Cake from "../../assets/cake.svg";
import Crossiant from "../../assets/bakes.svg";
import Salad from "../../assets/bites.svg";
import Coffee from "../../assets/coffee.svg";

const Menu = () => {
  return (
    <div className="menu-highlights">
      <div className="portion1">
        <button className="main-title-box ">Menu Highlights</button>
        <p className="menuDesc">
          Crafted with care. <br /> Served with soul.
        </p>

        <div className="grid-container-1">
          <button className="title-box box1">
            <p><img src={Coffee} alt="coffee" className="icon" />
            Coffee & </p>
            Beverages
          </button>
          <button className="title-box box2">
            <p><img src={Cake} alt="cakes" className="icon" />
            Cakes & </p>
            Desserts
          </button>
          <button className="title-box box3">
            <p style={{textAlign: ''}}><img src={Crossiant} alt="pastries" className="icon" />
            Bakes & </p>
            Pastries
          </button>
          <button className="title-box box4">
            <p><img src={Salad} alt="light-bites" className="icon" />
            Light </p>
            Bites
          </button>
        </div>

        <button className="menu-button">
          View Full Menu
          <img src={Frame} alt="frame" className="arrow-frame" />
        </button>
      </div>

      <div className="grid-container-2">
        <div className="grid1">
          <div className="card-overlay">
            <img className="component2" src={Component2} alt="image2" />
            <div className="overlay-text">
              <h3>Freshly Baked</h3>
              <p>Start your day with the irresistible aroma of oven-fresh delights.
Every bite is warm, comforting, and straight from the hearth.</p>
            </div>
          </div>

          <div className="card-overlay">
            <img className="component4" src={Component4} alt="image4" />
            <div className="overlay-text">
              <h3>Crafted Coffee</h3>
              <p>Brewed with precision, served with passion. Every cup tells a story—rich, smooth, and perfectly balanced.</p>
            </div>
          </div>
        </div>

        <div className="grid2">
          <div className="card-overlay">
            <img className="component3" src={Component3} alt="image3" />
            <div className="overlay-text">
              <h3>Golden Mornings</h3>
              <p>Pastries & Baked Items
Rise to golden, flaky pastries that melt in your mouth. Crafted to brighten mornings with indulgent, buttery bliss.</p>
            </div>
          </div>

          <div className="card-overlay">
            <img className="component1" src={Component1} alt="image1" />
            <div className="overlay-text">
              <h3>Light Bites</h3>
              <p>Wholesome snacks for anytime cravings.
Tasty, fulfilling, and never too heavy.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
