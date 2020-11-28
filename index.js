const _ = require('lodash');
const dotify = require('@ladjs/node-dotify');

const pickOriginal = function (transformed, original) {
  const object = {};
  for (const key of Object.keys(dotify(original))) {
    const value = _.get(transformed, key);
    if (!_.isUndefined(value)) _.set(object, key, value);
  }

  return object;
};

module.exports = pickOriginal;
