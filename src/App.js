import "./styles/main.scss";
import taco from "./assets/taco.gif";
import yelp from "./assets/yelp.png";

function App() {
  return (
    <main>
      <article>
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
          <button className="expander">
            <i className="fas fa-angle-down"></i>
          </button>
        </footer>
      </article>
      <article>
        <nav>
          <button>Best Match</button>
          <button>Rating</button>
          <button>Reviews</button>
          <button>Distance</button>
        </nav>
        <ul className="results">
          <li>
            <div className="information-container">
              <div className="information">
                <h2>
                  Tacobell <span>(3 reviews)</span>
                </h2>
                <h3>
                  <span>open</span> $
                </h3>
                <div className="more-information">
                  <div>
                    <a href="http://maps.google.com/?q=51 davis blvd apt A tampa, FL 33606">
                      51 Davis Blvd Apt A <br />
                      Tampa, FL 33606
                      <br />
                    </a>
                    <a href="tel:(813)334-6678">(813)334-6678</a>
                  </div>
                  <img src={yelp} alt={`Yelp review for Tacobell`} />
                </div>
              </div>
              <div className="rating">5.0</div>
            </div>
            <button>
              <i className="fas fa-angle-down"></i>
            </button>
          </li>
        </ul>
      </article>
    </main>
  );
}

export default App;
