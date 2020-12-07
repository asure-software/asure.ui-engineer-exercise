import { useState } from "react";
import taco from "../assets/taco.gif";

export function LandingPage(props) {
  const [location, setLocation] = useState("");
  const [showingResults, setShowingResults] = useState(false);

  return (
    <article
      className={
        showingResults ? "showing-search-results" : "not-showing-search-results"
      }
    >
      <div>
        <img src={taco} alt="animation of a taco cat with legs" />
        <header>
          <h1>
            Spec-<span>TACO</span>-lar Restaurants!
          </h1>
          <h4>in...</h4>
        </header>
        <input
          type="text"
          placeholder="Enter a location (city/zip)"
          value={location}
          onChange={(event) => {
            setLocation(event.target.value);
          }}
        />
        <button
          onClick={() => {
            props.getResults(location);
            setShowingResults(true);
          }}
        >
          What's the taco the town?
        </button>
      </div>
      <footer>
        <button
          className="collapser"
          onClick={() => {
            setShowingResults(false);
            props.setResults([]);
          }}
        >
          <i className="fas fa-angle-down"></i>
        </button>
      </footer>
    </article>
  );
}
