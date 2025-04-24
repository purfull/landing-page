import { useState } from "react";
// import "./App.css";
// import Hero from "./components/hero/Hero";
import Footer from "./components/Footer/footer";
import Menu from "./components/Menu/menu";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Hero /> */}
      <Menu />
      <Footer />
    </>
  );
}

export default App;
