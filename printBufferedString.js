var https = require('https');



function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };
;



  /* Add your code here */

  var buffer = '';
  https.get(requestOptions, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
      buffer += data.toString();
      // console.log(data);
    });

    response.on('end', function() {
      console.log(buffer)
    });
  });

}


getAndPrintHTMLChunks();