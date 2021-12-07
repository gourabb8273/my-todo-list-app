const express = require('express');
const route = express.Router();
const jwt = require('jsonwebtoken');

route.post('/', (req, res, next) => {
    const userId = req.body.userId;

    const token = jwt.sign(
        {
            userId
        }, 'secret'
    )
    res.status(200).json({ user: token, auth: true });
})

module.exports = route;