module.exports = function getHTML (options, callback) {
  var https = require('https');
  /* Add your code here */
  var buffer = '';
  https.get(options, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
      buffer += data.toString();
    });

    response.on('end', function() {
      callback(buffer)
    });
  });
}

