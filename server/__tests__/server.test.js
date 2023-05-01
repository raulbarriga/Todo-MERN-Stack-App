import request from 'supertest';
import app from '../app.js';

// check for unknown routes
describe('Test unknown route handling', () => {
  test('It should respond with a 404 status code and a message', async () => {
    const res = await request(app).get('/api/unknown-route');
    expect(res.statusCode).toBe(404);
    expect(res.text).toBe('Not Found');
  });
});