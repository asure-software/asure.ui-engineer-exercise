import React, { useState } from "react"
// for fetching data
import axios from "axios"

const DataFetching = () => {
  const [businesses, setBusinesses] = useState([])
  const [location, setLocation] = useState("")

  // fetchHandler is executed when a user clicks the 'Find Me Tacos!' button
  const fetchHandler = () => {
    // all of the businesses will be pushed into this array so they can be mapped over later
    let businessesArray = []
    axios
      .get(
        `https://colorful-halibut.glitch.me/api/v1/businesses/search?location=${location}&term=tacos`
      )
      .then((res) => {
        res.data.businesses.forEach((business) =>
          businessesArray.push(business)
        )
        setBusinesses(businessesArray)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      <label htmlFor="location">Location</label>
      <input
        type="text"
        placeholder="Location"
        value={location}
        // grabs the location value the user enters
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={fetchHandler}>Find Me Tacos</button>

      <div>
        {businesses.map((business) => (
          <ul key={business.id}>
            <>
              <li>{business.name}</li>
              <li>{business.location.address1}</li>
              {business.location.address2 === null ||
              business.location.address2 === "" ? (
                ""
              ) : (
                <li>{business.location.address2}</li>
              )}
              {business.phone === null || business.phone === "" ? (
                ""
              ) : (
                <li>{business.phone}</li>
              )}
              <li>{business.rating} stars</li>
            </>
          </ul>
        ))}
      </div>
    </div>
  )
}

export default DataFetching
