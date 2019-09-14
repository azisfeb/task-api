const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const jwt = require('express-jwt');
const { connect } = require('./db');


const indexRouter = require('./routes/index');
// const authRouter = require('./routes/auth');
const employeeRouter = require('./routes/employee');
const taskRouter = require('./routes/task');

const logErrors = require('./middlewares/logErrors');
const errorHandler = require('./middlewares/errorHandler');

const app = express(); 
 
app.use(cors());
if(process.env.NODE_ENV !== 'test'){
    app.use(jwt({
        secret: 'myAppSecretKey'
    }).unless({
        path: [
            '/',
            {
                url: '/',
                methods: [
                    'POST'
                ]
            }
        ]
    }));
}
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use('/auth', authRouter);
app.use('/employees', employeeRouter);
app.use('/task', taskRouter);

connect()

app.use(logErrors);
app.use(errorHandler);

module.exports = app;
