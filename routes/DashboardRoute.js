
  const express = require('express');
  const { totals } = require('../controllers/DashboardController');
  
  const DashboardRouter = express.Router();
  
  DashboardRouter.get('', totals);

  
  module.exports = DashboardRouter;
  