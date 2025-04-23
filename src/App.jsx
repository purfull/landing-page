import { useState } from "react";
// import "./App.css";
// import Hero from "./components/hero/Hero";
import Footer from "./components/Footer/footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Hero /> */}
      <Footer />
    </>
  );
}

export default App;
