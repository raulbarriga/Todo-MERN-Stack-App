import mongoose from "mongoose";
import Todo from "../models/todoModel.js";

export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();

    res.status(200).json(todos);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createTodo = async (req, res) => {
  const todo = req.body; // the whole todo

  const newTodo = new Todo(todo);
  try {
    await newTodo.save();

    //status 201 = new creation successful
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const editTodo = async (req, res) => {
  const { id: _id } = req.params;
  const todo = req.body; // the whole todo

  //check if the id is a valid mongoose id
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send(`No post with id: ${_id}`);

  const editedTodo = await Todo.findByIdAndUpdate(_id, todo, {
    new: true,
  }); // new true is so we can receive the updated version of the post

  res.json(editedTodo);
};

export const deleteTodo = async (req, res) => {
  const { id } = req.params;

  //check if the id is a valid mongoose id
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await Todo.findByIdAndRemove(id);

  res.json({ message: "Todo deleted successfully." });
};
