import { Request, Response } from 'express';
import path from 'path';
import { selectedMenu } from '../helpers/menuHelper';

export const home = (req: Request, res: Response) => {
    res.render(path.join(__dirname, '../views/pages/index.ejs'), {
        pageName: 'Home',
        menu: selectedMenu('home'),
    });
}

export const configdb = (req: Request, res: Response) => {
    res.render(path.join(__dirname, '/src/configdb.js'),{
        pageName: 'Config'
    })
}
