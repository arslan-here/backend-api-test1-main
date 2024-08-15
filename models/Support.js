const mongoose = require('mongoose');
  const { Schema } = mongoose;
  
  const SupportSchema = new Schema({
  // Define your schema fields here
  name: String,
  email: String,
  subject:String, 
  message:String, 
  createdat: { type: Date, default: Date.now },
  });
  
  const Support = mongoose.model('Support', SupportSchema);
  
  module.exports = Support;
  