// import React from 'react'
import { Link } from "react-router-dom"
import { WiCloudy } from "react-icons/wi";
import Search from "./Search"

const Nav = ({ setResults }) => {
  return (
    <nav>
      <h1>
        <Link className="homeLink">
          <WiCloudy className="icon"/> WeatherNow
        </Link>
      </h1>
      <Search setResults={setResults}/>
    </nav>
  )
}

export default Nav;