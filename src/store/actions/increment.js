import actionTypes from '../action-types';

const increment = () => ({
  type: actionTypes.app.INCREMENT_COUNTER,
});

const incrementAsync = () => dispatch => {
  setTimeout(() => {
    dispatch(increment());
  }, 1000);
};

const incrementIfOdd = () => (dispatch, getState) => {
  const { count } = getState().app;

  if (count % 2 === 0) {
    return;
  }

  dispatch(increment());
};

export default {
  increment,
  incrementAsync,
  incrementIfOdd,
};
