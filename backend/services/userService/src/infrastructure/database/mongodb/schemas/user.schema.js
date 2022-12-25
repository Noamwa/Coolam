'use strict';

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userId: String
});

userSchema.index({ userId: 1 });

module.exports = userSchema;
