const Sequelize = require('sequelize')

const database = require('../../public/configdb')

export interface iEquipament {
  name: string;
  description?: string;
  equipamentId: number;
  partNumber: number;
  serialNumber: string;
}

export const Equipament = database.define('Equipment', 
{
  idequipamento: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  serialNumber: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  partNumber: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING
  },
  name: {
    type: Sequelize.STRING
  }
}),

  getFromName: (name: string)=> iEquipament[]; {
      await Equipament.findOne({ where: { name: "" } });
  }

  getFromSerialNumber: (serialNumber: string) => IEquipament[]; {
      await Equipament.findOne({ where: { serialNumber: "" } });
  },

  getFromPartNumber: (partNumber: number): IEquipament[] => {
    // Requisicao pelo numero de part do equipamento
  },


module.exports = Equipament
