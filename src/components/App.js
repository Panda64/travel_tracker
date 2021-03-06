import { Outlet, useLocation, Navigate } from 'react-router-dom'

import './App.css';
import Title from './Title';
import Map from './Map';
import Stats from './Stats';
import ScreenShot from './ScreenShot';
import { useState } from 'react';

function App() {
  const location = useLocation()
  var [mapState, setMapState] = useState({ countriesArray : [], countryCode : '', isSelected : false, countryName : '' })

  function updateCountries(countriesArray, countryCode, isSelected, countryName) {
    setMapState({ countriesArray, countryCode, isSelected, countryName })
  }

  return (
    <>
    {location.state ? 
      <div className="App">
        <ScreenShot>
        <Title name={location.state.name} />
        <div className="map_and_stats">
          <Map updateCountries={updateCountries} />
          <Stats mapState={mapState} />
        </div>
        </ScreenShot>
        <Outlet />
      </div>
      : 
      <Navigate to="/" />
    }
    </>
  );
}

export default App;