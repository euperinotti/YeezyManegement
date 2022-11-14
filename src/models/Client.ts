import { Equipament } from "./Equipament.ts";

interface IClient extends IEquipament {
    name: string;
    cnpj: string;
    clientId: number;
    equipament: IEquipament
}

export const Client = {
    
}