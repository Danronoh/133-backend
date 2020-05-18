const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  // res.json({ title: 'Testing Rest in Node js', message: 'Hello fellow traveller' });
  // use html instead

  res.sendStatus(200);
});

module.exports = router;
