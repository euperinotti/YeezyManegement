const express = require('express');
/*
const bodyParser = require('body-parser');
const bdConnection = require('./config/bd')*/

const app = express();

app.use(express.json())

app.listen(5400, () => {
    console.log("API rodando na porta 3000 e banco na porta 5432")
})