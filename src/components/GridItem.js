import React from 'react';
import { Card } from 'react-bootstrap';

function GridItem({business}) {
    const {image_url, name, rating, price, location} = business;
    return (
        <Card>
            <Card.Img variant="top" src={image_url} style={{height:'250px', objectFit:'cover'}}/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {`Rating: ${rating}`}
                </Card.Text>
                <Card.Text>
                    {`Price: ${price}`}
                </Card.Text>
                <Card.Text>
                    {location.display_address.join(', ')}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default GridItem