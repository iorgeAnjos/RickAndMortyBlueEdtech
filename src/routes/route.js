const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');
const route = require('express').Router();
const constrollerPersonagens = require('../controllers/controller');
const {
  validAll,
  idValid,
  validObjectBody,
  validAssignment,
} = require('../middlewares/midleware');

route.use('/api-docs', swaggerUi.serve);
route.get('/api-docs', swaggerUi.setup(swaggerDocument));

route.get(
  '/all-personagens',
  validAll,
  constrollerPersonagens.findPersonagensController,
);
route.get(
  '/one-personagem/:id',
  idValid,
  constrollerPersonagens.findPersonagemByIdController,
);
route.post(
  '/create',
  validObjectBody,
  validAssignment,
  constrollerPersonagens.createPersonagemController,
);
route.put(
  '/update/:id',
  idValid,
  validObjectBody,
  constrollerPersonagens.updatePersonagemController,
);
route.delete(
  '/delete/:id',
  idValid,
  constrollerPersonagens.deletePersonagemController,
);

module.exports = route;
