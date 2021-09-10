import React, { useState, useEffect } from 'react';

import { Header, Current, Forecast } from './components';
import './Weather.css';

import getWeatherDataFromLocation from './services/WeatherAPI';

export default function Weather() {
  const [city, setCity] = useState('sydney');
  const [backgroundStyle, setBackgroundStyle] = useState({
    background: `linear-gradient(
          0deg,
          rgba(0, 0, 10, 0.6),
          rgba(0, 0, 10, 0.6)
        )`
  });
  const [weatherData, setWeatherData] = useState([]);

  const updateCity = (event) => {
    event.preventDefault();
    setCity(event.target.value);
  };

  useEffect(() => {
    getWeatherDataFromLocation({ location: city }).then((response) => {
      setBackgroundStyle({
        backgroundImage: `linear-gradient(
          0deg,
          rgba(0, 0, 10, 0.6),
          rgba(0, 0, 10, 0.6)
        ),
        url(${response.background})`
      });
      setWeatherData(response.filteredWeatherData);
    });
  }, [city]);

  const [currentData, ...forecastData] = weatherData;

  return (
    <section style={backgroundStyle} className="weather">
      <div className="content">
        <Header currentData={currentData} updateCity={updateCity} />
        {currentData && <Current currentData={currentData} />}
        {forecastData && <Forecast forecastData={forecastData} />}
      </div>
    </section>
  );
}
