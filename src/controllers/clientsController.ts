import { Request, Response } from 'express';
import path from 'path';
import { selectedMenu } from '../helpers/menuHelper';
import { Cliente } from '../models/Client'
export const clients = async (req: Request, res: Response) => {
    
    let teste = await Cliente.create({
        serialNumber: "123",
        partNumber: "12312",
        description: "Está sendo usado segundo",
        name: "Roteador cisco 2"
     })

    res.render(path.join(__dirname, '../views/pages/clients.ejs'), {
        pageName: 'Clientes',
        menu: selectedMenu('clients')
    });
   
}