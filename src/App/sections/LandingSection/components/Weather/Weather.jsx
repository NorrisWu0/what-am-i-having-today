import React, { useState, useEffect } from 'react';

import { Header, Current, Forecast } from './components';
import './Weather.css';

import getWeatherDataFromLocation from './services/WeatherAPI';

export default function Weather() {
  const [city, setCity] = useState('sydney');
  const [weatherData, setWeatherData] = useState([]);

  const updateCity = (event) => {
    event.preventDefault();
    setCity(event.target.value);
  };

  useEffect(() => {
    getWeatherDataFromLocation({ location: city }).then((response) => {
      setWeatherData(response);
    });
  }, [city]);

  const [currentData, ...forecastData] = weatherData;

  return (
    <section className="weather">
      <div className="content">
        <Header currentData={currentData} updateCity={updateCity} />
        {weatherData && <Current currentData={currentData} />}
        {weatherData && <Forecast forecastData={forecastData} />}
      </div>
    </section>
  );
}
