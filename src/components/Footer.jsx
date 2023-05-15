// import React from 'react'
import { FaRegCopyright } from "react-icons/fa"

const Footer = () => {
  return (
    <footer>
      <section>
        <article className="contact">
          <h1>Let&#39;s Get in Touch</h1>
          <p>
           Any feedback is always welcome! If you have any feedback or would like to work together feel free to message me on <a href="https://www.linkedin.com/in/robert-petersen808/">LinkedIn</a> or submit a message below.
          </p>
          <button>Contact Me</button>
        </article>
        <article className="links">
          <h1>Usefull Links</h1>
          <ul>
            <li><a href="https://www.weatherapi.com/">Weather Api</a></li>
            <li><a href="https://github.com/robert-petersen">My GitHub</a></li>
          </ul>
        </article>
      </section>
      <small><FaRegCopyright className="copyIcon"/> Robert Petersen 2023</small>
    </footer>
  )
}

export default Footer;