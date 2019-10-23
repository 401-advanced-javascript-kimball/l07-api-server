'use strict';

module.exports = (message) => (req, res, next) => {
  console.log(`==> ${req.method} ${req.path} `);
};
