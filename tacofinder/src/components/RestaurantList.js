import React from 'react';
import RestaurantCard from './RestaurantCard';
import '../styles/RestaurantList.scss';

class RestaurantList extends React.Component {
    render() {
        return (
            <div className="restaurant-list">
                {this.props.restaurants.map(restaurant => {
                    return (
                        <RestaurantCard key={restaurant.id} restaurant={restaurant}/>
                    );
                })}
            </div>
        );
    }
}

export default RestaurantList;