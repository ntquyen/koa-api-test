'use strict';

const r = require('../db').rethinkdb.r;
const parse = require('co-body');

/**
 * GET all users.
 */

exports.index = function *(){
  var users = yield r.table('test');
  this.body = users;
};

/**
 * GET user by :name.
 */

exports.show = function *(){
  this.body = users[this.params.user];
};

/**
 * POST a new user.
 */

exports.create = function *(name){
  var user = yield parse(this);
  if (!user.name) this.throw(400, '.name required');
  r.table('test').insert(user);
  users[user.name] = user;
  this.status = 201;
  this.body = user;
};

