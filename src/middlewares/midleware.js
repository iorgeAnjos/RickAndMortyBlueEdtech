const mongoose = require('mongoose');
const personagemService = require('../services/service');

const validAll = async (req, res, next) => {
  const Personagens = await personagemService.findPersonagensService();
  if (Personagens.length == 0) {
    return res.status(400).send({ message: 'Nenhum personagem encontrado' });
  }
  next();
};
const idValid = (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id não encontrado' });
  }
  next();
};

const validObjectBody = (req, res, next) => {
  const personagem = req.body;
  if (!personagem || !personagem.nome || !personagem.foto) {
    return res.status(400).send({ mensagem: 'Adicione todas as informações' });
  }
  next();
};
const validAssignment = async (req, res, next) => {
    const newPersonagem = req.body;
    const dbpersonagem = await personagemService.findOne(newPersonagem);
    console.log(dbpersonagem);
    if (dbpersonagem !== null) {
      return res.status(400).send({ message: 'Personagem já existe' });
    }
    next();
  };

module.exports = { validAll, idValid, validObjectBody, validAssignment };
