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
  const { data } = await Axios({
    method: 'get',
    url: owApiUrl,
    params: {
      appid: owApiKey,
      lat,
      lon,
      units: 'metric'
    }
  });

  return data;
}

getWeatherDataFromLocation.propTypes = {
  location: PropTypes.string.isRequired,
  numberOfDays: PropTypes.number.isRequired
};
