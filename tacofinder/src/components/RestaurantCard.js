import React from 'react';
import '../styles/RestaurantCard.scss';

class RestaurantCard extends React.Component {
    render() {
        
        let address = this.props.restaurant.location.display_address.map((line, index) => {
            return (
                <React.Fragment key={index}>
                    {line}<br/>
                </React.Fragment>
            );
        });

        return (
            <div className="restaurant-card">
                <img className="restaurant-card__image" src={this.props.restaurant.image_url} alt={this.props.restaurant.name}/>
                <div className="restaurant-card__content">
                    <h3 className="restaurant-card__title">{this.props.restaurant.name}</h3>
                    <p className="restaurant-card__address">{address}</p>
                    <a href={'tel:' + this.props.restaurant.phone}>{this.props.restaurant.display_phone}</a>
                </div>
            </div>
        );
    }
}

export default RestaurantCard;