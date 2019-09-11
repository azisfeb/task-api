const db = require('../db');

const Task = new db.model('Task', require('../schemas/task'));

module.exports = Task;