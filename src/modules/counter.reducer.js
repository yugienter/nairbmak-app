export const INCREMENT = 'INCREMENT';
export const INCREMENT_OK = 'INCREMENT_OK';
export const INCREMENT_FAIL = 'INCREMENT_FAIL';

const defaultState = {
  count: 0
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case INCREMENT_OK:
      return { ...state, count: state.count + action.data };
    default:
      return state;
  }
}

export const increase = (num) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      dispatch({ type: INCREMENT });

      if (num <= 0) {
        var err = 'Inputs must be greater than 0.';
        dispatch({ type: INCREMENT_FAIL, reason: err });
        return reject(err);
      }

      dispatch({ type: INCREMENT_OK, data: num });
      return resolve(num);
    });
  }
}