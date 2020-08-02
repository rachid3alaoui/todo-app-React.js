import React from 'react';

const Todos = ({ todos, deleteTodo }) => {
  const todosList = todos.map((todo) => {
    return (
      <li
        className="collection-item"
        key={todo.id}
        todo_id={todo.id}
        onClick={deleteTodo}
      >
        {todo.content}
      </li>
    );
  });

  const showTodos = todos.length ? (
    <ul className="collection">{todosList}</ul>
  ) : (
    <h4 className="center-align red-text"> You have no todo left!</h4>
  );

  return (
    <div>
      <h2 className="center-align"> Todo's !</h2>
      {showTodos}
    </div>
  );
};

export default Todos;
