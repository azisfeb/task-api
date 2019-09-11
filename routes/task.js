const express = require('express');
const router = express.Router();
const Task = require('../models/task');

router.get('/', (req, res, next) => {
    // const {
    //     query
    // } = req;
    // Task.find();
    return res.json(req);
});
router.post('/', (req, res, next) => {
    // const {
    //     body
    // } = req;
    // new Task(body);
    return res.json(req);
});
router.get('/:id', (req, res, next) => {
    // const {
    //     params: {
    //         id
    //     }
    // } = req;
    // Task.findById(id);
    return res.json(req);
});
router.put('/:id', (req, res, next) => {
    // const {
    //     params: {
    //         id
    //     },
    //     body
    // } = req;
    // Task.findByIdAndUpdate(id, body);
    return res.json(req);
});
router.delete('/:id', (req, res, next) => {
    // const {
    //     params: {
    //         id
    //     }
    // } = req;
    // Task.findByIdAndDelete(id);
    return res.json(req);
});

module.exports = router;