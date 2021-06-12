
import React from 'react';
import { Row } from 'react-bootstrap';

const Search = React.lazy(() => import('./components/search'));
const Weather = React.lazy(() => import('./components/weather'));
const WeatherWeek = React.lazy(() => import('./components/weatherWeek'));


function App() {
  return (
    < >
      <Search />
      <Row className='mb-5' >
        <Weather />
        <WeatherWeek />
      </Row>
    </>
  );
}

export default App;
