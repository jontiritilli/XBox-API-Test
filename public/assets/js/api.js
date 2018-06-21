//jQuery functionality to run a function when the website is loaded
$(document).ready(initializeApp);
import { api } from './apiKey.js';
import { printData } from './dom.js';

//function to run on document ready
function initializeApp() {
  //adding click functionality to the page
  addHandlers();
}

function addHandlers() {
  //jquery library being accessed to get page elements
  $('#formSubmit').on('click', () => {
    getXUID(collectUserData());
  })
}

function collectUserData(){
  let id = $('#userId').val()
  console.log(id);
  return id;
}
function getXUID(tag){
  $.ajax({
    url: 'https://xboxapi.com/v2/xuid/' + tag,
    method: 'GET',
    beforeSend: request => {
      request.setRequestHeader("X-Auth", api.key);
    },
    dataType: 'JSON',
    success: res => {
      console.log(res);
      httpsRequest(res.xuid);
    },
    error: (xhr, errText, err) => {
      printData(errText);
    },
  })
}
function httpsRequest(xuid) {
  $.ajax({
    url: 'https://xboxapi.com/v2/'+xuid+'/xbox360games',
    method: 'GET',
    beforeSend: request => {
      request.setRequestHeader("X-Auth", api.key);
    },
    dataType: 'JSON',
    success: res => {
      const titles = res.titles.sort(function(a,b) {
        return a.lastPlayed - b.lastPlayed;
      });
      console.log(res);
      console.log(titles);
    },
    error: (xhr, errText, err) => {
      printData(xhr.statusText);
    },
  })
  $.ajax({
    url: 'https://xboxapi.com/v2/'+xuid+'/xboxonegames',
    method: 'GET',
    beforeSend: request => {
      request.setRequestHeader("X-Auth", api.key);
    },
    dataType: 'JSON',
    success: res => {
      const titles = res.titles.sort(function(a,b) {
        return a.lastUnlocked - b.lastUnlocked;
      });
      console.log(res);
      console.log(titles);
    },
    error: (xhr, errText, err) => {
      printData(xhr.statusText);
    },
  })
}