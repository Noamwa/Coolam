'use strict';

const express = require('express');
const userRouter = express.Router();
const { respond, responses } = require('../responseHandler');
const { logger } = require('../../logger');

userRouter.get('/users', async (req, res) => {
    try {
        respond(res, { status: 200, data: records });
    } catch (e) {
        logger.error('Failed getting', e);
        respond(res, responses.failedToGetUserData); // TBD change
    }
});

module.exports = userRouter;
