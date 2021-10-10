const initialState = {
  loading: false,
  emojis: {},
  err: null
};

const emojis = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUESTING_EMOJIS':
      return {
        ...state,
        loading: true
      };

    case 'EMOJI_SUCCESS':
      return {
        ...state,
        loading: false,
        emojis: action.data.emojis
      };

    case 'EMOJI_FAILED':
      return {
        ...state,
        loading: false,
        err: action.data.err
      };

    default: {
      return state;
    }
  }
};

export default emojis;
