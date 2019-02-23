import React, { Component } from 'react';

export default class extends Component {
  getTodos = async () => {
    const { getTodos } = this.props;

    const todos = await getTodos();

    console.log(todos);
  };

  render() {
    const {
      todos,
      count,
      increment,
      incrementAsync,
      incrementIfOdd,
    } = this.props;

    return (
      <div>
        <header>
          <p>{count}</p>
          <button onClick={increment}>Increment</button>
          <button onClick={incrementAsync}>Increment async</button>
          <button onClick={incrementIfOdd}>Increment if odd</button>
          <button onClick={this.getTodos}>Get todos</button>
          <ul>
            {todos.map(todo => (
              <li key={todo.id}>{todo.title}</li>
            ))}
          </ul>
        </header>
      </div>
    );
  }
}
