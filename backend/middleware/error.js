module.exports = (err, req, res) => {
  // console.log(next);
  res.status(500).send('Failed to connect');
};
