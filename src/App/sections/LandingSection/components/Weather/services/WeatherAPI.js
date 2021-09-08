/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import Axios from 'axios';

const owApiKey = '9ef65dbbe776e08818279767bda17f77';
const owApiUrl = 'https://api.openweathermap.org/data/2.5/onecall';

const cityCoordinates = {
  sydney: {
    lat: -33.5204,
    lon: 151.1226
  },
  melbourne: {
    lat: -37.485,
    lon: 144.5747
  },
  canberra: {
    lat: -35.28346,
    lon: 149.12807
  },
  brisbane: {
    lat: -27.46794,
    lon: 153.02809
  },
  adelaide: {
    lat: -34.92866,
    lon: 138.59863
  }
};

export default async function getWeatherDataFromLocation({ location }) {
  const { lat, lon } = cityCoordinates[location];
  const filteredWeatherData = [];

  await Axios({
    method: 'get',
    url: owApiUrl,
    params: {
      appid: owApiKey,
      lat,
      lon,
      units: 'metric'
    }
  }).then((response) => {
    const { timezone_offset, daily } = response.data;

    if (daily) {
      daily.forEach((day) => {
        const { dt, sunrise, sunset, temp, weather } = day;
        const newData = {
          dt: (dt + timezone_offset) * 1000,
          sunrise: (sunrise + timezone_offset) * 1000,
          sunset: (sunset + timezone_offset) * 1000,
          temp: {
            min: temp.min,
            max: temp.max
          },
          weather: {
            main: weather[0].main,
            icon: `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`
          }
        };

        filteredWeatherData.push(newData);
      });
    }
  });

  return filteredWeatherData;
}

getWeatherDataFromLocation.propTypes = {
  location: PropTypes.string.isRequired,
  numberOfDays: PropTypes.number.isRequired
};
