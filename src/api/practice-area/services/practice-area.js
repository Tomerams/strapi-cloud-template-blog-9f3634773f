'use strict';

/**
 * practice-area service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::practice-area.practice-area');
