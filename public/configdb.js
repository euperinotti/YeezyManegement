
const Sequelize = require('sequelize')

const componenteSequelize = new Sequelize('dbYeezy', 'root', '123456',{
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3332

});

module.exports = componenteSequelize;
