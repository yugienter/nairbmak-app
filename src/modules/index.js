import { combineReducers } from 'redux';

import work from './work.reducer';
import stake from './stake.reducer';

export default combineReducers({
  work,
  stake
});