
const express = require('express');
const { Transport } = require('../../database/models/Transport');

const router = express.Router();


// all transport listing TODO:: paginate
// search also eg /:capacity/:cost/:ratings/:jobs_done etc
router.get('/', async (req, res) => {
  // TODO sort by query:: need a search service

  const pageNumber = 1;
  const pageSize = 100;

  /* const transport = await Transport
    .find({ isPublished: true })
    .skip((pageNumber -1) * pageSize)
    .limit(pageSize)
    .sort({title: 1})
    .select({
      title: 1,
      owner: 1,
      description: 1,
      details: 1,
      images: 1,
    }); */

  const transport = await Transport
    .find({ isPublished: true })
    .skip((pageNumber - 1) * pageSize)
    .limit(pageSize)
    .sort({ title: 1 });

  res.json(transport);
});

// loads a single item given an id
router.get('/:id', async (req, res) => {
  // const { id } = req.params;

  const transport = await Transport.findOne({ _id: req.params.id });

  // console.log(transport)

  res.json(transport);
});

// post rq create a transport item
router.post('/', async (req, res) => {
  // const { body } = req; // TODO:: validate item

  /* {
    "title": "Test this toom,nmhjghjghkjgkjgjkgkjgjkgjkg",
    "owner": "103",
    "categories": ["One", "Two"],
    "description": "Very descriptive..",
    "details": "andress",
    "images":["imgId1", "imgId2"] ,
    "isPublished": true
  } */

  let transport = new Transport(req.body);

  transport = await transport.save();

  res.json(transport);
});

// update transport item
router.put('/:id', async (req, res) => {
  // const { body, params } = req;
  // const { id } = params;

  // console.log(id)
  // console.log(item)
  // no item with id
  // TODO :: validate

  const transport = await Transport.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, { new: true });

  // console.log(transport)
  res.json(transport);
});

// delete transport item
router.delete('/:id', async (req, res) => {
  // const { id } = req.params;

  const transport = await Transport.findByIdAndRemove(req.params);

  // console.log(transport);
  // TODO :: Redirect many
  res.json(transport);
});

module.exports = router;
