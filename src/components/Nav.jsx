// import React from 'react'
import { Link } from "react-router-dom"
// import {  } from "react-icons"
import Search from "./Search"

const Nav = ({ setResults }) => {
  return (
    <nav>
      <h1><Link>WeatherNow</Link></h1>
      <Search setResults={setResults}/>
    </nav>
  )
}

export default Nav;