import { Op } from "sequelize";
import { Equipament } from "../models/Equipament";

export const searchResults = async (query?: string, status?: 'Disponivel' | 'Ocupado') => {

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