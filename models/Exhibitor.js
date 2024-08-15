const mongoose = require('mongoose');
  const { Schema } = mongoose;
  
  const ExhibitorSchema = new Schema({
  // Define your schema fields here
  });
  
  const Exhibitor = mongoose.model('Exhibitor', ExhibitorSchema);
  
  module.exports = Exhibitor;
  