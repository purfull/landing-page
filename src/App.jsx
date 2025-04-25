import { useState } from 'react'
// import './App.css'
import NavBarComp from './components/Navbar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBarComp />
    </>
  )
}

export default App
