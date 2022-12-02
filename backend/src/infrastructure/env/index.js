'use strict';

const nconf = require('nconf');
const dotenvFlow = require('dotenv-flow');
const getConfigVariables = require('./variables');

async function init () {
    process.env.NODE_ENV = process.env.nodeEnv;
    dotenvFlow.config();
    nconf.env('.');
    nconf.required(['nodeEnv', 'service:name']);
}


module.exports = {
    init,
    getConfigVariables
}