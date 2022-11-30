import { Request, Response } from 'express';
import path from 'path';
import { selectedMenu } from '../helpers/menuHelper';
import { Equipament } from '../models/Equipament';
import { Op } from 'sequelize';
import { Cliente } from '../models/Client';

type Sort = {
    sortType: "name" | "type" | "marca"
}

const searchResults = async (query?: string, status?: 'Disponivel' | 'Ocupado') => {

    let availableEquipaments = await Equipament.findAll({
        where: {
            status: ['Disponivel']
        }
    });

    let occupiedEquipaments = await Equipament.findAll({
        where: {
            status: ['Ocupado']
        }
    });

    if(query != null && status === 'Disponivel'){
        availableEquipaments = await Equipament.findAll({
            where: {
                name: {
                    [Op.like]: [`%${query}%`]
                },
                status: ['Disponivel']
            }
        });
    }

    if(query != null && status === 'Ocupado'){
        occupiedEquipaments = await Equipament.findAll({
            where: {
                name: {
                    [Op.like]: [`%${query}%`]
                },
                status: ['Ocupado']
            }
        });
    }

    return { availableEquipaments, occupiedEquipaments }
}

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
    let availableQuery = req.query.availableSearchBar as string;
    let occupiedQuery = req.query.occupiedSearchBar as string

    res.render(path.join(__dirname, '../views/pages/index.ejs'), {
        pageName: 'Home',
        menu: selectedMenu('home'),
        availableEquipaments: (await searchResults(availableQuery, 'Disponivel')).availableEquipaments,
        occupiedEquipaments: (await searchResults(occupiedQuery, 'Ocupado')).occupiedEquipaments
    });
}
