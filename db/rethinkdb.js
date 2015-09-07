'use strict';

let Rethinkdbdash = require('rethinkdbdash');

let config = {
  host: process.env.RETHINKDB_HOST || 'rethinkdb-driver',
  db: 'test',
  port: process.env.RETHINKDB_PORT || 28015
};

let r = new Rethinkdbdash(config);


/**
 * Rethinkdb interface API
 * @type {object}
 */
exports.r = r;

