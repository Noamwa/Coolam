'use strict';

// const { logger } = require('../logger');

function init () {
    process.on('unhandledRejection', reason => {
        throw reason;
    });

    process.on('uncaughtException', e => {
        // logger.error('Received uncaughtException', e);
        throw e;
    });
}

module.exports = {
    init
};
