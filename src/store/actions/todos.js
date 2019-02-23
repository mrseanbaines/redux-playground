import actionTypes from '../action-types';

const addTodoRequest = () => ({
  type: actionTypes.todos.ADD_TODO_REQUEST,
});

const addTodoSuccess = todos => ({
  type: actionTypes.todos.ADD_TODO_SUCCESS,
  todos,
});

const addTodoFailure = () => ({
  type: actionTypes.todos.ADD_TODO_FAILURE,
});

const getTodos = () => async dispatch => {
  try {
    dispatch(addTodoRequest());
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const json = await response.json();
    dispatch(addTodoSuccess(json));
    return json;
  } catch (error) {
    dispatch(addTodoFailure());
    console.error(error);
  }
};

export default {
  getTodos,
};
