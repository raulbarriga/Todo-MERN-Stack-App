import express from 'express'

import { getTodos,
    createTodo,
    editTodo,
    deleteTodo } from '../controllers/todoController.js'

const router = express.Router()

router.route('/')
    .get(getTodos)
    .post(createTodo);

router.route('/:id')
    .patch(editTodo)
    .delete(deleteTodo);

export default router;