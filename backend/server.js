/* eslint-disable*/
const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
// const error = require('./middleware/error');
// const accessValidator = require('./middleware/accessValidator');

const app = express();


// TODO MOVE THIs TO SETTINGS
/*mongoose.connect('mongodb+srv://puritys:admin@cluster0-tyaxn.mongodb.net/test?retryWrites=true&w=majority',
{ useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false })
.then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });*/

mongoose.connect(
  'mongodb+srv://nic:l53F7zl1LSdOcQWo@cluster0-haduu.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }
)
  .then(() => {});
// .then(() => console.log('Connected to Db...'))
// .catch((err) => console.log(`Could not connect to Mongo db${err}`));

app.use(cors());
app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static folder
app.use(express.static(path.join(__dirname, '../dist')));

const homePage = require('./routes/home');
// const userRoute = require('./routes/api/user');
const transportRoute = require('./routes/api/transport');

// app.use('/api/user', userRoute);
app.use('/api/transport', transportRoute);
app.use('/', homePage);

//posts and comments api
const postRoute= require('./routes/api/postRoute');
app.use('/api/posts',postRoute);

// app.use(accessValidator)
// app.use(error)
require('./settings/prod')(app); // TODO :: only on prod

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  // console.log('app open on port :::::: ', port);
});

// export the server object
module.exports = server;
