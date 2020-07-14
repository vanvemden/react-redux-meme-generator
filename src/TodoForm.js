import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {

  const [formData, setFormData] = useState({ text: "" });

  const handleChange = evt => {
    const value = evt.target.value;
    setFormData({ text: value });
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addTodo(formData);
    setFormData({ text: "" });
  }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <label htmlFor="text">Todo </label>
      <input name="text" id="text" placeholder="Enter what you have todo..." value={formData.text} onChange={handleChange} />
      <button>Submit</button>
    </form>
  );
};

export default TodoForm
  ;