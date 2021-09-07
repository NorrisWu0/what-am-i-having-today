/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';

import { Background, Header, Current } from './components';
import './Weather.css';

import getWeatherDataFromLocation from './services/WeatherAPI';

export default function Weather() {
  const [city, setCity] = useState('sydney');
  const [weatherDatas, setWeatherDatas] = useState([]);

  const updateCity = (event) => {
    event.preventDefault();
    setCity(event.target.value);
  };

  useEffect(async () => {
    await getWeatherDataFromLocation({ location: city }).then((response) => {
      const { timezone_offset, daily } = response;
      setWeatherDatas([]);

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

          setWeatherDatas((oldWeatherDatas) => [
            ...oldWeatherDatas,
            newWeatherData
          ]);
        });
      }
    });

    console.log(weatherDatas);
  }, [city]);

  return (
    <div className="weather">
      <Background />

      <div className="content">
        <Header updateCity={updateCity} />
        <Current currentData={weatherDatas.shift()} />

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
