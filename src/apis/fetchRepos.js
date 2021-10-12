import Axios from 'axios';

const fetchRepos = () =>
  Axios.get('https://api.github.com/users/norriswu0/repos', {
    auth: {
      username: process.env.REACT_APP_GITHUB_USERNAME,
      password: process.env.REACT_APP_GITHUB_PASSWORD
    }
  });

export default fetchRepos;
