import { connect } from 'react-redux';
import App from '../components/App';
import { incrementActions, todosActions } from '../store/actions';

const mapStateToProps = ({ app, todos }) => ({
  count: app.count,
  todos: todos.todos,
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(incrementActions.increment()),
  incrementAsync: () => dispatch(incrementActions.incrementAsync()),
  incrementIfOdd: () => dispatch(incrementActions.incrementIfOdd()),
  getTodos: () => dispatch(todosActions.getTodos()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
