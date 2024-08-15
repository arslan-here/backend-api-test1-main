
  const express = require('express');
  const { list, create, update, delete_, detail } = require('../controllers/ExhibitorController');
  
  const ExhibitorRouter = express.Router();
  
  ExhibitorRouter.get('', list);
  ExhibitorRouter.post('/create', create);
  ExhibitorRouter.put('/edit/:id', update);
  ExhibitorRouter.delete('/delete/:id', delete_);
  ExhibitorRouter.get('/:id', detail);
  
  module.exports = ExhibitorRouter;
  