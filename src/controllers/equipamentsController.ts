import { Request, Response } from 'express';
import path from 'path';
import { selectedMenu } from '../helpers/menuHelper';
import { Equipament } from '../models/Equipament';

export const index = async (req: Request, res: Response) => {

    // let teste = await Equipament.create({
    //     serialNumber: "123",
    //     partNumber: "12312",
    //     description: "Está sendo usado segundo",
    //     name: "Roteador cisco 2"
    //  })

    //  console.log(JSON.stringify(teste));

    let equipamentos = await Equipament.findAll();

    res.render(path.join(__dirname, '../views/pages/equipaments.ejs'), {
        pageName: 'Equipamentos',
        menu: selectedMenu('equipaments'),
        equipamentos
    });
}

export const newEquipament = async (req: Request, res: Response) => {
    let newName = req.body.equipamentName;
    let newSerialNumber = req.body.equipamentSerialNumber;
    let newPartNumber = req.body.equipamentPartNumber;
    let newDescription = req.body.equipamentDescription;

    await Equipament.create({
        serialNumber: newSerialNumber,
        partNumber: newPartNumber,
        description: newDescription,
        name: newName
    })

    res.redirect('/equipaments');
}