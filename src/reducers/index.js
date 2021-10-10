import { combineReducers } from 'redux';

import { repos } from './repos';
import user from './user.reducer';

export default combineReducers({
  user,
  repos
});
