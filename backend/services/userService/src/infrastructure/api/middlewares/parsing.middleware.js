'use strict';

const cors = require('cors');
const bodyParser = require('body-parser');

module.exports = [
    cors(),
    bodyParser.json({ limit: '10mb', extended: true }),
    bodyParser.urlencoded({ limit: '10mb', extended: true })
];
