import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LocationForm from './components/LocationForm'

function App() {

  const [tacoData, setTacoData] = useState();
  const [location, setLocation] = useState();

  const handleTacoFormSubmit = (e) => {
    e.preventDefault();
  };

  const handleInputChange = (e) => {
    setLocation(e.target.value);
  }

  return (
    <div className="App container-fliud">
      <div className="row justify-content-center">
        <div className="col col-sm-9 col-md-7 col-lg-4 p-5">
          <LocationForm handleTacoFormSubmit={handleTacoFormSubmit} handleInputChange={handleInputChange} />
        </div>
      </div>
    </div>
  );
}

export default App;
