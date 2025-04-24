import { useState } from 'react'
// import './App.css'
import Hero from './components/hero/Hero'
import NavBarComp from './components/Navbar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBarComp />
      <Hero />
    </>
  )
}

export default App
