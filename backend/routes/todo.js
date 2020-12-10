const { getTodos, addTodo } = require('../controllers/todo')

const router = require('express').Router()


// /api/todos ===> Should return all todos ===> getTodos
// /api/todos/new ===> Should create a new todo ==> addTodo


router.get("/api/todos", getTodos)
router.post("/api/todos/new", addTodo)


module.exports = router