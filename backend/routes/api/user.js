/* const express = require('express');

const router = express.Router();

// Services
const UserData = require('../../service/data/UserData')

// all user listing
router.get('/', (req, res) => {

  UserData.loadUsers()
      .then(data => res.json(data))
      .catch(err => console.log(err))

});

// post rq create a user
router.post('/', (req, res) => {
  const { body: user } = req; // body === user object

  // console.log(user)
  UserData.createUser(user)


  res.json(user);
});

module.exports = router */
