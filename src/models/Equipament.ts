import { Model, DataTypes } from 'sequelize';
import { componentSequelize } from '../instances/mysql';


export interface iEquipament extends Model {
  name: string;
  description?: string;
  partNumber: string;
  serialNumber: string;
  status: string;
}

export const Equipament = componentSequelize.define<iEquipament>('Equipament', 
{
  idequipamento: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    defaultValue: false
},
  serialNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  partNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING
  },
  name: {
    type: DataTypes.STRING
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  tableName: 'equipamentos',
  timestamps: false
})

  