import config from 'configs';
import stake from 'blockchain/libs/stake';

/**
 * Default
 */
const defaultData = {
  NETWORK: null,
  ACCOUNT: null,
  STAKE: null
}
const defaultState = {}

/**
 * Fetch info
 */
export const FETCH_STAKE= 'FETCH_STAKE';
export const FETCH_STAKE_OK = 'FETCH_STAKE_OK';
export const FETCH_STAKE_FAIL = 'FETCH_STAKE_FAIL';

function _fetchInfo(callback) {
  try {
    var web3 = window.capsuleWallet.provider.web3;
  }
  catch (er) {
    if (er) return callback(er, null);
  }
  let STAKE = new stake(config.eth.DATABASE.ADDRESS, web3);
  web3.eth.getAccounts((er, accounts) => {
    if (er) return callback(er, null);

    let account = accounts[0];
    web3.version.getNetwork((er, network) => {
      STAKE.stakeOf(account).then(balance => {
        if (er) return callback(er, null);
        balance = balance / 10 ** 18;
        return callback(null, {
          NETWORK: network,
          ACCOUNT: account,
          STAKE: balance
        });
      }).catch(er => {
        return callback(er, null);
      });
    });
  });
}

export const fetchStakeInfo = () => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      dispatch({ type: FETCH_STAKE});
      _fetchInfo((er, re) => {
        if (er) {
          dispatch({ type: FETCH_STAKE_FAIL, reason: er, data: defaultData });
          return reject(er);
        }
        dispatch({ type: FETCH_STAKE_OK, reason: null, data: re });
        return resolve(re);
      });
    });
  }
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_STAKE_OK:
      return { ...state, ...action.data };
    case FETCH_STAKE_FAIL:
      return { ...state, ...action.data };
    default:
      return state;
  }
}
