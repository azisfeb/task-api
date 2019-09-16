const Task = require('../models/task');
const createError = require('http-errors');

module.exports = {
    getTasks: (req, res, next) => {
        const {
            user
        } = req;
        let filter = {}

        if(user._doc.role != 'manager'){
            filter = {
                owner: user._doc
            }
        }

        Task.find(filter)
            .exec((err, tasks) => {
                if(err) return next(err);
                return res.json(tasks);
            })
    },
    getTaskById: (req, res, next) => {
        const {
            params: {
                id
            }
        } = req;
        Task.findById(id)
            .exec((err, task) => {
                if(err) return next(err);
                return res.json(task);
            })
    },
    saveTask: (req, res, next) => {
        const {
            user,
            body
        } = req;
        Task.create({
            ...body,
            owner: user._doc._id
        }, (err, task) => {
            if(err) return next(err);
            return res.json(task);
        })
    },
    updateTask: (req, res, next) => {
        const {
            params: {
                id
            },
            body,
            user
        } = req;
        Task.findById(id, (err, task) => {
            if (err) return next(err);
            if (!task) return next(createError(404, new Error('Task: Not found')));
            if (task.owner != user._doc._id) return next(createError(403, new Error('Update Task: Forbidden')));
            Task.findByIdAndUpdate(id, body, {new: true})
                .exec((err, task) => {
                    if(err) return next(err);
                    return res.json(task);
                });
        });
    },
    deleteTask: (req, res, next) => {
        const {
            params: {
                id
            },
            user
        } = req;
        Task.findById(id, (err, task) => {
            if (err) return next(err);
            if (!task) return next(createError(404, new Error('Task: Not found')));
            if (task.owner != user._doc._id) return next(createError(403, new Error('Update Task: Forbidden')));
            Task.findByIdAndDelete(id)
                .exec((err, task) => {
                    if(err) return next(err);
                    return res.json(task);
                })
        });
    }
}