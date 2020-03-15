import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LocationForm from './components/LocationForm';
import ListingGrid from './components/ListingGrid';
import { sortResults, fetcher } from './assets/js/helper';

function App() {

	let [tacoData, setTacoData] = useState();
	const [location, setLocation] = useState();
	const [loading, setLoading] = useState(false);
	let [sortOrder, setSortOrder] = useState('ratinghightolow');

	const handleTacoFormSubmit = (e) => {
    	e.preventDefault();
		const loading = (status) => setLoading(status);
		const complete = (response) => setTacoData(sortResults(response.businesses,'rating','descending'));
		const url = `https://colorful-halibut.glitch.me/api/v1/businesses/search?location=${location}&term=tacos`;
		fetcher(url, loading, complete);
  	};

	const handleInputChange = (e) => {
    	setLocation(e.target.value);
	}

    const handleSortChange = (e) => {
        switch(e.target.value) {
            case 'Rating high to low':
				setTacoData(sortResults(tacoData,'rating','descending'));
				setSortOrder('ratinghightolow');
                break;
            case 'Rating low to high':
				setTacoData(sortResults(tacoData,'rating','ascending'));
				setSortOrder('ratinglowtohigh');
                break;
            case 'Cost low to high':
				setTacoData(sortResults(tacoData,'cost','ascending'));
				setSortOrder('costlowtohigh');
                break;
            case 'Cost high to low':
				setTacoData(sortResults(tacoData,'cost','descending'));
				setSortOrder('costhightolow');
                break;
            default:
                break;
          }
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
				<ListingGrid businesses={tacoData} handleSortChange={handleSortChange} sortOrder={sortOrder}/>
			}       
				
		</div>
	);
}

export default App;
