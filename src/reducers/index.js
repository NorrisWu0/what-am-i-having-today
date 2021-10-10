import { combineReducers } from 'redux';

import user from './user.reducer';
import repos from './repos.reducer';
import emojis from './emojis.reducer';

export default combineReducers({
  user,
  repos,
  emojis
});
