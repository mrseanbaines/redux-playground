import actionTypes from '../action-types';

const initialState = {
  loading: false,
  success: false,
  error: false,
  todos: [],
};

export default (state = initialState, { type, todos }) => {
  switch (type) {
    case actionTypes.todos.GET_TODOS_REQUEST: {
      return {
        ...state,
        loading: true,
        success: false,
        error: false,
      };
    }

    case actionTypes.todos.GET_TODOS_SUCCESS: {
      return {
        ...state,
        loading: false,
        success: true,
        error: false,
        todos,
      };
    }

    case actionTypes.todos.GET_TODOS_FAILURE: {
      return {
        ...state,
        loading: false,
        success: false,
        error: true,
      };
    }

    default: {
      return state;
    }
  }
};
