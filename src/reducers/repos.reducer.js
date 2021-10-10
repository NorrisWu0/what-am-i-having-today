const initialState = {
  loading: false,
  repos: [],
  err: null
};

const repos = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUESTING_REPOS':
      return {
        ...state,
        loading: true
      };

    case 'REPOS_SUCCESS':
      return {
        ...state,
        loading: false,
        repos: action.data.repos
      };

    case 'REPOS_FAILED':
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

export default repos;
