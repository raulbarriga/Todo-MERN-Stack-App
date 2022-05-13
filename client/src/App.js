import React, { useState, useEffect } from "react";

import {
  getTodos,
  createTodo,
  deleteATodo,
  editTodo,
} from "./api";
import AddTask from "./Components/AddTask";
import AllTasks from "./Components/AllTasks";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = () => {
    getTodos()
      .then((data) => setTodos(data))
      .catch((err) => console.log(err.message));
  };

  const saveTodo = (e, newTodo, setNewTodo) => {
    e.preventDefault();

    createTodo(newTodo)
      .then((data) => {
        console.log(data);
        setTodos([...todos, data]);
        console.log(todos);
      })
      .catch((err) => console.log(err.message));
    setNewTodo({
      todo: "",
      completed: false,
    });
  };

  const deleteTodo = (id) => {
    deleteATodo(id);

    return setTodos(todos.filter((todo) => todo._id !== id));
  };

  const updateTodo = (_id, todoChange) => {
    editTodo(_id, todoChange)
      .then(({ data }) => {
        setTodos(todos.map((todo) => (todo._id === data._id ? data : todo)));
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="app">
      <div className="app-wrapper">
        <header>
          <h1>To Do List</h1>
        </header>
        <AddTask saveTodo={saveTodo} />
        <AllTasks
          todos={todos}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
};

export default App;
