const express = require('express');

const app = express();

app.get('/', function(req, res){
  res.send('hello world');
})

const PORT = process.env.port || 9000;

app.listen(PORT, function(){
  console.log('running on port '+PORT)
})