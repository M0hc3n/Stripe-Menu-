import React from 'react'
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Submenu from './components/Submenu'

function App() {
  return (
    <>
      <Submenu />
      <Navbar />
      <Hero />
      <Sidebar />
    </>
  )
}

export default App