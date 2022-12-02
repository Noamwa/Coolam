'use strict';

const logger = require('../../logger').logger;

async function loggerMiddleware (req, res, next) {
    const correlationId = req.header('correlation-id');
    const { body, params, originalUrl, method } = req;
    logger.info('API request received', { body, params, originalUrl, method, correlationId });
    const startTime = Date.now();
    res.on('finish', () => {
        const processTimeMs = Date.now() - startTime;
        const { statusCode, outputData } = res;
        logger.info('API request finished', { processTimeMs, statusCode, outputData });
    });
    next();
}

module.exports = loggerMiddleware;
