import Sequelize, { Model, DataTypes } from 'sequelize';
import { componentSequelize } from '../instances/mysql';
import { IEquipament } from './Equipament'

interface IClient extends IEquipament, Model {
    name: string;
    cnpj: string;
    equipament: IEquipament
}

export const Cliente = componentSequelize.define<IClient>('Cliente', 
{
  idCliente: {
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
  tableName: 'Cliente',
  timestamps: false
})