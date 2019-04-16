import config from 'configs';
import database from 'blockchain/libs/database';

/**
 * Default
 */
const defaultState = {
  txId: null,
  report: null,
  hash: null
}

/**
 * Submit report
 */
export const SUBMIT_REPORT = 'SUBMIT_REPORT';
export const SUBMIT_REPORT_OK = 'SUBMIT_REPORT_OK';
export const SUBMIT_REPORT_FAIL = 'SUBMIT_REPORT_FAIL';

function _submitReport(hash, reviewers, callback) {
  try {
    var web3 = window.capsuleWalletTomo.provider.web3;
  }
  catch (er) {
    if (er) return callback(er, null);
  }
  let DATABASE = new database(config.eth.DATABASE.ADDRESS, web3);
  DATABASE.submitReport(hash, reviewers).then(txId => {
    return callback(null, txId);
  }).catch(er => {
    if (er) return callback(er, null);
  });
}

export const submitReport = (hash, reviewers) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      dispatch({ type: SUBMIT_REPORT });
      _submitReport(hash, reviewers, (er, re) => {
        if (er) {
          dispatch({ type: SUBMIT_REPORT_OK, reason: er, data: defaultState });
          return reject(er);
        }
        dispatch({ type: SUBMIT_REPORT_FAIL, reason: null, data: { txId: re } });
        return resolve(re);
      });
    });
  }
}

/**
 * Score report
 */
export const SCORE_REPORT = 'SCORE_REPORT';
export const SCORE_REPORT_OK = 'SCORE_REPORT_OK';
export const SCORE_REPORT_FAIL = 'SCORE_REPORT_FAIL';

function _scoreReport(hash, completeness, importance, callback) {
  try {
    var web3 = window.capsuleWalletTomo.provider.web3;
  }
  catch (er) {
    if (er) return callback(er, null);
  }
  let DATABASE = new database(config.eth.DATABASE.ADDRESS, web3);
  DATABASE.scoreReport(hash, completeness, importance).then(txId => {
    return callback(null, txId);
  }).catch(er => {
    if (er) return callback(er, null);
  });
}

export const scoreReport = (hash, completeness, importance) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      dispatch({ type: SCORE_REPORT });
      _scoreReport(hash, completeness, importance, (er, re) => {
        if (er) {
          dispatch({ type: SCORE_REPORT_OK, reason: er, data: defaultState });
          return reject(er);
        }
        dispatch({ type: SCORE_REPORT_FAIL, reason: null, data: { txId: re } });
        return resolve(re);
      });
    });
  }
}

/**
 * Close report
 */
export const CLOSE_REPORT = 'CLOSE_REPORT';
export const CLOSE_REPORT_OK = 'CLOSE_REPORT_OK';
export const CLOSE_REPORT_FAIL = 'CLOSE_REPORT_FAIL';

function _closeReport(hash, callback) {
  try {
    var web3 = window.capsuleWalletTomo.provider.web3;
  }
  catch (er) {
    if (er) return callback(er, null);
  }
  let DATABASE = new database(config.eth.DATABASE.ADDRESS, web3);
  DATABASE.closeReport(hash).then(txId => {
    return callback(null, txId);
  }).catch(er => {
    if (er) return callback(er, null);
  });
}

export const closeReport = (hash) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      dispatch({ type: CLOSE_REPORT });
      _closeReport(hash, (er, re) => {
        if (er) {
          dispatch({ type: CLOSE_REPORT_OK, reason: er, data: defaultState });
          return reject(er);
        }
        dispatch({ type: CLOSE_REPORT_FAIL, reason: null, data: { txId: re } });
        return resolve(re);
      });
    });
  }
}

/**
 * Get report
 */
export const GET_REPORT = 'GET_REPORT';
export const GET_REPORT_OK = 'GET_REPORT_OK';
export const GET_REPORT_FAIL = 'GET_REPORT_FAIL';

function _getReport(hash, callback) {
  try {
    var web3 = window.capsuleWalletTomo.provider.web3;
  }
  catch (er) {
    if (er) return callback(er, null);
  }
  let DATABASE = new database(config.eth.DATABASE.ADDRESS, web3);
  DATABASE.getReport(hash).then(report => {
    return callback(null, report);
  }).catch(er => {
    if (er) return callback(er, null);
  });
}

export const getReport = (hash) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      dispatch({ type: GET_REPORT });
      _getReport(hash, (er, re) => {
        if (er) {
          dispatch({ type: GET_REPORT_OK, reason: er, data: defaultState });
          return reject(er);
        }
        dispatch({ type: GET_REPORT_FAIL, reason: null, data: { report: re } });
        return resolve(re);
      });
    });
  }
}

/**
 * Get explorer
 */
export const GET_EXPLORER = 'GET_EXPLORER';
export const GET_EXPLORER_OK = 'GET_EXPLORER_OK';
export const GET_EXPLORER_FAIL = 'GET_EXPLORER_FAIL';

function _getExplorer(index, callback) {
  try {
    var web3 = window.capsuleWalletTomo.provider.web3;
  }
  catch (er) {
    if (er) return callback(er, null);
  }
  let DATABASE = new database(config.eth.DATABASE.ADDRESS, web3);
  DATABASE.getExplorer(index).then(report => {
    return callback(null, report);
  }).catch(er => {
    if (er) return callback(er, null);
  });
}

export const getExplorer = (index) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      dispatch({ type: GET_EXPLORER });
      _getExplorer(index, (er, re) => {
        if (er) {
          dispatch({ type: GET_EXPLORER_OK, reason: er, data: defaultState });
          return reject(er);
        }
        dispatch({ type: GET_EXPLORER_FAIL, reason: null, data: { hash: re } });
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
    case SCORE_REPORT_OK:
      return { ...state, ...action.data };
    case SCORE_REPORT_FAIL:
      return { ...state, ...action.data };
    case CLOSE_REPORT_OK:
      return { ...state, ...action.data };
    case CLOSE_REPORT_FAIL:
      return { ...state, ...action.data };
    case GET_REPORT_OK:
      return { ...state, ...action.data };
    case GET_REPORT_FAIL:
      return { ...state, ...action.data };
    case GET_EXPLORER_OK:
      return { ...state, ...action.data };
    case GET_EXPLORER_FAIL:
      return { ...state, ...action.data };
    default:
      return state;
  }
}
