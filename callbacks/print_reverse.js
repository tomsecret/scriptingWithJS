var getHTML = require('../http-functions');


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function reverse (html) {

  /* Write your code here! */
  var str = html.split('').reverse().join('');
  console.log(str);
}

getHTML(requestOptions, reverse);
