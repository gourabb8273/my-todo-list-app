const express = require('express');
const route = express.Router();
const dummyData = require('../dummyData.json')



route.get('/',(req,res,next)=>{
    res.status(200).json({dummyData});
})

route.post('/',(req,res,next)=>{
    const body =req.body ;
    console.log('ggggg') ;
    console.log(body)
    res.status(200).json({body: req.body});
})

module.exports = route;