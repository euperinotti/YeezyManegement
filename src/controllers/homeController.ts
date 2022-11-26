import { Request, Response } from 'express';
import path from 'path';
import { selectedMenu } from '../helpers/menuHelper';
import { Equipament } from '../models/Equipament';
import { componentSequelize } from '../instances/mysql';
import { Sequelize, Op } from 'sequelize';

type Sort = {
  sortType: "name" | "type" | "marca"
}

export const home = async (req: Request, res: Response) => { 
    // let searchQuery = document.querySelector('#left-search');
    const allEquipaments = await Equipament.findAll({
      where:{
        status: 'disponivel'
      }
    });

    res.render(path.join(__dirname, '../views/pages/index.ejs'), {
        pageName: 'Home',
        menu: selectedMenu('home'),
        allEquipaments
    });
}

export const searchHome = async (req: Request, res: Response) => {
  let searchQuery = req.query.availableSearchBar;
  console.log(searchQuery)

  const availableEquipaments = await Equipament.findAll({
    where: {
      name: {
        [Op.like]: `%${searchQuery}%`
      }
    }
  });

  res.render(path.join(__dirname, '../views/pages/index.ejs'), {
    pageName: 'Home',
    menu: selectedMenu('home'),
    searchQuery,
    availableEquipaments
  });
}
