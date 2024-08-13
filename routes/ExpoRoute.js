
  const express = require('express');
  const { list, create, update, delete_, detail } = require('../controllers/ExpoController');
  
  const ExpoRouter = express.Router();
  
  ExpoRouter.get('', list);
  ExpoRouter.post('/create', create);
  ExpoRouter.put('/edit/:id', update);
  ExpoRouter.delete('/delete/:id', delete_);
  ExpoRouter.get('/:id', detail);
  
  module.exports = ExpoRouter;
  