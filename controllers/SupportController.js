const Support = require("../models/Support");
  
  const list = async (req, res) => {
  // Implement the list functionality
  const supports = await Support.find();
  res.status(200).json({supports:supports});
  };
  
  const create = async (req, res) => {
  // Implement the create functionality
  const {name,email,subject,message} = req.body;
  try{
      const doc = new Support();
      doc.name = name;
      doc.email = email;
      doc.subject = subject;
      doc.message = message;
      await doc.save(); 

      res.status(200).json({message:"Saved Succussfully"});
  }catch(err){
      res.status(400).json({message:err.message })
  }
  };
  
  const update = async (req, res) => {
  // Implement the update functionality
  };
  
  const delete_ = async (req, res) => {
  // Implement the delete functionality
  };
  
  const detail = async (req, res) => {
  // Implement the detail functionality
  };
  
  module.exports = {
  list, create, update, delete_, detail
  };
  