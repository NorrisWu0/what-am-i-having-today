import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './Header.css';

const weekday = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

const month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export default function Header({ currentData, updateCity }) {
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    if (currentData) {
      const date = new Date(currentData.dt);

      setCurrentDate(
        `${weekday[date.getDay()]}, ${date.getDate()} ${
          month[date.getMonth()]
        } ${date.getFullYear()}`
      );
      setInterval(() => setCurrentTime(new Date().toLocaleTimeString()), 1000);
    }
  }, [currentData]);

  return (
    <div className="weather__header">
      <span>{currentDate}</span>
      <span>{currentTime}</span>
      <select
        className="weather__header__city-selector"
        name="ciy"
        id="city"
        onChange={updateCity}
      >
        <option value="sydney">Sydney</option>
        <option value="melbourne">Melbourne</option>
        <option value="canberra">Canberra</option>
        <option value="brisbane">Brisbane</option>
        <option value="adelaide">Adelaide</option>
      </select>
    </div>
  );
}

Header.propTypes = {
  currentData: PropTypes.arrayOf(PropTypes.string).isRequired,
  updateCity: PropTypes.func.isRequired
};
