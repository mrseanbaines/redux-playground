import actionTypes from '../action-types';

const getTodosRequest = () => ({
  type: actionTypes.todos.get.request,
});

const getTodosSuccess = todos => ({
  type: actionTypes.todos.get.success,
  todos,
});

const getTodosFailure = () => ({
  type: actionTypes.todos.get.failure,
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
