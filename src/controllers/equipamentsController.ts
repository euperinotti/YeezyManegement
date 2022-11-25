import { Request, Response } from 'express';
import path from 'path';
import { selectedMenu } from '../helpers/menuHelper';
import { Equipament } from '../models/Equipament';

export const index = async (req: Request, res: Response) => {

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
    let newStatus = req.body.equipamentStatus;
    let newQuantidade = req.body.equipamentQuantidade;

    await Equipament.create({
        serialNumber: newSerialNumber,
        partNumber: newPartNumber,
        description: newDescription,
        name: newName,
        status: newStatus,
        quantidade: newQuantidade
    })

    res.redirect('/equipaments');
}


/*DELETE*/

export const delete_things = async(req: Request, res: Response) => {
    await Equipament.destroy({
        where: {
            idequipamento: req.params.idequipamento
        }
    })

    res.redirect('/equipaments');
}


/*UPDATE*/

export const update_all = async(req: Request, res: Response) => {
    let update_all = Equipament.update({
        serialNumber: req.body.serialNumber,
        partNumber: req.body.partNumber,
        description: req.body.description,
        name: req.body.name,
        status: req.body.status
    },
        {where: {
            idequipamento: req.params.idequipamento
        } 
    }
 )
    update_all
}