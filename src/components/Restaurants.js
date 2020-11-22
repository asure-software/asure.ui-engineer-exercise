import React from 'react'

function Restaurants(props) {

    return (
        <div key={props.id}>
                  <div className="restaurant-info">
                    <div className="restaurant-img restaurant-box">
                      <img
                        src={props.image_url}
                        width="100"
                        height="100"
                      />
                    </div>
                    <div className="restaurant-name restaurant-box">
                      <h3>{props.name}</h3>
                    </div>
                    <div className="restaurant-location restaurant-box">
                      Address:
                      <br />
                      <br />
                      {props.display_address0}
                      <br />
                      {props.display_address1}
                    </div>
                    <div className="restaurant-phone restaurant-box">
                      Phone:
                      <br />
                      <br />
                      {props.display_phone}
                    </div>
                    <div className="restaurant-rating restaurant-box">
                      Yelp Rating:
                      <br />
                      <br />
                      {props.rating}
                    </div>
                    <div className="restaurant-url restaurant-box">
                      Website:
                      <br />
                      <br />{" "}
                      <a href={props.url}>{props.name}'s Yelp Page</a>
                    </div>
                  </div>
                </div>
    )
}

export default Restaurants;