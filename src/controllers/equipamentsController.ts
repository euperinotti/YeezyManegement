import { Request, Response } from 'express';
import path from 'path';
import { selectedMenu } from '../helpers/menuHelper';
import { Equipament } from '../models/Equipament';

export const equipaments = async (req: Request, res: Response) => {

    let teste = await Equipament.create({
        serialNumber: "123",
        partNumber: "12312",
        description: "Está sendo usado segundo",
        name: "Roteador cisco 2"
     })

     console.log(JSON.stringify(teste));


    res.render(path.join(__dirname, '../views/pages/equipaments.ejs'), {
        pageName: 'Equipamentos',
        menu: selectedMenu('equipaments'),
    });
}   