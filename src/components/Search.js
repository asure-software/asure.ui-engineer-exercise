import React, { useState } from "react";
import axios from "axios";

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
        setTimeout(() => console.log(restaurants), 1000);
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
      console.log(restaurants);
    }

    if (ratingOrder === "ascending") {
      restaurants.sort(function (a, b) {
        return parseFloat(b.rating) - parseFloat(a.rating);
      });
      console.log(restaurants);
    }
    console.log(restaurants);
  };

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
      <button onClick={fetchRestaurants} type="submit">
        Yo Quiero Tacos!
      </button>
      <br></br>
      <button onClick={sortByRating}>Re-Sort by Rating</button>

      <div className="display">
        {restaurants && restaurants.length > 0
          ? restaurants.map((restaurant) => {
              return (
                <div key={restaurant.id}>
                  <div className="restaurant-info">
                    <div className="restaurant-img">
                      <img src={restaurant.image_url} width="200" />
                    </div>
                    <div className="restaurant-name">
                      <h4>{restaurant.name}</h4>
                    </div>
                    <div className="restaurant-location">
                      {restaurant.location.display_address}
                    </div>
                    <div className="restaurant-phone">
                      {restaurant.display_phone}
                    </div>
                    <div className="restaurant-rating">
                      Yelp Rating: {restaurant.rating}
                    </div>
                    <div className="restaurant-url">
                      Website:{" "}
                      <a href={restaurant.url}>{restaurant.name}'s Yelp Page</a>
                    </div>
                  </div>
                </div>
              );
            })
          : "No Search Results Yet..."}
      </div>
    </div>
  );
}

export { Search };
