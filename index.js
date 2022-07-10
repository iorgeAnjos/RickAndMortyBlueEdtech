const express = require('express');
const cors = require('cors');
const route = require('./src/routes/route');
const connectToDatabase = require('./src/database/db');
const port = 3000;

const app = express();
connectToDatabase();

app.use(cors());
app.use(express.json());
app.use('/rickAndMorty', route);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
