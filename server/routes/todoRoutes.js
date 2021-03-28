import express from 'express'

import { getTodos,
    // getTodo,
    createTodo,
    editTodo,
    deleteTodo } from '../controllers/todoController.js'

const router = express.Router()

router.route('/')
    .get(getTodos)
    .post(createTodo);

router.route('/:id')
    // .get(getTodo)
    .patch(editTodo)
    .delete(deleteTodo);

export default router;