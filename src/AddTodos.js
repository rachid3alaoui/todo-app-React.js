import React, { Component } from 'react';

class AddTodos extends Component {
  state = {
    content: '',
  };

  handleInput = (event) => {
    const newTodo = event.target.value;
    this.setState({
      content: newTodo,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      content: '',
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="addTodo"> Add new Todo : </label>
          <input
            type="text"
            onChange={this.handleInput}
            value={this.state.content}
          />
          <input
            type="submit"
            className="btn waves-effect waves-light"
            value="Save"
          />
        </form>
      </div>
    );
  }
}

export default AddTodos;
