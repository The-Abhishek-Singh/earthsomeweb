const mongoose = require('mongoose');





const ownerSchema = new mongoose.Schema({
  fullname: {
    type: String,
    minlength: 3,
    trim: true,
  },
  email: String,
  password: {   type: String, required: true },
 
  products: {   type: Array,default: [] },
  picture: String,
  gstin : String, 
});

module.exports = mongoose.model('Owner', ownerSchema);