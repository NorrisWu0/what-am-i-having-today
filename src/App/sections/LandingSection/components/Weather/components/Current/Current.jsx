import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import sunriseSVG from './assets/sunrise.svg';
import sunsetSVG from './assets/sunset.svg';
import './Current.css';

export default function Current({ currentData }) {
  const [conditionIcon, setConditionIcon] = useState('');
  const [condition, setCondition] = useState('');

  const [minTemp, setMinTemp] = useState(0);
  const [maxTemp, setMaxTemp] = useState(0);

  const [setTime, setSunset] = useState(0);
  const [riseTime, setSunrise] = useState(0);

  useEffect(() => {
    if (currentData) {
      const { sunrise, sunset, temp, weather } = currentData;

      const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

      setCondition(weather[0].main);
      setConditionIcon(iconUrl);

      setMinTemp(Math.round(temp.min).toString().padStart(2, '0'));
      setMaxTemp(Math.round(temp.max).toString().padStart(2, '0'));

      const sunriseTime = new Date(sunrise);
      const sunriseStr = `${sunriseTime.getHours()}:${sunriseTime.getMinutes()}`;
      setSunrise(sunriseStr);
      const sunsetTime = new Date(sunset);
      const sunsetStr = `${sunsetTime.getHours()}:${sunsetTime.getMinutes()}`;
      setSunset(sunsetStr);
    }
  }, [currentData]);

  return (
    <div className="weather__current">
      <div className="weather__current__condition">
        <img src={conditionIcon} alt={condition} />
        <span>{condition}</span>
      </div>
      <div className="weather__current__detail">
        <div className="weather__current__detail__temp">
          <div>
            <span className="weather__current__detail__temp__label">Low</span>
            <span className="weather__current__detail__temp__degree_min">
              {minTemp}°
            </span>
          </div>
          <div>
            <span className="weather__current__detail__temp__label">High</span>
            <span className="weather__current__detail__temp__degree_max">
              {maxTemp}°
            </span>
          </div>
        </div>
        <div className="weather__current__detail__sun">
          <div>
            <img src={sunriseSVG} alt="Sunrise" />
            <span className="weather__current__detail__sun__label">
              {riseTime}
            </span>
          </div>
          <div>
            <img src={sunsetSVG} alt="Sunset" />
            <span className="weather__current__detail__sun__label">
              {setTime}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

Current.propTypes = {
  currentData: PropTypes.arrayOf(PropTypes.string).isRequired
};