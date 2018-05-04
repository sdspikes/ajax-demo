// jquery
// need to make sure that jquery is already imported in html

// whatever we put in document.ready will only happen after the page fully loads.  we need to wait til the page loads to attach the click listener
$(document).ready(()=> {
  // attach a listener to the button
  $('#click-me').click(event => {
    // on button press, call into the nasa api
    $.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(response => {
      // when we get the response, replace the filler text with the explanation from the response
      console.log(response)
      $('#replace-me').text(response.explanation);
    })
    .catch(error => {
      console.log(error);
    });
  })
})
