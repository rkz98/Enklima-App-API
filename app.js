const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const authenticateRoute = require('./src/routes/authenticateRoute');
const reportsRoute = require('./src/routes/reportsRoute');
const accountRoute = require('./src/routes/accountRoute');

mongoose.connect('mongodb://rkz98:dfix@52.89.227.235/enklima_app', { useNewUrlParser: true }, function (err) {
  if (err) throw err;   
	else console.log('[52.89.227.235] -> Database connection success!'); 
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/authenticate', authenticateRoute);
app.use('/reports', reportsRoute);
app.use('/account', accountRoute);

app.listen(8080, function () {
    console.log('[localhost:8080] -> Running Application.');
});