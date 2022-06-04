import { RequestHandler, Request, Response } from 'express'
import { Todos } from '../models/todos'

export const createTodo: RequestHandler = async (
  req: Request,
  res: Response,
  next
) => {
  const todos = await Todos.create({ ...req.body })
  return res
    .status(200)
    .json({ message: 'Todo created sucessfully', data: todos })
}

export const deleteTodo: RequestHandler = async (
  req: Request,
  res: Response,
  next
) => {
  const { id } = req.params
  const deleteTodo: Todos | null = await Todos.findByPk(id)

  await Todos.destroy({ where: { id } })
  return res
    .status(200)
    .json({ message: 'Todo delete successfully', data: deleteTodo })
}

export const getAllTodos: RequestHandler = async (
  req: Request,
  res: Response,
  next
) => {
  const todoList: Todos[] = await Todos.findAll()
  return res
    .status(200)
    .json({ message: 'Todo fetched successfully', data: todoList })
}
