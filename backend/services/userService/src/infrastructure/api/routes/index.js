'use strict';

const healthcheck = require('./healthcheck.route');
const users = require('./users.route');

const routes = {
    public: [
        healthcheck,
    ],
    api: [
        users,
    ]
};

module.exports = routes;
