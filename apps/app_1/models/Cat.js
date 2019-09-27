const { dbs } = require('../../configs').configs;

module.exports.Cat = dbs.db1().model('Cats', { name: String });
