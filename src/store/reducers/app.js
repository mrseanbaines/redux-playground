import actionTypes from '../action-types';

const initialState = {
  count: 0,
};

export default (state = initialState, { type }) => {
  switch (type) {
    case actionTypes.app.counter.increment: {
      return {
        ...state,
        count: state.count + 1,
      };
    }

    default: {
      return state;
    }
  }
};
