import Axios from 'axios';

const fetchEmojis = () =>
  Axios.get('https://api.github.com/emojis', {
    auth: {
      username: process.env.REACT_APP_GITHUB_USERNAME,
      password: process.env.REACT_APP_GITHUB_PASSWORD
    }
  });

export default fetchEmojis;
