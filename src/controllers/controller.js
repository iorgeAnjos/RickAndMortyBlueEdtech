const mongoose = require('mongoose');
const personagemService = require('../services/service');

const findPersonagensController = async (req, res) => {
  const allPersonagens = await personagemService.findPersonagensService();
  res.send(allPersonagens);
};
const findPersonagemByIdController = async (req, res) => {
  const idParam = req.params.id;
  const chosenPersonagem = await personagemService.findPersonagemByIdService(
    idParam,
  );
  res.send(chosenPersonagem);
};
const createPersonagemController = async (req, res) => {
  const personagem = req.body;
  const newPersonagem = await personagemService.createPersonagemService(
    personagem,
  );
  res.send(newPersonagem);
};
const updatePersonagemController = async (req, res) => {
  const idParam = req.params.id;
  const personagemEdit = req.body; 
  const updatedPersonagem = await personagemService.updatePersonagemService(
    idParam,
    personagemEdit,
  );
  res.send(updatedPersonagem);
};
const deletePersonagemController = async (req, res) => {
  const idParam = req.params.id;
  await personagemService.deletePersonagemService(idParam);
  res.send({ message: 'Personagem deletado com sucesso' });
};

module.exports = {
  findPersonagensController,
  findPersonagemByIdController,
  createPersonagemController,
  updatePersonagemController,
  deletePersonagemController,
};
