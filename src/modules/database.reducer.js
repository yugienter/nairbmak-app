import config from 'configs';
import database from 'blockchain/libs/database';

/**
 * Default
 */
const defaultState = {}

/**
 * Fetch info
 */
export const SUBMIT_REPORT = 'SUBMIT_REPORT';
export const SUBMIT_REPORT_OK = 'SUBMIT_REPORT_OK';
export const SUBMIT_REPORT_FAIL = 'SUBMIT_REPORT_FAIL';

function _submitReport(hash, reviewers, references, callback) {
  let web3 = window.kambriaWallet.web3;
  let DATABASE = new database(config.eth.DATABASE.ADDRESS, web3);
  DATABASE.submitReport(hash, reviewers, references).then(txId => {
    return callback(null, txId);
  }).catch(er => {
    if (er) return callback(er, null);
  });
}

export const submitReport = (hash, reviewers, references) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      dispatch({ type: SUBMIT_REPORT });
      _submitReport(hash, reviewers, references, (er, re) => {
        if (er) {
          dispatch({ type: SUBMIT_REPORT_OK, reason: er, data: null });
          return reject(er);
        }
        dispatch({ type: SUBMIT_REPORT_FAIL, reason: null, data: re });
        return resolve(re);
      });
    });
  }
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case SUBMIT_REPORT_OK:
      return { ...state, ...action.data };
    case SUBMIT_REPORT_FAIL:
      return { ...state, ...action.data };
    default:
      return state;
  }
}
