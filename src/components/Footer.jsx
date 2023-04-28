// import React from 'react'
import { FaRegCopyright } from "react-icons/fa"

const Footer = () => {
  return (
    <footer>
      <ul>
        <li><a href="https://www.weatherapi.com/">Weather Api</a></li>
        <li><a href="https://github.com/robert-petersen">My GitHub</a></li>
      </ul>
      <small><FaRegCopyright /> Robert Petersen 2023</small>
    </footer>
  )
}

export default Footer;