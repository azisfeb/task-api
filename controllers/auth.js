const Employee = require('../models/employee');
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
            if (err) return next(err);
            return res.json({
                token: jwt.sign({
                    ...employee
                }, process.env.SECRET_KEY)
            });
        });
    },
}