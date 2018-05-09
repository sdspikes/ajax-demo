// jquery
// need to make sure that jquery is already imported in html

// whatever we put in document.ready will only happen after the page fully loads.  we need to wait til the page loads to attach the click listener
function replaceText(data) {
  $('#replace-me').text(data.name);
}

function doAPICall(event) {
  var userInput = $('#user-data').val();
  let starWarsData = {};
  // on button press, call into the star wars api
  $.get('https://swapi.co/api/' + userInput)
  .then(response => {
    starWarsData = response;
    // when we get the response, replace the filler text with the explanation from the response
    console.log(starWarsData);
    replaceText(starWarsData);
  })
  .catch(error => {
    console.log(error);
  });
}

console.log(doAPICall);

function onceReady() {
  // attach a listener to the button
  $('#click-me').click(doAPICall)
  console.log("hi1");
}

$(document).ready(onceReady)

function sayHi() {
  console.log("hi2");
}
sayHi();
