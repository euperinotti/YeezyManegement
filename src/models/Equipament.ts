export interface IEquipament {
  name: string;
  description?: string;
  equipamentId: number;
  partNumber: number;
  serialNumber: string;
}

export const Equipament = {
        
},

  getFromName: (name: string): IEquipament[] => {
    // Requisicao pelo nome do equipamento
  },

  getFromSerialNumber: (serialNumber: string): IEquipament[] => {
    // Requisicao pelo numero de serie do equipamento
  },

  getFromPartNumber: (partNumber: number): IEquipament[] => {
    // Requisicao pelo numero de part do equipamento
  },
};
