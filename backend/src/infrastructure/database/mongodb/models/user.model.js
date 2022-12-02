'use strict';

const env = require('../../../env');
const userSchema = require('../schemas/user.schema');
const mongoose = require('mongoose');

function getModel () {
    const configVariables = env.getConfigVariables();
    const collection = `${configVariables.mongodb.schemaPrefix}_User`;
    const model = mongoose.model(collection, userSchema);
    return model;
}

module.exports = getModel();
