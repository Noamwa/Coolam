'use strict';

const nconf = require('nconf');

function getConfigVariables () {
    const configVaribles = {
        service: {
            name: nconf.get('service:name')
        },
        node: {
            env: nconf.get('nodeEnv')
        },
        // [`${encryptionPrefix}jwtSecret`]: nconf.get('jwtSecret'),
        api: {
            port: nconf.get('api:port')
        },
        mongodb: {
            schema: {
                prefix: nconf.get('mongodb:schema:prefix')
                // [`${encryptionPrefix}connectionString`]: nconf.get('mongoDbConnectionString')
            },
            connectionString: nconf.get('mongodb:connectionString')
        },
    };
    return configVaribles;
}

module.exports = getConfigVariables;