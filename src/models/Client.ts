import Sequelize, { Model, DataTypes } from 'sequelize';
import { componentSequelize } from '../instances/mysql';
import { iEquipament } from './Equipament'

interface IClient extends iEquipament, Model {
    name: string;
    cnpj: string;
    equipament: iEquipament
}

const Cliente = componentSequelize.define<IClient>('Cliente', 
{
  idcliente: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  cnpj: {
    type: DataTypes.STRING,
    allowNull: false
  },
  equipament_idequipament: {
    type: DataTypes.STRING,
    allowNull: false  
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'Cliente',
  timestamps: false
})

exports.module = Cliente