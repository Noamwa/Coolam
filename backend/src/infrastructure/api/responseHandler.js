'use strict';

const { logger } = require('../logger');

const responses = {
    ok: {
        status: 200,
        data: { res: 'ok' }
    }
};

function respond (res, responseObject) {
    logger.info(`API response ${JSON.stringify(responseObject)}`);
    res.status(responseObject.status);
    res.set('Content-Type', 'application/json');
    res.send(responseObject.data);
}

module.exports = {
    responses,
    respond
};
