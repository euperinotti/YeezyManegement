import { Request, Response } from 'express';
import path from 'path';
import { selectedMenu } from '../helpers/menuHelper';
import { Equipament } from '../models/Equipament';

export const home = async (req: Request, res: Response) => {

    let allEquipaments = await Equipament.findAll();

    res.render(path.join(__dirname, '../views/pages/index.ejs'), {
        pageName: 'Home',
        menu: selectedMenu('home'),
        allEquipaments
    });
}

export const configdb = (req: Request, res: Response) => {
    res.render(path.join(__dirname, '/src/configdb.js'),{
        pageName: 'Config'
    })
}
