import "./styles/main.scss";
import taco from "./assets/taco.gif";
import yelp from "./assets/yelp.png";

function App() {
  return (
    <main>
      <article className="showing-search-results">
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
      <article>
        <nav>
          <button>Best Match</button>
          <button>Rating</button>
          <button>Reviews</button>
          <button>Distance</button>
        </nav>
        <ul className="results">
          <li
            className="collapsed"
            style={{
              backgroundImage: `url(https://s3-media2.fl.yelpcdn.com/bphoto/6zmYiPyXLI3pmuGJw8FFmg/o.jpg)`,
            }}
          >
            <div className="information-container">
              <div className="information">
                <h2>Dosunco Japanese Kitchen</h2>
                <h3>
                  <span className="status closed">closed</span>
                  <span> (3 reviews)</span> $
                </h3>
                <div className="more-information" style={{ display: "flex" }}>
                  <div>
                    <a href="http://maps.google.com/?q=51 davis blvd apt A tampa, FL 33606">
                      51 Davis Blvd Apt A <br />
                      Tampa, FL 33606
                      <br />
                    </a>
                    <a href="tel:(813)334-6678">(813)334-6678</a>
                  </div>
                  <a href="https://www.yelp.com/biz/japanese-kitchen-dosunco-tampa?adjust_creative=-TPlKTKz6pRt9sFp-z8XQQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-TPlKTKz6pRt9sFp-z8XQQ">
                    <img src={yelp} alt={`Yelp review for Tacobell`} />
                  </a>
                </div>
              </div>
              <div className="rating five">5.0</div>
            </div>
            <button className="collapser">
              <i className="fas fa-angle-down"></i>
            </button>
          </li>
        </ul>
      </article>
    </main>
  );
}

export default App;
