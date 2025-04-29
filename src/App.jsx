import { useState } from "react";
// import './App.css'
import NavBarComp from "./components/Navbar.jsx";
import Menu from "./components/Menu/menu.jsx";
import Footer from "./components/Footer/footer.jsx";
import Testimonial from "./components/Testimonial/test.jsx";
import Calledtoaction from "./components/cta/calledtoactiongrid.jsx";
import LocationAndOrder from "./components/locationandorder/locationandorder.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBarComp />
      <div className="menu-container">
        <Menu />
      </div>
      <Testimonial />
      <Calledtoaction />
      <LocationAndOrder />
      <Footer />
    </>
  );
}

export default App;
