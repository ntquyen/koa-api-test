
/**
 * This file illustrates how you may map
 * single routes using config.json instead
 * of resource-based routing.
 */

var Q = require('q');

// const schedule = require('node-schedule');
// const scheduleJob = thunkify(schedule.scheduleJob);

var stats = {
  requests: 100000,
  average_duration: 52,
  uptime: 123123132
};

function *waitFor(timeout) {
  var defered = Q.defer();

  setTimeout(function() {
    console.log('sdfsdfsds');
    defered.resolve(true);
  }, timeout);

  return yield defered.promise;
}
/**
 * GET all stats.
 */

exports.all = function *(){
  var timeout = this.query.timeout;
  yield waitFor(timeout);
  this.body = stats;
};

/**
 * GET a single stat.
 */

exports.get = function *(){
  setTimeout(function() {
    this.body = stats[this.params.name];
  }, 000)

};
