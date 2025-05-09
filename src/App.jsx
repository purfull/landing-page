import { useRef, useState } from 'react'
// import './App.css'
import NavBarComp from './components/Navbar.jsx'
import Menu from './components/Menu/menu.jsx'
import Footer from './components/Footer/footer.jsx'
import Calledtoaction from './components/cta/calledtoactiongrid.jsx'
import LocationAndOrder from './components/locationandorder/locationandorder.jsx'
import Testimonial from './components/Testimonial/test.jsx'

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const testimonialRef = useRef(null);
  const menuRef = useRef(null);

  const scrollToRef = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
       <NavBarComp
  onHomeClick={() => scrollToRef(homeRef)}
  onAboutClick={() => {
    if (aboutRef.current) {
      const offset = window.innerHeight * 0.90; 
      // const top = aboutRef.current.offsetTop;
      window.scrollTo({
        top:  offset,
        behavior: 'smooth',
      });
    }
  }}
  onTestimonialsClick={() => scrollToRef(testimonialRef)}
  onMenuClick={() => scrollToRef(menuRef)}
/>


      <div ref={ aboutRef}>
        <div className='menu-container'>
          <Menu />
        </div>
      </div>

      <div ref={testimonialRef}>
        <Testimonial />
      </div>

      <div ref={homeRef}>
        <Calledtoaction />
      </div>

      <div ref={menuRef}>
        <LocationAndOrder />
      </div>

      <Footer />
    </>
  )
}

export default App
