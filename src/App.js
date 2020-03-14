import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LocationForm from './components/LocationForm';
import ListingGrid from './components/ListingGrid';

function App() {

	const [tacoData, setTacoData] = useState();
	const [location, setLocation] = useState();
	const [loading, setLoading] = useState(false);

	const handleTacoFormSubmit = (e) => {
    	e.preventDefault();
    	setLoading(true);
    	fetch(`https://colorful-halibut.glitch.me/api/v1/businesses/search?location=${location}&term=tacos`)
    	.then((response) => {
      		if(!response.ok) {
        	throw Error(response.statusText);
      	}
    	setLoading(false)
    	return response
    })
    	.then(response => response.json())
    	.then(response => setTacoData(response))
    	.catch();
  	};

	const handleInputChange = (e) => {
    	setLocation(e.target.value);
	}

	return (
		<div className="App container-fliud">
			
			{ !tacoData && !loading &&
				<div className="row justify-content-center">
					<div className="col col-sm-9 col-md-7 col-lg-4 p-5">
						<LocationForm handleTacoFormSubmit={handleTacoFormSubmit} handleInputChange={handleInputChange} />
					</div>
				</div>
			}{ loading &&
				<h1 className="text-center p-5">Finding Tacos...</h1>
			}{ tacoData &&
				<ListingGrid businesses={tacoData.businesses}/>
			}       
				
		</div>
	);
}

export default App;
