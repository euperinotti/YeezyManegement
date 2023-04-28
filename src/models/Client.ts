import Sequelize, { Model, DataTypes } from 'sequelize';
import { componentSequelize } from '../instances/postgres';
import { IEquipament } from './Equipament'

interface IClient extends IEquipament, Model {
    idcliente: string;
    name: string;
    cnpj: string;
    equipament: IEquipament
}

export const Cliente = componentSequelize.define<IClient>('Cliente', 
{
  idcliente: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  cnpj: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  tableName: 'cliente',
  timestamps: false
})