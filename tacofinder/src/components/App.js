import React from 'react';
import '../styles/App.scss';
import YelpApi from '../api/YelpApi.js';
import RestaurantList from './RestaurantList';
import Panel from './Panel';
import '../styles/Panel.scss';

class App extends React.Component {
  state = {
    restaurants: []
  }

  componentDidMount() {
    this.GetRestaurants();
  }

  async GetRestaurants() {
    let response;
    try {
      response = await YelpApi.get('businesses/search', {
        params: {
          location: "austin",
          term: "tacos"
        }
      })
    } catch (error) {
      console.log(error.message);
    }

    if (response) {
      // TODO: Remove console log
      console.log(response.data.businesses);
      this.setState({
        restaurants: response.data.businesses
      })
    }
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1>Taco Finder</h1>
        </header>
        <Panel title="Restaurants!">
          <RestaurantList restaurants={this.state.restaurants}/>
        </Panel>
      </div>
    );
  }
}

export default App;
