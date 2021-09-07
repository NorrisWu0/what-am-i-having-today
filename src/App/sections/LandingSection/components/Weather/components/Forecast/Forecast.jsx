import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './Forecast.css';

const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const ForecastItem = ({ forecastData }) => {
  const { dt, temp, weather } = forecastData;
  const [date, setDate] = useState(new Date());
  const [text, setText] = useState(' ');
  const [iconUrl, setIconUrl] = useState(' ');

  useEffect(() => {
    setDate(new Date((dt + 36000) * 1000));
    const { main, icon } = weather[0];
    setText(main);
    setIconUrl(`http://openweathermap.org/img/wn/${icon}@2x.png`);
  }, [forecastData]);

  return (
    <li className="weather__forecast">
      <div className="weather__forecast__weather">
        <span className="weather-bar__forecast__weather__icon">
          <img src={iconUrl} alt={text} />
        </span>
        <span className="weather-bar__forecast__weather__label">{text}</span>
      </div>
      <div className="weather-bar__forecast__info">
        <span className="weather-bar__forecast__info__day">
          {weekday[date.getDay()]}
        </span>
        <span className="weather-bar__forecast__info__temp">
          <span className="weather-bar__forecast__info__temp_low">
            {temp && Math.round(temp.min).toString().padStart(2, '0')}°
          </span>
          <span className="weather-bar__forecast__info__temp_high">
            {temp && Math.round(temp.max).toString().padStart(2, '0')}°
          </span>
        </span>
      </div>
    </li>
  );
};

ForecastItem.propTypes = {
  forecastData: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default function Forecast({ forecastData }) {
  return (
    <ul className="weather__forecast">
      {forecastData &&
        forecastData.map((data) => <ForecastItem forecastData={data} />)}
    </ul>
  );
}

Forecast.propTypes = {
  forecastData: PropTypes.arrayOf(PropTypes.string).isRequired
};
