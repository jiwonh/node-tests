const express = require('express');

var app = express();
var port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.'
  });
});

app.get('/users', (req, res) => {
  res.status(200).send([
      {name: 'Jiwon', age: 40},
      {name: 'Juyoung', age: 40},
      {name: 'Yujin', age: 32}
    ]);
});

app.listen(port, () => {
  debugger;
  console.log('Server is running on ' + port);
});

module.exports.app = app;
