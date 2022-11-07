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

export const css = (req: Request, res: Response) => {
    res.render(path.join(__dirname, '../'), {
        pageName: 'Cliente'
    });
}