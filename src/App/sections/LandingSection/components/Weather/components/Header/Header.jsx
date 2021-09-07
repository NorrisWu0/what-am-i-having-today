import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';

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

export default function Header() {
  const date = new Date();
  const [currentDate, setCurrentDate] = useState(
    `${weekday[date.getDay()]}, ${date.getDate()} ${
      month[date.getMonth()]
    } ${date.getFullYear()}`
  );
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );
  useEffect(() => {
    setInterval(
      () =>
        setCurrentDate(
          `${weekday[date.getDay()]}, ${date.getDate()} ${
            month[date.getMonth()]
          } ${date.getFullYear()}`
        ),
      43200000
    );
    setInterval(() => setCurrentTime(new Date().toLocaleTimeString()), 1000);
  }, []);

  return (
    <div className="weather__header">
      <span>{currentDate}</span>
      <span>{currentTime}</span>
      <select className="weather__header__city-selector" name="ciy" id="city">
        <option value="sydney">Sydney</option>
        <option value="melbourne">Melbourne</option>
        <option value="canberra">Canberra</option>
        <option value="brisbane">Brisbane</option>
        <option value="adelaide">Adelaide</option>
      </select>
    </div>
  );
}

Header.propTypes = {};
