const Expo = require("../models/Expo");
  
  const list = async (req, res) => {
    const expos = await Expo.find();
    res.status(200).json({expos:expos});
  };
  
  const create = async (req, res) => {
    const {title,date,location,description,theme,boothNumber} = req.body;
    try{
        const doc = new Expo();
        doc.title = title;
        doc.date = date;
        doc.location = location;
        doc.description = description;
        doc.theme = theme;
        doc.boothNumber = boothNumber;

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
    const id = req.params.id;
    try{
        await Expo.findByIdAndDelete(id);
        res.status(200).json({message:"Deleted Succussfully"});
    }
    catch(err){
        res.status(400).json({message:err.message })
    }
  };
  
  const detail = async (req, res) => {
  // Implement the detail functionality
  };
  
  module.exports = {
  list, create, update, delete_, detail
  };
  