import { combineReducers } from 'redux';

import work from './work.reducer';
import stake from './stake.reducer';
import ipfs from './ipfs.reducer';
import database from './database.reducer';
import distribution from './distribution.reducer';

export default combineReducers({
  work,
  stake,
  ipfs,
  database,
  distribution,
});