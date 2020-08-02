import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Todos from './Todos';
import AddTodos from './AddTodos';

class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'Buy some milk' },
      { id: 2, content: 'Do homework' },
      { id: 3, content: 'Clean house' },
    ],
  };
  deleteTodo = (e) => {
    const todoID = Number(e.target.getAttribute('todo_id'));
    const filteredList = this.state.todos.filter((todo) => todo.id !== todoID);
    const confirm = window.confirm('Do you really want to delete this todo ?');
    if (confirm) {
      this.setState({
        todos: filteredList,
      });
    }
  };

  addTodo = (newTodo) => {
    newTodo.id = Math.random();
    let todos = [...this.state.todos, newTodo];
    this.setState({
      todos: todos,
    });
  };

  render() {
    return (
      <div className="App container">
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodos addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
