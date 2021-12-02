const express = require('express');
const route = express.Router();

route.get('/',(req,res,next)=>{
    res.status(200).send("here is your data");
})

module.exports = route;