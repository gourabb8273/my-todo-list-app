const http = require('http');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser')

const toDoListRouter = require('./routes/toDoList');
const credentialRoute = require('./routes/userCredential');

const app = express();
const server = http.createServer(app);
const corsOption ={
    origin: 'http://localhost:3000',
    optionSuccessStatus: 200,
    method: "GET, POST, DELETE"
}
app.use(cookieParser());
app.use(cors(corsOption))
app.use(bodyParser.json());
app.use(morgan('dev'));


app.use("/api/list",toDoListRouter);
app.use("/api/login",credentialRoute);

app.use("/",(req,res,next)=>{
    res.send("hello");
})

server.listen(8080,()=>{
    console.log("server is running");
})