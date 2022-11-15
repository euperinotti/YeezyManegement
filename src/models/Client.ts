const Equipment = require('./Equipament.ts')
import { IEquipament } from './Equipament.ts'

interface IClient extends IEquipament {
    name: string;
    cnpj: string;
    clientId: number;
    equipament: IEquipament
}

export const Client = {
    
}