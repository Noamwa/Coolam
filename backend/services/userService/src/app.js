'use strict';

const env = require('./infrastructure/env');
const logger = require('./infrastructure/logger');
const mongodb = require('./infrastructure/database/mongodb');
const api = require('./infrastructure/api');
const shutdownHandler = require('./infrastructure/shutdownHandler/shutdownHandler');

async function init () {
    env.init();
    logger.init();
    shutdownHandler.init();
    await mongodb.init();
    api.init();
}

init ();
