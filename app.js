const express = require('express');
const app = express();
const morgan = require('morgan');
const layout = require('./views/layout');
const { db } = require('./models');

db.authenticate().then(() => {
  console.log('connected to database');
});
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
// parses url-encoded bodies
app.use(express.urlencoded({ extended: false }));
app.get('/', (req, res, next) => {
  res.send(layout(''));
});

app.listen(3000, () => {
  console.log('Running');
});
