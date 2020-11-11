const taskRouter = require('express').Router()

const Task = require('../models/task');


taskRouter.get('/', async (request, response) => {
    /**
     * Return all todo tasks
     */

    await Task.find({}).exec((error, tasks)=> {
        if (error) {
            response.status(500).send({error: "Internal Server Error"});
        }
        response.status(200).send(tasks)
    })
})

taskRouter.post('/', async (request, response) => {
    /**
     * Add a task to todoList
     */
    const task = new Task(request.body);
    const saved_inst = await task.save();
    response.status(201).send(saved_inst);
})


taskRouter.get('/:id', async (request, response) => {
    /**
     * Return a particular todo item
     */

     await Task.findById(request.params.id).exec((error, task) => {
         if (error) {
             response.status(500).send({error: "Internal Server Error"})
         }
         if (!task) {
             response.status(400).send({error: "No Task Found"})
         }
         response.status(200).send(task)
     })
})

taskRouter.put('/:id', async (request, response) => {
    /**
     * Update a single task
     */

    await Task.findByIdAndUpdate(request.params.id, {...request.body}, (error, task) => {
        if (error) {
            response.status(500).send({error: "Internal Server Error"})
        }

        response.status(200).send(task);
    })
})


module.exports = taskRouter;