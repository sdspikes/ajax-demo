const nasa = require('./nasa.js')

nasa.makeNasaAPICall(function (response) {
  if (response.data.url.includes("nasa")) {
    console.log('yep it\'s from nasa')
  }
  return console.log(response.data.url)
});


nasa.sayHi();
