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

/*DELETE*/ 
export const delete_thing = async(req: Request, res: Response) => {
    await Cliente.destroy({
        where: {
            idCliente: req.params.idCliente
        }
    })
    res.redirect('/clients');
}

/*UPDATE*/ 

export const update_all = async(req: Request, res: Response) => {
    let update_all = Cliente.update({
        cnpj: req.body.clientCnpj,
        name: req.body.name,
     
    },
        {where: {
            idCliente: req.params.idCliente
        } 
    }
 )
    update_all
}