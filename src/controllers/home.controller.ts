import { Request, Response } from 'express';
import path from 'path';

export const home = (req: Request, res: Response) => {
    res.render(path.join(__dirname, '../views/pages/index.ejs'), {
        pageName: 'Home'
    });
}

export const equipament = (req: Request, res: Response) => {
    res.render(path.join(__dirname, '../views/pages/index.ejs'), {
        pageName: 'Equipamentos'
    });
}

export const client = (req: Request, res: Response) => {
    res.render(path.join(__dirname, '../views/pages/index.ejs'), {
        pageName: 'Clientes'
    });
}

export const login = (req: Request, res: Response) => {
    res.render(path.join(__dirname, '../views/pages/teladelogin.ejs'), {
        pageName: 'Login'
    });
}

export const configdb = (req: Request, res: Response) => {
    res.render(path.join(__dirname, 'public/src/configdb.js'),{
        pageName: 'Config'
    })
}