'use strict';

const { logger } = require('../logger');
const express = require('express');
const routes = require('./routes');
const middlewares = require('./middlewares');
const env = require('../env');

let app;

function init () {
    logger.info('Initiating API');
    app = express();
    startListener();
    registerRoutes();
    setErrorHandler();
}

function startListener () {
    const configVariables = env.getConfigVariables();
    app.listen(configVariables.api.port, () => {
        logger.info(`API running on port ${configVariables.api.port}`);
    });
}

function registerRoutes () {
    app.use(middlewares.parsing);
    // app.use(middlewares.security);
    app.use(middlewares.logger);

    app.use(
        routes.public
    );
    
    app.use(
        '/api',
        // middlewares.jwtAuth,
        routes.api
    );
}

function setErrorHandler () {
    app.use((err, req, res, next) => {
        logger.error('API error', err);
        res.status(500).send({ error: err.message });
    });
}

module.exports = {
    init
};
