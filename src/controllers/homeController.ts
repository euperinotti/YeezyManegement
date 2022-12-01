import { Request, Response } from 'express';
import path from 'path';
import { selectedMenu } from '../helpers/menuHelper';
import { Equipament } from '../models/Equipament';
import { Op } from 'sequelize';
import { Cliente } from '../models/Client';
import { searchResults } from '../helpers/searchHelper';

export const home = async (req: Request, res: Response) => {

    let clientes = await Cliente.findAll();

    res.render(path.join(__dirname, '../views/pages/index.ejs'), {
        pageName: 'Home',
        menu: selectedMenu('home'),
        availableEquipaments: (await searchResults()).availableEquipaments,
        occupiedEquipaments: (await searchResults()).occupiedEquipaments,
        clientes
    });
}

export const searchHome = async (req: Request, res: Response) => {
    let clientes = await Cliente.findAll();
    let availableQuery = req.query.availableSearchBar as string;
    let occupiedQuery = req.query.occupiedSearchBar as string

    res.render(path.join(__dirname, '../views/pages/index.ejs'), {
        pageName: 'Home',
        menu: selectedMenu('home'),
        availableEquipaments: (await searchResults(availableQuery, 'Disponivel')).availableEquipaments,
        occupiedEquipaments: (await searchResults(occupiedQuery, 'Ocupado')).occupiedEquipaments,
        clientes
    });
}

export const transferEquipament = async (req: Request, res: Response) => {
    let equipId = req.params.id;
    let cliente = await Cliente.findByPk(req.body.clientResponsible);

    await Equipament.update({
        status: 'Ocupado',
        responsavel: cliente?.name
    }, {
        where: {
            idequipamentos: equipId
        }
    });

    res.redirect('/');
}
