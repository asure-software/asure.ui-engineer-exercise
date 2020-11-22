import React, { useState } from "react";
import axios from "axios";
import Restaurants from './Restaurants.js'

function Search(props) {
  // Declare new state variables
  const [location, setLocation] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [ratingOrder, setRatingOrder] = useState(null);

  // Fetches data from Yelp proxy API based on location and pushes restaurant array to state
  const fetchRestaurants = () => {
    let restaurantArr = [];
    setRestaurants([]);
    axios
      .get(
        `https://colorful-halibut.glitch.me/api/v1/businesses/search?location=${location}&term=tacos`
      )
      .then((res) => {
        restaurantArr = res.data.businesses;
        setRestaurants(restaurantArr);
      });
  };

  const sortByRating = () => {
    if (ratingOrder === null || ratingOrder === "ascending") {
      setRatingOrder("descending");
    } else {
      setRatingOrder("ascending");
    }
    if (ratingOrder === "descending") {
      restaurants.sort(function (a, b) {
        return parseFloat(a.rating) - parseFloat(b.rating);
      });
    }

    if (ratingOrder === "ascending") {
      restaurants.sort(function (a, b) {
        return parseFloat(b.rating) - parseFloat(a.rating);
      });
    }
  };

  let searchLocation = `Search results for ` + location;

  return (
    <div className="search-page">
      <h3>Where are you looking for tacos?: </h3>
      <input
        id="location-input"
        type="text"
        placeholder="Enter City or Zip"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button className="button" onClick={fetchRestaurants} type="submit">
        Yo Quiero Tacos!
      </button>
      <br></br><br></br>
      <button className="button" onClick={sortByRating}>Re-Sort by Rating</button>

      {/* This "display" div is conditionally rendered upon there being data in the restaurants state */}
      <div className="display">
        {restaurants && restaurants.length > 0
          ? restaurants.map((restaurant) => {
              return (
                <Restaurants 
                  id={restaurant.id}
                  image_url={restaurant.image_url}
                  name={restaurant.name}
                  display_address0={restaurant.location.display_address[0]}
                  display_address1={restaurant.location. display_address[1]}
                  display_phone={restaurant.display_phone}
                  rating={restaurant.rating}
                  url={restaurant.url}
                />
              );
            })
          : "No Search Results Yet..."}
      </div>
    </div>
  );
}

export { Search };
