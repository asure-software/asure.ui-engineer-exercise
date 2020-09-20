import React from 'react';

class RestaurantList extends React.Component {
    render() {
        return (
            <React.Fragment>
                {this.props.restaurants.map(restaurant => {
                    return (
                        <div key={restaurant.id}>{restaurant.name}</div>
                    );
                })}
            </React.Fragment>
        );
    }
}

export default RestaurantList;