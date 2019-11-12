'use strict';
const querystring = require('querystring');

var conversionFactor = 24 * 60 * 60 * 1000;
var daysToMillis = (days) => {
  return days * conversionFactor;
};

var millisToDays = (millis) => {
  return millis / conversionFactor;
};
exports.countdown = (request, response) => {
  var err = '<h2>Invalid date</h2><p>Only Accepts YYYY-MM-DD or a postive number of days</p>'
  var date1 = Date.now();
  var default_string = "2020-10-31";
  var q_date = request.query.q || default_string
  if (isNaN(q_date)) {
    q_date = querystring.escape(q_date)
  } else if (q_date < 0) {
    response.status(400).send(err);
    return;
  } else {
    // number, milliseconds since the epoch UTC, convert to this many milliseconds in the future
    var epoch = new Date(0);
    q_date = (date1 - epoch) + daysToMillis(q_date);
  }
  var date2 = new Date(q_date);
  if (date2 == 'Invalid Date') {
    response.status(400).send(err);
    return;
  }
  var diffDays = parseInt(millisToDays(date2 - date1));
  response.status(200).send('<h2>' + diffDays + ' Days Until ' + date2.toLocaleDateString() +'</h2>');
};

exports.event = (event, callback) => {
  callback();
};
