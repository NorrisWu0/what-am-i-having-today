import Axios from 'axios';

const fetchRepos = () =>
  Axios.get('https://api.github.com/users/norriswu0/repos', {
    auth: {
      username: 'norriswu0',
      password: 'GitHub@667747'
    }
  });

export default fetchRepos;
