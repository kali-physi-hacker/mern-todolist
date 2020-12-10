const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const path = require('path')

const todoRoutes = require('./routes/todo')


const app = express()


mongoose.connect(process.env.MONGODB_URI, {})
.then(()=> {
    console.log("MongoDB Connection Successful")
})
.catch((error)=> {
    console.log(error)
})


app.use(express.json())
app.use(todoRoutes)

app.use(express.static("build"))

app.get("/", (request, response)=> {
    response.send(path.join(__dirname, "build", "index.html"))
})


app.listen(process.env.PORT, ()=> {
    console.log("Server started on PORT: 8080")
})


