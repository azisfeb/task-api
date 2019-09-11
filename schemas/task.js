const { Schema } = require('mongoose');

const task = new Schema({
    owner: require('./employee'),
    title: String,
    description: String,
    priority: String,
    status: String
});

module.exports = task;