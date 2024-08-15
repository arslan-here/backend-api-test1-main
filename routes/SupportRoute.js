
  const express = require('express');
  const { list, create, update, delete_, detail } = require('../controllers/SupportController');
  
  const SupportRouter = express.Router();
  
  SupportRouter.get('', list);
  SupportRouter.post('/create', create);
  SupportRouter.put('/edit/:id', update);
  SupportRouter.delete('/delete/:id', delete_);
  SupportRouter.get('/:id', detail);
  
  module.exports = SupportRouter;
  