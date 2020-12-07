import taco from "../assets/taco.gif";

export function LandingPage() {
  return (
    <article className="not-showing-search-results">
      <div>
        <img src={taco} alt="animation of a taco cat with legs" />
        <header>
          <h1>
            Spec-<span>TACO</span>-lar Restaurants!
          </h1>
          <h4>in...</h4>
        </header>
        <input type="text" placeholder="Enter a location (city/zip)" />
        <button>What's the taco the town?</button>
      </div>
      <footer>
        <button className="collapser">
          <i className="fas fa-angle-down"></i>
        </button>
      </footer>
    </article>
  );
}
