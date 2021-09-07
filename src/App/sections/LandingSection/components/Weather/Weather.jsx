import React from 'react';

import { Background, Header } from './components';
import './Weather.css';

// import getWeatherDataFromLocation from './services/WeatherAPI';

export default function Weather() {
  // const [city, setCity] = useState('sydney');
  // const [weatherData, setWeatherData] = useState([]);

  // const updateWeatherData = (event) => {
  //   event.preventDefault();
  //   setCity(event.target.value);
  // };

  // useEffect(async () => {
  //   await getWeatherDataFromLocation({ location: city }).then((response) => {
  //     const { daily } = response;

  //     if (daily) {
  //       setWeatherData(daily);
  //     }
  //   });
  // }, [city]);

  return (
    <div className="weather">
      <Background />

      <div className="content">
        <Header />
        {/* <ul>
        {weatherData &&
          weatherData.map((forecast, index) => (
            <ForecastItem forecast={forecast} index={index} />
            ))}
          </ul> */}
      </div>
    </div>
  );
}
