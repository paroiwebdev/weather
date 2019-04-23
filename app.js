const express = require('express');
const path    = require('path');
const app     = express();
const weather = require('./controller/weather');

// Use static Files
app.use(express.static('public'));
app.use('/', express.static(__dirname + '/*'));
app.use(weather);

app.get('/', (req, res)=> {
  res.sendFile(path.resolve(__dirname, './files/index.html'));
});

app.listen(3000,()=>{
  console.log('Server running at port 3000');
});