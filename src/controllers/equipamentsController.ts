import { Request, Response } from 'express';
import path from 'path';
import { selectedMenu } from '../helpers/menuHelper';
import { Equipament } from '../models/Equipament';


/*SELECT*/

export const select_all_equipment = async (req: Request, res: Response) => {
    let equipment_select = await Equipament.findAll()
}
export const id_equipament = async(req: Request, res: Response) =>{
    let id_equipament = await Equipament.findAll({
        attributes: ['idequipamento']
    })
}
export const serial_number = async(req: Request, res: Response) =>{
    let serial_number = await Equipament.findAll({
        attributes: ['serialNumber']
    })
}
export const description = async(req: Request, res: Response) =>{
    let description = await Equipament.findAll({
        attributes: ['description']
    })
}
export const equipment_name = async(req: Request, res: Response) =>{
    let equipment_name = await Equipament.findAll({
        attributes: ['name']
    })
}   

/*DELETE*/

export const delete_things = async(req: Request, res: Response) => {
    let delete_things = await Equipament.destroy({
        where: {
            idequipamento: req.params.idequipamento
        }
    })
}


/*UPDATE*/

export const update_serialNumber = async(req: Request, res: Response) => {
    let update_serialNumber = Equipament.update({
        serialNumber: req.body./*definironomedaclasseprafazer o update*/serialNumber},
        {where: {idequipamento: req.params.idequipamento} 
    }
 )
}

export const update_partNumber = async(req: Request, res: Response) => {
    let update_serialNumber = Equipament.update({
        serialNumber: req.body./*definironomedaclasseprafazer o update*/serialNumber},
        {where: {idequipamento: req.params.idequipamento} 
    }
 )
}