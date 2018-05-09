// examples taken from https://www.twilio.com/blog/2017/08/http-requests-in-node-js.html

// const request = require('request');

// // callback based
// const baseUrl = 'https://swapi.co/api/'
// request(baseUrl + 'planets/1', { json: true }, (err, res, body) => {
//   if (err) { return console.log(err); }
//   // console.log(res)
//   console.log(body);
// });



const axios = require('axios');

function makeCall() {
  // promise-based
  axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  .then(response => {
    console.log(response.data.url);
    console.log(response.data.explanation);
  })
  .catch(error => {
    console.log(error);
  });
}

function sayHi() {
  console.log("hi");
}
// export only one thing, use the name it has
// exports.default = makeCall;
// module.exports = {makeCall: makeCall};
// module.exports = {makeCall};

// export multiple things
// module.exports = {makeCall, sayHi};
// module.exports = {<name you want to use in other files>: <name used in this file>};

module.exports = {makeNasaAPICall: (callback) => {
  // promise-based
  axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  .then(response => {
    console.log(response.data.url);
    console.log(response.data.explanation);
    callback(response);
  })
  .catch(error => {
    console.log(error);
  });
}, sayHi};
