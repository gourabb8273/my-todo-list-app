const express = require('express');
const route = express.Router();
const jwt = require('jsonwebtoken');
require('dotenv').config();

route.post('/', (req, res, next) => {
    const userId = req.body.userId;
    const secretKey = process.env.SECRET_KEY;    

    const token = jwt.sign(
        {
            userId
        }, secretKey
    )
    //save token in cookie
    res.cookie('authcookiejwt',token,
        {
            expires:new Date(Date.now() + 10000),
            httpOnly:true
        })     
    res.status(200).json({ userToken: token, auth: true });
})

module.exports = route;