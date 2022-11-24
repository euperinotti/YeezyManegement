import { Request, Response } from 'express';
import path from 'path';
import { selectedMenu } from '../helpers/menuHelper';
import { Cliente } from '../models/Client';



/*SELECT*/ 

export const select_clients = async (req: Request, res: Response) => {

    let clients = await Cliente.findAll();

    res.render(path.join(__dirname, '../views/pages/clients.ejs'), {
        pageName: 'Clientes',
        menu: selectedMenu('clients'),
        clients
    });  
}   

    
/*CREATE*/ 
export const newClient = async (req: Request, res: Response) => {
    let newName = req.body.clientName;
    let newCnpj = req.body.clientCnpj;

    await Cliente.create({
        name: newName,
        cnpj: newCnpj,
    })

    res.redirect('/clients');
}