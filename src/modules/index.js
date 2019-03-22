import { combineReducers } from 'redux';

import work from './work.reducer';
import stake from './stake.reducer';
import ipfs from './ipfs.reducer';
import database from './database.reducer';

export default combineReducers({
  work,
  stake,
  ipfs,
  database
});