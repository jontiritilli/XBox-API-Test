const axios = require('axios');
const mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'my_db'
});

connection.connect();

export async function get_user_info_https(gamertag){
  this.gamertag = gamertag;
  try {
    this.xuid = await axios({
      method:'get',
      url: 'https://xboxapi.com/v2/xuid/' + this.gamertag,
      responseType:'json'
    })
    .then(function(response, xuid) {
      let sql = 'INSERT INTO users (xuid, tag, stats) VALUES (?, ?, ?)';
      connection.query(sql, xuid, this.gamertag, response, function(err, result){
        if(err){
          throw err;

        }
        console.log('insert confirmed successessful')
      });
    })
  } catch (e) {
    console.log('There was an error: '+e)
  }
};

// export async function update_player_info(){
//   this.gamertag = gamertag;
//   try {
//     this.xuid
//     })
//     .then(function(response) {
//       //write sql here
//     })
//   } catch (e) {
//     console.log('There was an error: '+e)
//   }
// };