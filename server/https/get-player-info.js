const axios = require('axios');

export async function get_player_info(gamertag){
  this.gamertag = gamertag;
  try {
    this.xuid = await axios({
      method:'get',
      url: 'https://xboxapi.com/v2/xuid/' + this.gamertag,
      responseType:'json'
    })
    .then(function(response) {
      //write sql here
    })
  } catch (e) {
    console.log('There was an error: '+e)
  }
};
