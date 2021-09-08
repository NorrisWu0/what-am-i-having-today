/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import Axios from 'axios';

const owApiKey = '9ef65dbbe776e08818279767bda17f77';
const owApiUrl = 'https://api.openweathermap.org/data/2.5/onecall';

const cityAvailable = {
  sydney: {
    lat: -33.5204,
    lon: 151.1226,
    bgImg:
      'https://images.unsplash.com/photo-1565194388949-64569b118e53?fit=crop&w=2090&h=800'
  },
  melbourne: {
    lat: -37.485,
    lon: 144.5747,
    bgImg:
      'https://images.unsplash.com/photo-1470294402047-fc1b5f39bd99?fit=crop&w=2090&h=800'
  },
  canberra: {
    lat: -35.28346,
    lon: 149.12807,
    bgImg:
      'https://images.unsplash.com/photo-1510546020578-a35ae9fcfb0f?fit=crop&w=2090&h=800'
  },
  brisbane: {
    lat: -27.46794,
    lon: 153.02809,
    bgImg:
      'https://images.unsplash.com/photo-1553054016-374a8fef247a?fit=crop&w=2090&h=800'
  },
  adelaide: {
    lat: -34.92866,
    lon: 138.59863,
    bgImg:
      'https://images.unsplash.com/photo-1558406665-ce46cc44e96e?fit=crop&w=2090&h=800'
  }
};

export default async function getWeatherDataFromLocation({ location }) {
  const { lat, lon } = cityAvailable[location];
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

  return { background: cityAvailable[location].bgImg, filteredWeatherData };
}

getWeatherDataFromLocation.propTypes = {
  location: PropTypes.string.isRequired,
  numberOfDays: PropTypes.number.isRequired
};
