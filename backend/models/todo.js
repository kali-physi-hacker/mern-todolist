const mongoose = require('mongoose')


const todoSchema = mongoose.Schema({
    name: {type: String, required: true},
    date_created: {type: Date, default: Date.now},
    completed: {type: Boolean, default: false}
})


todoSchema.set('toJSON', {
    transform: (doc, todo) => {
        todo.id = todo._id.toString()
        delete todo._id 
        delete todo.__v
    }
})


const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo

