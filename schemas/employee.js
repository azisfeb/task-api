const { Schema } = require('mongoose');

const employee = new Schema({
    username: String,
    password: String,
    role: String
});

module.exports = employee;