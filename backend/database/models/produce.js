/*eslint-disable*/
const mongoose = require('mongoose');

const produceSchema = mongoose.Schema({
  owner: { type: String, required: true },
  product: { type: String, required: true },
  description: { type: String, required: true },
  weight: { type: String, required: true },
  unitPrice: { type: Number, required: true },
  imageUrl:{type: String, required: true },
  location: { type: String, required: true },
  
  
},{
  timestamps:true
});


module.exports = mongoose.model('Produce', produceSchema);