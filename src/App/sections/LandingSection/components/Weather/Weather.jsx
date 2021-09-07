import React from 'react';

import { Background } from './components';
import './Weather.css';

// import getWeatherDataFromLocation from './services/WeatherAPI';

// function Header({ updateWeatherData }) {
//   const [date, setDate] = useState(new Date().toLocaleDateString());
//   const [time, setTime] = useState(new Date().toLocaleTimeString());

//   return (
//     <div className="weather__header">
//       <span>
//         {date},{time}
//       </span>

//       <select name="city" id="city" onChange={updateWeatherData}>
//         <option value="sydney">Sydney</option>
//         <option value="melbourne">Melbourne</option>
//         <option value="canberra">Canberra</option>
//         <option value="brisbane">brisbane</option>
//         <option value="adelaide">Adelaide</option>
//       </select>
//     </div>
//   );
// }

// Header.propTypes = {
//   updateWeatherData: PropTypes.func.isRequired
// };

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
        {/* <Header updateWeatherData={updateWeatherData} />
         <ul>
        {weatherData &&
          weatherData.map((forecast, index) => (
            <ForecastItem forecast={forecast} index={index} />
            ))}
          </ul> */}
      </div>
    </div>
  );
}
