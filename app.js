const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;

const options = {
  useMongoClient: true
};
const uri = 'mongodb://localhost:27017/dan-castillo';

// connect to mongodb
mongoose.connect(uri, options).then(
  () => { console.log("Connected to mongodb....") },
  err => { console.log(err) }
);

app.use(bodyParser.urlencoded({'extended': true}));
app.use(bodyParser.json());


const routes = require("./api/routes/routes");

app.use(routes);

// module.exports = app;
app.listen(port, () => {
  console.log('App listening on port ' + port)
})