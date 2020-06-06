/*eslint-disable*/
const express = require('express');
const router = express.Router();

const multer= require('../../middleware/multer');

const produceController= require('../../controllers/produceController');



router.get('/', produceController.getProduce);
router.post('/',multer,produceController.createProduce);
router.get('/:id',produceController.getOneProduce);
router.put('/:id',multer,produceController.modifyProduce);
router.delete('/:id',multer,produceController.deleteProduce)

module.exports= router;