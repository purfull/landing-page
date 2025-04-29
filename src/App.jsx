import { useState } from "react";
// import './App.css'
import NavBarComp from "./components/Navbar.jsx";
import Menu from "./components/Menu/menu.jsx";
import Footer from "./components/Footer/footer.jsx";
import Testimonial from "./components/Testimonial/test.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBarComp />

      <Menu />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
