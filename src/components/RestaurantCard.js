import yelp from "../assets/yelp.png";

export function RestaurantCard() {
  return (
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
  );
}
