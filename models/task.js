const mongoose = require('mongoose');

const Task = mongoose.model('Task', require('../schemas/task'));

module.exports = Task;