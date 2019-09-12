const { Schema } = require('mongoose');

const task = new Schema({
    owner: String,
    title: String,
    description: String,
    priority: String,
    status: String
});

module.exports = task;