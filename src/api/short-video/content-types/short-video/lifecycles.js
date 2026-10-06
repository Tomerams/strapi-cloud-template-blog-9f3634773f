'use strict';
const { errors } = require('@strapi/utils');
const { getYouTubeVideoId } = require('../../utils/youtube');
const validate = (event) => {
  const value = event.params.data.youtubeUrl;
  if (value !== undefined && !getYouTubeVideoId(value)) {
    throw new errors.ValidationError('Enter a valid YouTube Shorts, watch or share URL.');
  }
};
module.exports = { beforeCreate: validate, beforeUpdate: validate };
