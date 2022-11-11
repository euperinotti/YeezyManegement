import { Request, Response } from 'express';
import path from 'path';

type MenuOptions = 'home' | 'clients' | 'equipaments';

const selectedMenu = (activeMenu: MenuOptions) => {
    let returnObject = {
        home: false,
        clients: false,
        equipaments: false
    }

    if(activeMenu){
        returnObject[activeMenu] = true;
        return returnObject;
    }
}


export const home = (req: Request, res: Response) => {
    res.render(path.join(__dirname, '../views/pages/index.ejs'), {
        pageName: 'Home',
        menu: selectedMenu('home'),
    });

    console.log(JSON.stringify(selectedMenu('home')))
}

export const equipament = (req: Request, res: Response) => {
    res.render(path.join(__dirname, '../views/pages/index.ejs'), {
        pageName: 'Equipamentos',
        menu: selectedMenu('equipaments')
    });
}

export const client = (req: Request, res: Response) => {
    res.render(path.join(__dirname, '../views/pages/clients.ejs'), {
        pageName: 'Clientes',
        menu: selectedMenu('clients')
    });
   
}

export const configdb = (req: Request, res: Response) => {
    res.render(path.join(__dirname, '/src/configdb.js'),{
        pageName: 'Config'
    })
}
