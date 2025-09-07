'use strict';

/**
 * client-document service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::client-document.client-document');
