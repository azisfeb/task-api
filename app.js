const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const jwt = require('express-jwt');

const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');
const employeeRouter = require('./routes/employee');

const logErrors = require('./middlewares/logErrors');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(cors());
app.use(jwt({
    secret: process.env.SECRET_KEY
}).unless({
    path: [
        '/',
        {
            url: '/auth/login',
            methods: [
                'POST'
            ]
        }
    ]
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/employees', employeeRouter);

app.use(logErrors);
app.use(errorHandler);

module.exports = app;
