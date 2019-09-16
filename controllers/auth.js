const Employee = require('../models/employee');
const createError = require('http-errors');
const jwt = require('jsonwebtoken');

module.exports = {
    login: (req, res, next) => {
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
            console.log(employee);
            if (err) return next(err);
            if (!employee) return next(createError(403, new Error('Login: Forbidden')));
            return res.json({
                token: jwt.sign({
                    ...employee
                }, 'myAppSecretKey'),
                user: employee
            });
        });
    },
}