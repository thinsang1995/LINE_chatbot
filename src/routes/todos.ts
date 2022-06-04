import { Router } from 'express'
import { createTodo, deleteTodo, getAllTodos } from '../controllers/todos'

const router = Router()

router.post('/', createTodo)
router.get('/', getAllTodos)
router.delete(':/id', deleteTodo)

export default router
