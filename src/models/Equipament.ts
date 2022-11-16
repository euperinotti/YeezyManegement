import { Model, DataTypes } from 'sequelize';
import { componentSequelize } from '../instances/mysql';

export interface iEquipament extends Model {
  name: string;
  description?: string;
  partNumber: number;
  serialNumber: string;
}

export const Equipament = componentSequelize.define<iEquipament>('Equipament', 
{
  idequipamento: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
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
  }
}, {
  tableName: 'equipamentos',
  timestamps: false
})

  /*getFromName: (name: string)=> iEquipament[]; {
      await Equipament.findOne({ where: { name: "roteador" } });
  }

  getFromSerialNumber: (serialNumber: string) => IEquipament[]; {
      await Equipament.findOne({ where: { serialNumber: "" } });
  },

  getFromPartNumber: (partNumber: number): IEquipament[] => {
    // Requisicao pelo numero de part do equipamento
  },*/