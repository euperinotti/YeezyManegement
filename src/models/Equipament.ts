const Sequelize = require('sequelize')

const database = require('../../public/configdb')

export interface IEquipament {
  name: string;
  description?: string;
  equipamentId: number;
  partNumber: number;
  serialNumber: string;
}

const Equipament = database.define('Equipment', 
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
})

 /* getFromName: (name: string): IEquipament[] => {
   
  },

  getFromSerialNumber: (serialNumber: string): IEquipament[] => {
    // Requisicao pelo numero de serie do equipamento
  },

  getFromPartNumber: (partNumber: number): IEquipament[] => {
    // Requisicao pelo numero de part do equipamento
  },
};*/


module.exports = Equipament
