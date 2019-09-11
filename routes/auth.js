const express = require('express');
const router = express.Router();
const Employee = require('../models/employee');
const jwt = require('jsonwebtoken');

router.post('/login', (req, res, next) => {
    const {
        body: {
            username,
            password
        }
    } = req;
    Employee.findOne({
        username,
        password
    }, (err, employee) => {
        if (err) return next(err);
        return res.json({
            token: jwt.sign({
                ...employee
            }, process.env.SECRET_KEY)
        });
    });
});
router.post('/logout', (req, res, next) => {
    return res.end();
});

module.exports = router;