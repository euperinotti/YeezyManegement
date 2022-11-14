const Sequelize = require('sequelize')

const database = require('../../public/configdb')

/*export interface IEquipament {
  name: string;
  description?: string;
  equipamentId: number;
  partNumber: number;
  serialNumber: string;
}*/

export const Equipament = database.define('Equipment', 
{
  idequipamento: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  serialNumber: {
    type: Sequelize.VARCHAR,
    allowNull: false,
  },
  partNumber: {
    type: Sequelize.VARCHAR,
    allowNull: false,
  },
  description: {
    type: Sequelize.MEDIUMTEXT
  },
  name: {
    type: Sequelize.VARCHAR
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
