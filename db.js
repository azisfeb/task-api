const mongoose = require('mongoose');

const db = function() {
    // initial connection
    mongoose.connect(process.env.MONGODB_HOST, {
        useNewUrlParser: true
    }, err => {
        // error handler
    });
    
    mongoose.connection.on('connecting', () => {
        console.log('connecting');
    });
    
    mongoose.connection.on('connected', () => {
        console.log('connected');
    });
    
    // listen for connection errors
    mongoose.connection.on('error', err => {
        // error handler
        console.error(err);
    });
    
    return mongoose;
}

module.exports = db();
