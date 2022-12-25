'use strict';

const express = require('express');
const responseHandler = require('../responseHandler');
const healthcheckRouter = express.Router();

healthcheckRouter.get('/healthcheck', async (req, res) => {
    responseHandler.respond(res, responseHandler.responses.ok);
});

module.exports = healthcheckRouter;
