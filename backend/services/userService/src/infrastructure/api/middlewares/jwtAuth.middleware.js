// 'use strict';

// const logger = require('../../logger').logger;
// const jwtService = require('../../authentication/jwt/jwt.service');
// const responseHandler = require('../responseHandler');

// async function jwtAuthMiddleware (req, res, next) {
//     try {
//         logger.info('jwtAuthMiddleware');
//         const jwtToken = getJwtTokenFromReq(req);
//         const decryptedToken = await jwtService.decrypt(jwtToken);
//         req.jwtData = decryptedToken;
//         next();
//     } catch (e) {
//         logger.error(`JWT Auth middleware failed ${JSON.stringify(e)}`);
//         responseHandler.respond(res, responseHandler.responses.jwtAuthenticationFailed);
//     }
// }

// function getJwtTokenFromReq (req) {
//     let token;
//     const authHeader = req.headers.authorization;
//     if (authHeader) {
//         token = extractBearerTokenFromAuthHeader(authHeader);
//     }
//     if (!token) {
//         throw new Error('JWT token not found');
//     }
//     return token;
// }

// function extractBearerTokenFromAuthHeader (authHeader) {
//     let bearerToken;
//     const [tokenIdentifier, token] = authHeader.split(' ');
//     if (tokenIdentifier === 'Bearer') {
//         bearerToken = token;
//     }
//     return bearerToken;
// }

// module.exports = jwtAuthMiddleware;
