import { useState } from 'react'
// import './App.css'
import NavBarComp from './components/Navbar.jsx'
import Menu from './components/Menu/menu.jsx'
import Footer from './components/Footer/footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBarComp />
      
      <Menu />
      <Footer />
    </>
  )
}

export default App
