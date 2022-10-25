const express = require('express');
/*
const bodyParser = require('body-parser');
const bdConnection = require('./config/bd')*/

const app = express();

app.use(express.json())






/*
route.get('/', (req, res) => {
    // res.send(`gay kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk`);
    res.json({
        message: "mal vindo"
    });
})*/

app.listen(5400, () => {
    console.log("API rodando na porta 3000 e banco na porta 5432")
})