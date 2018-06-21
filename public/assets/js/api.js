//jQuery functionality to run a function when the website is loaded
document.ready(initializeApp);
const api = require('./apiKey.js');

//function to run on document ready
const initializeApp = () => {
  //adding click functionality to the page
  addHandlers();
}

const addHandlers = () => {
  //jquery library being accessed to get page elements
  $('.formSubmit').on('click', () => {
    httpsRequest();
  })
}

const httpsRequest = () => {

  $.ajax({
    url: 'https://xboxapi.com/v2/accountxuid',
    data: {'X-AUTH': api},
    dataType: 'JSON',
    success: res => {
      let response = JSON.parse(res);
      console.log(response);
    },
    error: (xhr, errText, err) => {
      console.log('jqXHR ' + jqXHR);
      console.log('error text '+ errText);
      console.log('error code' + err);
    },

  })
}