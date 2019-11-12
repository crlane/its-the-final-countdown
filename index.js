'use strict';
const querystring = require('querystring');

exports.http = (request, response) => {
  var err = '<h2>Invalid date</h2><p>Only Accepts YYYY-MM-DD or a number in the range [0, 1000000]</p>'
  var date1 = Date.now();
  var default_string = "2020-10-31";
  var q_date = request.query.q || default_string
  if (isNaN(q_date)) {
    q_date = querystring.escape(q_date)
  } else if (q_date < 0 || q_date > 1000000) {
    // number, milliseconds since the epoch UTC
    response.status(400).send(err);
    return;
  }
  var date2 = new Date(q_date);
  if (date2 == 'Invalid Date') {
    response.status(400).send(err);
    return;
  }
  var diffDays = parseInt((date2 - date1) / (1000 * 60 * 60 * 24));
  response.status(200).send('<h2>Days: ' + diffDays + '</h2>');
};

exports.event = (event, callback) => {
  callback();
};
