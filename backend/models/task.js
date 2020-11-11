const mongoose = require('mongoose');


const taskSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    dateCompleted: {
        type: Date,
        default: Date.now()
    }
});


taskSchema.set('toJSON', {
    tranform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id;
        delete returnedObject.__v;
    }
})


Task = mongoose.model('Task', taskSchema);


module.exports = Task;