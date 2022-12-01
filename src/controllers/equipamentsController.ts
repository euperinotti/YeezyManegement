import { Request, Response } from 'express';
import path from 'path';
import { Op } from 'sequelize';
import { selectedMenu } from '../helpers/menuHelper';
import { Cliente } from '../models/Client';
import { Equipament } from '../models/Equipament';
import { newClient } from './clientsController';

export const index = async (req: Request, res: Response) => {

    let equipamentos = await Equipament.findAll();
    let clientes = await Cliente.findAll();

    res.render(path.join(__dirname, '../views/pages/equipaments.ejs'), {
        pageName: 'Equipamentos',
        menu: selectedMenu('equipaments'),
        equipamentos,
        clientes
    });
}

export const search = async (req: Request, res: Response) => {
    let equipamentos = await Equipament.findAll({
        where: {
            name: {
                [Op.like]: [`%${req.query.searchQuery as string}%`]
            }
        }
    });

    res.render(path.join(__dirname, '../views/pages/equipaments.ejs'), {
        pageName: 'Equipamentos',
        menu: selectedMenu('equipaments'),
        equipamentos
    });
}

export const newEquipament = async (req: Request, res: Response) => {

    let clientResponsible;

    if(!req.body.clientResponsible) {
        clientResponsible = null
    } else {
        clientResponsible = await Cliente.findByPk(req.body.clientResponsible);
    }

    await Equipament.create({
        name: req.body.equipamentName,
        description: req.body.equipamentDescription,
        partNumber: req.body.equipamentPartNumber,
        serialNumber: req.body.equipamentSerialNumber as string,
        quantidade: req.body.equipamentQuantidade,
        status: req.body.equipamentStatus,
        responsavel: clientResponsible?.name
    })
  
    res.redirect('/equipaments');
}

/*DELETE*/

export const delete_things = async (req: Request, res: Response) => {

    await Equipament.destroy({
        where: {
            idequipamento: req.params.idequipamento
        }
    })

    res.redirect('/equipaments');
}

/*UPDATE*/

export const preUpdate = async (req: Request, res: Response) => {

    let id = req.params.idequipamento;

    let selectedEquipament = await Equipament.findByPk(Number(id));

    res.render(path.join(__dirname, '../views/pages/editEquipament.ejs'), {
        pageName: 'Editar Equipamento',
        menu: selectedMenu('equipaments'),
        selectedEquipament,
    });

}

export const Update = async (req: Request, res: Response) => {
    await Equipament.update({
        serialNumber: req.body.equipamentSerialNumber,
        partNumber: req.body.equipamentPartNumber,
        description: req.body.equipamentDescription,
        name: req.body.equipamentName,
        status: req.body.equipamentStatus,
        quantidade: req.body.equipamentQuantidade as number
    },
        {
            where: {
                idequipamentos: Number(req.params.idequipamento)
            }
        })

    res.redirect('/equipaments');

}
