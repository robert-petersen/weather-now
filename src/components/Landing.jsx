import {useState} from "react";
import Search from "./Search";

const Landing = ({ setResults }) => {
  const [active, setActive] = useState(1);
  return (
    <main className="landing">
      <section className="main_content">
        <h1>WeatherNow</h1>
        <p>Search for weather information from any city in the world!</p>
        <Search setResults={setResults}/>
      </section>
      <section className="carousel">
        <article 
          className={active === 1 ? "current_active" : "current"}
          onClick={() => setActive(1)}
          >
          <h1>Current Weather</h1>
          <p>Get a summary of the most relevant current weather information for the city you search!</p>
        </article>
        <article 
          className={active === 2 ? "forcasts_active" : "forcasts"}
          onClick={() => setActive(2)}
          >
          <h1>Forcast Info</h1>
          <p>Recive a detailed forcast with visuals for the current day and next two days for any city!</p>
        </article>
        <article 
          className={active === 3 ? "astronomy_active" : "astronomy"}
          onClick={() => setActive(3)}
          >
          <h1>Astronomy Info</h1>
          <p>Recive information on astronomical infromation such as sunrises, sunsets, and moon phases.</p>
        </article>
      </section>
    </main>
  )
}

export default Landing;