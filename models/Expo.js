const mongoose = require('mongoose');
  const { Schema } = mongoose;
  
  const ExpoSchema = new Schema({
    title: String,
    date: String,
    location:String,
    description:String, 
    theme: String,
    boothNumber: Number, 
    createdat: { type: Date, default: Date.now },
  });
  
  const Expo = mongoose.model('Expo', ExpoSchema);
  
  module.exports = Expo;
  