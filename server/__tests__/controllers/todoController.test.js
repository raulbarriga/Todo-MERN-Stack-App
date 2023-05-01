import request from 'supertest';
import app from '../../app.js';
import Todo from "../../models/todoModel.js";


// test creating todo
test('create new todo', async () => {
    const newTodo = await Todo.create({ todo: 'Mow the lawn', completed: false });
    expect(newTodo).toBeDefined();
    expect(newTodo.todo).toBe('Mow the lawn');
    expect(newTodo.completed).toBe(false);
  });

describe('Test the todo creation route', () => {
  test('It should respond with a new todo object and status code 201', async () => {
    const res = await request(app)
      .post('/api/todos')
      .send({ todo: 'Learn Node.js', completed: false });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('_id');
    expect(res.body).toHaveProperty('todo', 'Learn Node.js');
    expect(res.body).toHaveProperty('completed', false);
  });
});

test('It should respond with an error message and status code 409 when incomplete data is sent', async () => {
  const res = await request(app)
    .post('/api/todos')
    .send({ todo: 'Learn Node.js' }); // missing completed field
  expect(res.statusCode).toBe(409);
  expect(res.body).toHaveProperty('message');
  expect(res.body.message).toMatch(/completed/);
});

// test fetching todo
describe('Test the todo retrieval route', () => {
  test('It should respond with an array of todo objects and status code 200', async () => {
    const res = await request(app)
      .get('/api/todos');
    expect(res.statusCode).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
    expect(res.body.length).toBeGreaterThan(0);
  });
});

// test editing todo
describe('Test the todo update route', () => {
  test('It should update a todo and respond with the updated todo object', async () => {
    const newTodo = await Todo.create({ todo: 'Buy milk', completed: false });
    const res = await request(app)
      .put(`/api/todos/${newTodo._id}`)
      .send({ todo: 'Buy eggs', completed: true });
    expect(res.status).toBe(200);
    expect(res.body.todo).toBe('Buy eggs');
    expect(res.body.completed).toBe(true);
  });

  test('It should return a 404 error if an invalid id is provided', async () => {
    const res = await request(app)
      .patch(`/api/todos/invalid-id`)
      .send({ todo: 'Buy eggs', completed: true });
    expect(res.status).toBe(404);
    expect(res.text).toContain('No post with id');
  });
});

// test deleting todo
describe('Test the delete todo route', () => {
  test('It should delete a todo object and respond with status code 200', async () => {
    const newTodo = await Todo.create({ todo: 'Buy groceries', completed: false });

    const res = await request(app)
      .delete(`/api/todos/${newTodo._id}`)
      .send();

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message', 'Todo deleted successfully.');
    
    const deletedTodo = await Todo.findById(newTodo._id);
    expect(deletedTodo).toBeNull();
  });

  test('It should respond with status code 404 if todo with given id does not exist', async () => {
    const res = await request(app)
      .delete(`/api/todos/1234`)
      .send();

    expect(res.statusCode).toBe(404);
    expect(res.text).toBe('No post with id: 1234');
  });
});
