//jQuery functionality to run a function when the website is loaded
$(document).ready(initializeApp);
import { api } from './apiKey.js';

//function to run on document ready
function initializeApp() {
  //adding click functionality to the page
  addHandlers();
}

function addHandlers() {
  //jquery library being accessed to get page elements
  $('#formSubmit').on('click', () => {
    httpsRequest(collectUserData());
  })
}

function collectUserData(){
  let id = $('#userId').val()
  console.log(id);
  return id;
}
function httpsRequest(gamer) {
  $.ajax({
    url: 'https://xboxapi.com/v2/'+gamer+'/xbox360games',
    method: 'GET',
    beforeSend: request => {
      request.setRequestHeader("X-Auth", api.key);
    },
    // data: {'gamertag': gamertag},
    dataType: 'JSON',
    success: res => {;
      console.log(res);
    },
    error: (xhr, errText, err) => {
      console.log('error text '+ errText);
      console.log('error code ' + err);
    },
  })
}