const express = require('express');
const app = express();

const hostname = '0.0.0.0';
const port = 3000;

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const mongooseParams = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
}
mongoose.connect('mongodb://mongo/secretSantaDB', mongooseParams);

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true} ));
app.use(bodyParser.json())

const cors = require('cors')
app.use(cors())

const personRoute = require('./api/routes/personRoute');
const giftRoute = require('./api/routes/giftRoute');
const groupRoute = require('./api/routes/groupRoute');
personRoute(app);
giftRoute(app);
groupRoute(app);

app.listen(port, hostname);

