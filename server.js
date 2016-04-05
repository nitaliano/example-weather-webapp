var express = require('express');
var path  = require('path');
var util = require('util');
var argv = require('yargs').argv;

const app = express();
const port = argv.p|| 8888;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use('/static', express.static(path.join(__dirname, 'build')));

app.get('*', function (req, res) {
  res.render('master', {
    title: 'Example Weather App',
    js: '/static/app.js',
    openWeatherApiKey: '7c02b157c36f2d49e304a0aaf29dd716'
  });
});

app.listen(port, function () {
  console.log(util.format('Server listening on port %s', port)); // eslint-disable-line no-console
});
