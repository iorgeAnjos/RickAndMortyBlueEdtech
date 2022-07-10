const Personagem = require('../models/model');

const findPersonagensService = async () => {
  const personagens = await Personagem.find();
  return personagens;
};
const findPersonagemByIdService = async (id) => {
  const personagem = await Personagem.findById(id);
  return personagem;
};
const createPersonagemService = async (newPersonagem) => {
  const createdPersonagem = await Personagem.create(newPersonagem);
  return createdPersonagem;
};
const updatePersonagemService = async (id, editedPersonagem) => {
  const updatedPersonagem = await Personagem.findByIdAndUpdate(
    id,
    editedPersonagem,
  );
  return updatedPersonagem;
};
const deletePersonagemService = async (id) => {
  await Personagem.findByIdAndDelete(id);
};
const findOne = async (newPersonagem) => {
    const dbpersonagem = await Personagem.findOne({ tarefa: newPersonagem.nome }).exec();
    return dbpersonagem;
  };

module.exports = {
  findPersonagensService,
  findPersonagemByIdService,
  createPersonagemService,
  updatePersonagemService,
  deletePersonagemService,
  findOne
};
