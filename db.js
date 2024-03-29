require('dotenv').config();
const mongoose = require('mongoose');

function connect(){
    return new Promise((resolve, reject) => {

        // if(process.env.NODE_ENV === 'test'){
        //     const Mockgoose = require('mockgoose').Mockgoose;
        //     const mockgoose = new Mockgoose(mongoose);

        //     mockgoose.prepareStorage()
        //         .then(() => {
        //             mongoose.connect("mongodb://admin:admin321@ds247101.mlab.com:47101/task-manager",
        //                 {useNewUrlParser: true})
        //             .then((res, err) => {
        //                 if(err) return reject(err);
        //                 resolve();
        //             })
        //         })
        //         .catch(err => console.error(err))
        // } else { 
            mongoose.connect("mongodb://admin:admin321@ds247101.mlab.com:47101/task-manager",
                {useNewUrlParser: true, useUnifiedTopology: true})
            .then((res, err) => {
                if(err) return reject(err);
                resolve();
            })
        // }
    })
}

function close(){
    return mongoose.disconnect();
}


// const db = function() {
//     // initial connection
//     function connect(){
//         mongoose.connect(process.env.MONGODB_HOST, {
//             useNewUrlParser: true
//         }, err => {
//             // error handler
//         });
//     }
    
//     mongoose.connection.on('connecting', () => {
//         console.log('connecting');
//     });
    
//     mongoose.connection.on('connected', () => {
//         console.log('connected');
//     });
    
//     // listen for connection errors
//     mongoose.connection.on('error', err => {
//         // error handler
//         console.error(err);
//     });
    
//     return mongoose;
// }

module.exports = { connect, close };
