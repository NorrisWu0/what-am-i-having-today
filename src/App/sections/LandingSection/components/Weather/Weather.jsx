/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';

import { Background, Header, Current, Forecast } from './components';
import './Weather.css';

import getWeatherDataFromLocation from './services/WeatherAPI';

export default function Weather() {
  const [city, setCity] = useState('sydney');
  const [weatherData, setWeatherData] = useState([]);

  const updateCity = (event) => {
    event.preventDefault();
    setCity(event.target.value);
  };

  useEffect(async () => {
    await getWeatherDataFromLocation({ location: city }).then((response) => {
      const { timezone_offset, daily } = response;
      setWeatherData([]);

      if (daily) {
        daily.forEach((day) => {
          const { dt, sunrise, sunset, temp, weather } = day;
          const newWeatherData = {
            dt: (dt + timezone_offset) * 1000,
            sunrise: (sunrise + timezone_offset) * 1000,
            sunset: (sunset + timezone_offset) * 1000,
            temp,
            weather
          };

          setWeatherData((oldWeatherData) => [
            ...oldWeatherData,
            newWeatherData
          ]);
        });
      }
    });
  }, [city]);

  return (
    <div className="weather">
      <Background />

      <div className="content">
        <Header currentData={weatherData[0]} updateCity={updateCity} />
        {weatherData && <Current currentData={weatherData[0]} />}
        {weatherData && <Forecast forecastData={weatherData} />}
      </div>
    </div>
  );
}
