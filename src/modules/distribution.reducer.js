import config from 'configs';
import distribution from 'blockchain/libs/distribution';

/**
 * Default
 */
const defaultState = {
  txId: null
}

/**
 * Submit report
 */
export const SHARE = 'SHARE';
export const SHARE_OK = 'SHARE_OK';
export const SHARE_FAIL = 'SHARE_FAIL';

function _share(callback) {
  let web3 = window.kambriaWallet.web3;
  let DISTRIBUTION = new distribution(config.eth.DISTRIBUTION.ADDRESS, web3);
  DISTRIBUTION.share().then(txId => {
    return callback(null, txId);
  }).catch(er => {
    if (er) return callback(er, null);
  });
}

export const share = () => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      dispatch({ type: SHARE });
      _share((er, re) => {
        if (er) {
          dispatch({ type: SHARE_OK, reason: er, data: defaultState });
          return reject(er);
        }
        dispatch({ type: SHARE_FAIL, reason: null, data: { txId: re } });
        return resolve(re);
      });
    });
  }
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case SHARE_OK:
      return { ...state, ...action.data };
    case SHARE_FAIL:
      return { ...state, ...action.data };
    default:
      return state;
  }
}
