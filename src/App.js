import "./styles/main.scss";
import { LandingPage } from "./pages/LandingPage";
import { Results } from "./pages/Results";
import { useState } from "react";

function App() {
  const [results, setResults] = useState([]);

  function getResults(location) {
    fetch(
      `https://colorful-halibut.glitch.me/api/v1/businesses/search?location=${location}&term=tacos`
    )
      .then((response) => response.json())
      .then((apiData) => setResults(apiData.businesses));
  }

  return (
    <main>
      <LandingPage getResults={getResults} setResults={setResults} />
      <Results results={results} />
    </main>
  );
}

export default App;
