import axios from "axios";

// development server url
// const url = "http://localhost:8000/api/todos";
// // heroku server url
const url = "https://todo-mern-apprentice-app.herokuapp.com/api/todos";

export const getTodos = async () => {
  try {
    const { data } = await axios.get(url);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const createTodo = async (newTodo) => {
  try {
    const todo = {
      todo: newTodo.todo,
      completed: newTodo.completed,
    };
    const { data } = await axios.post(url, todo);

    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteATodo = async (_id) => {
  try {
    await axios.delete(`${url}/${_id}`);
  } catch (error) {
    console.log(error.message);
  }
};

export const editTodo = async (_id, todoChange) => {
  try {
    console.log(todoChange);

    const data = axios.patch(`${url}/${_id}`, todoChange);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
