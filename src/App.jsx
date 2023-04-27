import { useState } from "react";
import { Routes, Route } from "react-router-dom"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Landing from "./components/Landing"
import Results from "./components/Results"

function App() {
  const [ results, setResults ] = useState({});
  return (
    <>
      <Nav 
        setResults={setResults}
      />
      <Routes>
        <Route 
          path="/" 
          element={<Landing />}
          setResults={setResults}
        />
        <Route 
          path="/results" 
          element={<Results />}
          results={results}
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App
