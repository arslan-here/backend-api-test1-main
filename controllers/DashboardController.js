const Expo = require("../models/Expo");
const User = require("../models/User");
const Exhibitor = require("../models/Exhibitor");
  const totals = async (req, res) => {
  // Implement the list functionality
  const expos = await Expo.find();
  const users = await User.find();
  const exhibitors = await Exhibitor.find();
  res.status(200).json({totalexpos:expos.length,totalusers:users.length,totalexhibitors:exhibitors.length});
  };

  module.exports = {
    totals
  };
  