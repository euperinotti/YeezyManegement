const Sequelize = require('sequelize')
const database = require('../../public/configdb')
const Equipment = require('./Equipament.ts')
import { IEquipament } from './Equipament'

interface IEstoque extends IEquipament {
    quantidade: number;
    descricao: string;
    equipament: IEquipament
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