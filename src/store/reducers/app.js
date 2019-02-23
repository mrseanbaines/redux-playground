import actionTypes from '../action-types';

const initialState = {
  count: 0,
};

export default (state = initialState, { type }) => {
  switch (type) {
    case actionTypes.app.INCREMENT_COUNTER: {
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
