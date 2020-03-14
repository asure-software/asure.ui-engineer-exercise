import React from 'react';
import {Form, Button} from 'react-bootstrap';

function LocationForm({handleTacoFormSubmit, handleInputChange}) {
    return (
        <Form onSubmit={handleTacoFormSubmit}>
            <Form.Group controlId="location">
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" placeholder="ex: Burlington VT" onChange={handleInputChange}/>
                <Form.Text className="text-muted">
                Enter a location to search for the best tacos.
                </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default LocationForm