'use strict';

const { logger } = require('../../logger');
const { getConfigVariables } = require('../../env');
const models = require('./models');
const mongoose = require('mongoose');

async function init () {
    await initConnection();
    initErrorListener();
    logger.info('MongoDB Connected successfully');
}

async function initConnection () {
    logger.info('Connecting to MongoDB');
    const configVariables = getConfigVariables();
    await mongoose.connect(
        configVariables.mongodb.connectionString,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    );
}

function initErrorListener () {
    const db = mongoose.connection;
    db.on('error', e => {
        logger.error('MongoDB error', e);
        throw new InfrastructureError(e);
    });
}

module.exports = {
    init,
    models
};
