import Axios from 'axios';

const fetchEmojis = () =>
  Axios.get('https://api.github.com/emojis', {
    auth: {
      username: 'norriswu0',
      password: 'GitHub@667747'
    }
  });

const emojisRequested = () => ({
  type: 'REQUESTING_EMOJIS'
});

const requestSuccess = (res) => ({
  type: 'EMOJI_SUCCESS',
  data: { emojis: res.data }
});

const requestFailed = (err) => ({
  type: 'EMOJI_FAILED',
  data: { err }
});

const loadEmojis = () => {
  const callback = (dispatch) => {
    dispatch(emojisRequested());
    fetchEmojis()
      .then((res) => dispatch(requestSuccess(res)))
      .catch((err) => dispatch(requestFailed(err)));
  };

  return callback;
};

export default loadEmojis;
