const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

const config = require('./helpers/config');

const taskRouter = require('./controllers/task');


app = express();

app.use(require('cors')());
app.use(bodyParser.json())


// Mongoose Database Connection Here
mongoose.connect(config.MONGODB_URI, config.MONGOOSE_OPTIONS)
    .then(()=> console.log("Connection to DB Sucess"))
    .catch(error=> console.log("Connection to DB Failed"))



// Routing Here
app.get('/', (request, response) => {
    response.send("Hey am working")
})
app.use('/api/tasks', taskRouter)



module.exports = app;