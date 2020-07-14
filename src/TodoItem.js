import React from "react";

const TodoItem = ({ todo, deleteTodo }) => {

  return (
    <div className="TodoItem">
      <p>{todo.text}</p>
      <button onClick={() => { deleteTodo(todo.id) }}>Delete</button>
    </div>
  );

};

export default TodoItem;