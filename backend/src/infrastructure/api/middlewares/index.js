'use strict';

const middlewares = {
    // jwtAuth: require('./jwtAuth.middleware'),
    logger: require('./logger.middleware'),
    parsing: require('./parsing.middleware'),
    security: require('./security.middleware')
};

module.exports = middlewares;
