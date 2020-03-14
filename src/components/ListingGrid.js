import React from 'react';
import GridItem from './GridItem';

function ListingGrid({businesses}) {
    console.log(businesses)
    return (
        <React.Fragment>
            <div className="row filters justify-content-center">
                {`showing ${businesses.length} results`}
            </div>
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