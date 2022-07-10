const mongoose = require('mongoose');

const personagemSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    foto: { type: String, required: true },
})

const Personagem = mongoose.model('personagens', personagemSchema)

module.exports = Personagem
