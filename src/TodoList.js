import React from "react";
import Todo from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuid } from 'uuid';
import TodoForm from "./TodoForm";

const TodoList = () => {
  const todos = useSelector(store => store.todos);
  const dispatch = useDispatch();

  const addTodo = (todo) => {
    todo.id = uuid();
    dispatch({ type: "ADD_TODO", payload: { todo } });
  }

  const deleteTodo = (id) => {
    dispatch({ type: "DELETE_TODO", payload: { id } })
  }

  return (
    <div className="TodoList">
      <h1>TodoList</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map(todo => <Todo todo={todo} deleteTodo={deleteTodo} key={todo.id} />)}
    </div>
  );
};

export default TodoList;