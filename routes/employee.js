const express = require('express');
const router = express.Router();
const Employee = require('../models/employee');

router.get('/', (req, res, next) => {
    const {
        user,
        query
    } = req;
    const filter = {};
    Employee.find(filter)
        .exec((err, employees) => {
            if (err) return next(err);
            return res.json(employees)
        });
});
router.post('/', (req, res, next) => {
    const {
        body
    } = req;
    Employee.create(body, (err, employee) => {
            if (err) return next(err);
            return res.json(employee);
        });
});
router.get('/:id', (req, res, next) => {
    const {
        params: {
            id
        }
    } = req;
    Employee.findById(id)
        .exec((err, employee) => {
            if (err) return next(err);
            return res.json(employee);
        });
});
router.put('/:id', (req, res, next) => {
    const {
        params: {
            id
        },
        body
    } = req;
    Employee.findByIdAndUpdate(id, body)
        .exec((err, result) => {
            if (err) return next(err);
            return res.json(result);
        });
});
router.delete('/:id', (req, res, next) => {
    const {
        params: {
            id
        }
    } = req;
    Employee.findByIdAndDelete(id)
        .exec((err, result) => {
            if (err) return next(err);
            return res.json(result);
        });
});

module.exports = router;