const db = require('../db');

const Employee = new db.model('Employee', require('../schemas/employee'));

module.exports = Employee;