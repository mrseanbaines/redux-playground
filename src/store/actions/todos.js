import actionTypes from '../action-types';

const getTodosRequest = () => ({
  type: actionTypes.todos.GET_TODOS_REQUEST,
});

const getTodosSuccess = todos => ({
  type: actionTypes.todos.GET_TODOS_SUCCESS,
  todos,
});

const getTodosFailure = () => ({
  type: actionTypes.todos.GET_TODOS_FAILURE,
});

const getTodos = () => async dispatch => {
  try {
    dispatch(getTodosRequest());
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const json = await response.json();
    dispatch(getTodosSuccess(json));
    return json;
  } catch (error) {
    dispatch(getTodosFailure());
    console.error(error);
  }
};

export default {
  getTodos,
};
