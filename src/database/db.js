const mongoose = require('mongoose');
const connectToDatabase = () => {
  mongoose.connect(process.env.URI_DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(()=>{
    console.log('MongoDB Atlas CONECTADO')
  })
  .catch((error)=>{
return console.log(`Erro na conexão com o banco: ${error}`)
  })
};

module.exports = connectToDatabase
