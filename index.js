const _ = require('lodash');
const dotify = require('@ladjs/node-dotify');

const pickOriginal = function(transformed, original) {
  const obj = {};
  for (const key of Object.keys(dotify(original))) {
    const value = _.get(transformed, key);
    if (!_.isUndefined(value)) _.set(obj, key, value);
  }

  return obj;
};

module.exports = pickOriginal;
