import React from 'react';
import GridItem from './GridItem';
import { Form, Row, Col } from 'react-bootstrap';

function ListingGrid({businesses, handleSortChange, sortOrder}) {
    return (
        <React.Fragment>
            <Form>
                <Form.Group className="px-4 pt-4" as={Row} controlId="sortOrder" style={{maxWidth: '550px'}}>
                    <Form.Label column xs="7">
                          {`Showing ${businesses.length} results, ordered by`}
                    </Form.Label>
                    <Col xs="5">
                        <Form.Control as="select" onChange={handleSortChange}>
                            <option>Rating high to low</option>
                            <option>Rating low to high</option>
                            <option>Cost high to low</option>
                            <option>Cost low to high</option>
                        </Form.Control>
                    </Col>
                </Form.Group>
            </Form>
            
            <div className="row listings justify-content-center p-5">
                {businesses.map(business => {
                    return (
                    <div className="col-xs col-sm-6 col-md-4 col-lg-3 mb-4" key={business.id}>
                        <GridItem business={business}/>
                    </div>
                    )
                })}
            </div>
        </React.Fragment>
    )
}

export default ListingGrid