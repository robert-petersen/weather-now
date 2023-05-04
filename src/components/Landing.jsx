// import React from 'react'
import Search from "./Search"

const Landing = ({ setResults }) => {
  return (
    <main>
      <section>
        <h1>WeatherNow</h1>
        <p>Search for weather information from any city in the world!</p>
        <Search setResults={setResults}/>
      </section>
      <section className="carousel">
        <article className="current">
          <h1>Current Weather</h1>
          <p>Get a summary of the most relevant current weather information for the city you search!</p>
        </article>
        <article className="forcasts">
          <h1>Forcast Info</h1>
          <p>Recive a detailed forcast with visuals for the current day and next two days for any city!</p>
        </article>
        <article className="astronomy">
          <h1>Astronomy Info</h1>
          <p>Recive information on astronomical infromation such as sunrises, sunsets, and moon phases.</p>
        </article>
      </section>
    </main>
  )
}

export default Landing;