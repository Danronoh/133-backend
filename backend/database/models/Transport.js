// Model transport for mongo
const mongoose = require('mongoose');

const Transport = mongoose.model('Transport', new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 8,
    maxlength: 180
  },
  owner: {
    type: String, // Number for id, or uuid not sure
    require: true
  },
  categories: [String],
  date: { type: Date, default: Date.now },
  description: String,
  details: String, // JSON
  images: [String],
  isPublished: Boolean // To control later what to show
}));

exports.Transport = Transport;
