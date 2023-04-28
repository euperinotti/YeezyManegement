import { Model, DataTypes } from 'sequelize';
import { componentSequelize } from '../instances/postgres';
import { Cliente } from './Client';

export interface IEquipament extends Model {
  name: string;
  description?: string;
  partNumber: string;
  serialNumber: string;
  status: "Disponível" | "Ocupado";
  quantidade: number;
}


export const Equipament = componentSequelize.define<IEquipament>('Equipament', 
{
  idequipamentos: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    defaultValue: false
},
  serialnumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  partnumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('Disponivel', 'Ocupado'),
    allowNull: false,
    defaultValue: "Disponivel"
  },
  quantidade: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  responsavel: {
    type: DataTypes.STRING,
    allowNull: true
  }
  
}, {
  tableName: 'equipamentos',
  timestamps: false,
})