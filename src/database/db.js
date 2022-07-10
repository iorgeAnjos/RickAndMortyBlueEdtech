const mongoose = require('mongoose');
const connectToDatabase = () => {
  mongoose.connect('mongodb://localhost:27017/rick-morty', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(()=>{
    console.log('MongoDB CONECTADO')
  })
  .catch((error)=>{
return console.log(`Erro na conexão com o banco: ${error}`)
  })
};

module.exports = connectToDatabase
