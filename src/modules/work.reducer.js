import config from 'configs';
import work from 'blockchain/libs/work';

/**
 * Default
 */
const defaultData = {
  NETWORK: null,
  ACCOUNT: null,
  WORK: null
}
const defaultState = {}

/**
 * Fetch info
 */
export const FETCH_WORK = 'FETCH_WORK';
export const FETCH_WORK_OK = 'FETCH_WORK_OK';
export const FETCH_WORK_FAIL = 'FETCH_WORK_FAIL';

function _fetchInfo(callback) {
  let web3 = window.kambriaWallet.web3;
  let WORK = new work(config.eth.WORK.ADDRESS, web3);
  web3.eth.getAccounts((er, accounts) => {
    if (er) return callback(er, null);

    let account = accounts[0];
    web3.version.getNetwork((er, network) => {
      WORK.balanceOf(account).then(balance => {
        if (er) return callback(er, null);
        balance = balance / 10 ** 18;
        return callback(null, {
          NETWORK: network,
          ACCOUNT: account,
          WORK: balance
        });
      }).catch(er => {
        return callback(er, null);
      });
    });
  });
}

export const fetchWorkInfo = () => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      dispatch({ type: FETCH_WORK });
      _fetchInfo((er, re) => {
        if (er) {
          dispatch({ type: FETCH_WORK_FAIL, reason: er, data: defaultData });
          return reject(er);
        }
        dispatch({ type: FETCH_WORK_OK, reason: null, data: re });
        return resolve(re);
      });
    });
  }
}

/**
 * Transfer WORK
 */
export const TRANSFER_WORK = 'TRANSFER_WORK';
export const TRANSFER_WORK_OK = 'TRANSFER_WORK_OK';
export const TRANSFER_WORK_FAIL = 'TRANSFER_WORK_FAIL';

function _transferWORK(to, amount, callback) {
  let web3 = window.kambriaWallet.web3;
  let WORK = new work(config.eth.WORK.ADDRESS, web3);
  WORK.transfer(to, amount).then(txId => {
    return callback(null, txId);
  }).catch(er => {
    if (er) return callback(er, null);
  });
}

export const transferWORK = (to, amount) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      dispatch({ type: TRANSFER_WORK });
      _transferWORK(to, amount, (er, re) => {
        if (er) {
          dispatch({ type: TRANSFER_WORK_OK, reason: er, data: null });
          return reject(er);
        }
        dispatch({ type: TRANSFER_WORK_FAIL, reason: null, data: re });
        return resolve(re);
      });
    });
  }
}


export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_WORK_OK:
      return { ...state, ...action.data };
    case FETCH_WORK_FAIL:
      return { ...state, ...action.data };
    case TRANSFER_WORK_OK:
      return { ...state, ...action.data };
    case TRANSFER_WORK_FAIL:
      return { ...state, ...action.data };
    default:
      return state;
  }
}
