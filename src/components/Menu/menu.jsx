import React from "react";
import "./menu.css";
import Frame from "../../assets/Frame.png";
import Component1 from "../../assets/Component-1.png";
import Component2 from "../../assets/Component-2.png";
import Component3 from "../../assets/Component-3.png";
import Component4 from "../../assets/Component-4.png";
import Cake from "../../assets/cupcake.png";
import Crossiant from "../../assets/crossiant.png";
import Salad from "../../assets/salad.png";
import Coffee from "../../assets/coffee.png";

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
            <img src={Coffee} alt="coffee" className="icon" />
            Coffee & <br />
            Beverages
          </button>
          <button className="title-box box2">
            <img src={Cake} alt="cakes" className="icon" />
            Cakes & <br />
            Desserts
          </button>
          <button className="title-box box3">
            <img src={Crossiant} alt="pastries" className="icon" />
            Bakes & <br />
            Pastries
          </button>
          <button className="title-box box4">
            <img src={Salad} alt="light-bites" className="icon" />
            Light <br />
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
          <img className="component2" src={Component2} alt="image2" />
          <img className="component4" src={Component4} alt="image4" />
        </div>

        <div className="grid2">
          <img className="component3" src={Component3} alt="image3" />
          <img className="component1" src={Component1} alt="image1" />
        </div>
      </div>
    </div>
  );
};

export default Menu;
