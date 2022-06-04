"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllTodos = exports.deleteTodo = exports.createTodo = void 0;
const todos_1 = require("../models/todos");
const createTodo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const todos = yield todos_1.Todos.create(Object.assign({}, req.body));
    return res
        .status(200)
        .json({ message: 'Todo created sucessfully', data: todos });
});
exports.createTodo = createTodo;
const deleteTodo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deleteTodo = yield todos_1.Todos.findByPk(id);
    yield todos_1.Todos.destroy({ where: { id } });
    return res
        .status(200)
        .json({ message: 'Todo delete successfully', data: deleteTodo });
});
exports.deleteTodo = deleteTodo;
const getAllTodos = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const todoList = yield todos_1.Todos.findAll();
    return res
        .status(200)
        .json({ message: 'Todo fetched successfully', data: todoList });
});
exports.getAllTodos = getAllTodos;
