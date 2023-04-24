// import { useState } from 'react'
import './App.css'
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Results from "./components/Results";
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/forcast" element={<Results />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
