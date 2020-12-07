import "./styles/main.scss";
import { LandingPage } from "./pages/LandingPage";
import { Results } from "./pages/Results";
import { useEffect, useState } from "react";

function App() {
  const [results, setResults] = useState([]);
  const [sortBy, setSortBy] = useState("best_match");
  const [location, setLocation] = useState("");

  function getResults() {
    fetch(
      `https://colorful-halibut.glitch.me/api/v1/businesses/search?location=${location}&term=tacos&sort_by=${
        sortBy === "worst" ? "rating" : sortBy
      }`
    )
      .then((response) => response.json())
      .then((apiData) => {
        if (sortBy === "worst") {
          setResults(
            apiData.businesses.sort((a, b) => {
              return a.rating - b.rating;
            })
          );
        } else {
          setResults(apiData.businesses);
        }
      });
  }

  useEffect(() => {
    getResults();
  }, [sortBy]);

  return (
    <main>
      <LandingPage
        getResults={getResults}
        setResults={setResults}
        setLocation={setLocation}
      />
      <Results
        results={results}
        sortBy={sortBy}
        setSortBy={setSortBy}
        setResults={setResults}
      />
    </main>
  );
}

export default App;
