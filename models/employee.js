const mongoose = require('mongoose');

const Employee = mongoose.model('Employee', require('../schemas/employee'));

module.exports = Employee;