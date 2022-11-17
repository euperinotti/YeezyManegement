import { Request, Response } from 'express';
import path from 'path';
import { selectedMenu } from '../helpers/menuHelper';
import { Cliente } from '../models/Client'
import { Equipament } from '../models/Equipament';
export const clients = async (req: Request, res: Response) => {
    
    let mock = await Cliente.create({
        cnpj: "12345678910111",
        equipament_idequipamento: "123",
        name: "Cisco"
     })

     let fk = await Equipament.create({
        id_idequipamento: "123"
     })
     console.log(JSON.stringify(mock));

    res.render(path.join(__dirname, '../views/pages/clients.ejs'), {
        pageName: 'Clientes',
        menu: selectedMenu('clients')
    });
   
    
}