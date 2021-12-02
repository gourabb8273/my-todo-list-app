const http = require('http');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const toDoListRouter = require('./routes/toDoList');

const app = express();
const server = http.createServer(app);

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use("/api/list",toDoListRouter);

app.use("/",(req,res,next)=>{
    res.send("hello");
})

server.listen(8080,()=>{
    console.log("server is running");
})