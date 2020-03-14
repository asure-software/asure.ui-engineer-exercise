import React from 'react';
import {Form, FormGroup, FormLabel, FormText, FormControl, Button} from 'react-bootstrap';

function LocationForm({handleTacoFormSubmit, handleInputChange}) {
    return (
        <Form onSubmit={handleTacoFormSubmit}>
            <FormGroup controlId="formBasicEmail">
                <FormLabel>location</FormLabel>
                <FormControl type="text" placeholder="ex: Burlington" onChange={handleInputChange}/>
                <FormText className="text-muted">
                Enter a location to search for the best tacos.
                </FormText>
            </FormGroup>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default LocationForm