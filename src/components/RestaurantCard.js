import { useState } from "react";
import yelp from "../assets/yelp.png";

export function RestaurantCard(props) {
  const restaurant = props.restaurant;
  const [expanded, setExpanded] = useState(false);

  function roundRating(rating) {
    if (rating >= 4) {
      return "five";
    } else if (rating < 4 && rating >= 3) {
      return "four";
    } else if (rating < 3 && rating >= 2) {
      return "three";
    } else if (rating < 2 && rating >= 1) {
      return "two";
    } else {
      return "one";
    }
  }

  return (
    <li
      className={expanded ? "expanded" : "collapsed"}
      style={{
        backgroundImage: `url(${restaurant.image_url})`,
      }}
    >
      <div className="information-container">
        <div className="information">
          <h2>{restaurant.name}</h2>
          <h3>
            <span
              className={`status ${restaurant.is_closed ? "closed" : "open"}`}
            >
              {restaurant.is_closed ? "closed" : "open"}
            </span>
            <span> ({restaurant.review_count} reviews)</span> {restaurant.price}
          </h3>
          <div className="more-information" style={{ display: "flex" }}>
            <div>
              <a
                href={`http://maps.google.com/?q=${restaurant.location.display_address.join(
                  " "
                )}`}
                target="_blank"
              >
                {restaurant.location.address1} <br />
                {restaurant.location.address2
                  ? restaurant.location.address2 + <br />
                  : null}
                {restaurant.location.address3
                  ? restaurant.location.address3 + <br />
                  : null}
                {`${restaurant.location.city}, ${restaurant.location.state} ${restaurant.location.zip_code}`}
                <br />
              </a>
              <a href={`tel:${restaurant.phone}`}>{restaurant.display_phone}</a>
            </div>
            <a href={restaurant.url} target="_blank">
              <img src={yelp} alt={`Yelp review for ${restaurant.name}`} />
            </a>
          </div>
        </div>
        <div className={`rating ${roundRating(restaurant.rating)}`}>
          {restaurant.rating}
        </div>
      </div>
      <button
        className="collapser"
        onClick={() => {
          if (expanded) {
            setExpanded(false);
          } else {
            setExpanded(true);
          }
        }}
      >
        <i className="fas fa-angle-down"></i>
      </button>
    </li>
  );
}
