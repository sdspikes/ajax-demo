
const request = require('request');

// callback based
const baseUrl = 'https://swapi.co/api/'
request(baseUrl + 'planets/1', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  // console.log(res)
  console.log(body);
});



const axios = require('axios');

// promise-based
axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
.then(response => {
  console.log(response.data.url);
  console.log(response.data.explanation);
})
.catch(error => {
  console.log(error);
});

