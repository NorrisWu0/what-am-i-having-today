const initialState = {
  username: 'norris',
  status: 'offline',
  gender: 'male'
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_USERNAME':
      return {
        ...state,
        username: action.username
      };
    case 'UPDATE_STATUS':
      return {
        ...state,
        status: action.status
      };

    default:
      return state;
  }
};

export default user;
