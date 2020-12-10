const Todo = require('../models/todo')


const getTodos = async (request, response) => {
    await Todo.find({}).exec((error, todos)=> {
        if (error) {
            response.status(500).send({
                error: "INTERNAL SERVER ERROR"
            })
        }

        response.send(todos)
    })
}

/**
 * {name: ""}
 * @param {*} request 
 * @param {*} response 
 */
const addTodo = async (request, response) => {
    const todo = Todo(request.body)
    try {
        const newTodo = await todo.save()
        response.json(newTodo)
    } catch (error) {
        console.log(error)
        response.status(500).send({error: "INTERNAL SERVER ERROR"})
    }
}


module.exports = {
    getTodos,
    addTodo
}