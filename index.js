'use strict';

exports.http = (request, response) => {
  var date1 = Date.now()
  var date2 = new Date("10/31/2020");
  var diffDays = parseInt((date2 - date1) / (1000 * 60 * 60 * 24));
  response.status(200).send('Days: ' + diffDays);
};

exports.event = (event, callback) => {
  callback();
};
