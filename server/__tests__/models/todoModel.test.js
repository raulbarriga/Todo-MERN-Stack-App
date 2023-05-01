import { createTodo } from "../../controllers/todoController.js";
import Todo from "../../models/todoModel.js";

jest.mock(Todo); // Mock the Todo model

// test the todoModel
describe("createTodo function", () => {
  it("should create a new todo", async () => {
    const req = {
      body: {
        todo: "Mow the lawn",
        completed: false,
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const newTodo = { todo: "Mow the lawn", completed: false };

    Todo.mockReturnValueOnce(newTodo); // Mock the return value of the Todo constructor

    await createTodo(req, res);

    expect(Todo).toHaveBeenCalledTimes(1); // Ensure that the Todo constructor was called once
    expect(Todo).toHaveBeenCalledWith(newTodo); // Ensure that the Todo constructor was called with the correct parameters
    expect(res.status).toHaveBeenCalledWith(201); // Ensure that the response status is 201
    expect(res.json).toHaveBeenCalledWith(newTodo); // Ensure that the response body is the new todo
  });
});
