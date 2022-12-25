'use strict';

// const { logger } = require('../logger');

function init () {
    process.on('SIGTERM', async () => {
        // logger.info('Received SIGTERM signal');
    });
}

module.exports = {
    init
};
