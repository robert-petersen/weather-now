// import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Landing from "./components/Landing"
import Results from "./components/Results"
import './App.css'

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/results" element={<Results />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
