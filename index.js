require('dotenv').config()
const express = require('express');
const cors = require('cors');
const route = require('./src/routes/route');
const connectToDatabase = require('./src/database/db');
const port = process.env.PORT || 3000;

const app = express();
connectToDatabase();

app.use(cors());
app.use(express.json());
app.use('/rickAndMorty', route);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
