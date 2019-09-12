const errorHandler = (err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        return res.status(401).send('invalid token...');
    }
    return res.status(err.statusCode || 500).send(err.message || 'Something broke!');
};

module.exports = errorHandler;