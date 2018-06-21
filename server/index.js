const express = require('express');

const app = express();

app.use(express.static('../public'));

app.get('/', function(request, response){
  response.send('Hello World');
})

const PORT = process.env.port || 9000;

app.listen(PORT, function(){
  console.log('running on port '+PORT)
})