const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const config = require('./helpers/config');

const taskRouter = require('./controllers/task');


app = express();

app.use(require('cors')());
app.use(bodyParser.json())
app.use(express.static("public/build"));


// Mongoose Database Connection Here
mongoose.connect(config.MONGODB_URI, config.MONGOOSE_OPTIONS)
    .then(()=> console.log("Connection to DB Sucess"))
    .catch(error=> console.log("Connection to DB Failed"))



// Routing Here
app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname) + "index.html")
})
app.use('/api/tasks', taskRouter)



module.exports = app;