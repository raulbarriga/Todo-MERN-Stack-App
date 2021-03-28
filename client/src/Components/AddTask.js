import React, { useState } from "react";

const AddTask = ({ saveTodo }) => {
  const [newTodo, setNewTodo] = useState({
    todo: "",
    completed: false,
  });

  const handleForm = (e) => {
    setNewTodo({ ...newTodo, todo: e.target.value });
    console.log(newTodo);
  };

  return (
    <div className="add-task">
      <form onSubmit={(e) => saveTodo(e, newTodo, setNewTodo)}>
        <input
          type="text"
          placeholder="Add New Task"
          onChange={handleForm}
          value={newTodo.todo}
        />
        <button>&#43;</button>
      </form>
    </div>
  );
};

export default AddTask;
