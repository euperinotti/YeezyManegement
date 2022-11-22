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