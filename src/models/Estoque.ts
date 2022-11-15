const Sequelize = require('sequelize')
const database = require('../../public/configdb')
const Equipment = require('./Equipament.ts')
import { iEquipament } from './Equipament'

interface IEstoque extends iEquipament {
    quantidade: number;
    descricao: string;
    equipament: iEquipament
}

const Estoques = database.define('Estoque', 
{
  idestoque: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  quantidade: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  equipament_idequipament: {
    type: Sequelize.STRING,
    allowNull: false,   
  },
  description: {
    type: Sequelize.STRING
  }
})

exports.module = Estoques