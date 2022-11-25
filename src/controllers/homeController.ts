import { Request, Response } from 'express';
import path from 'path';
import { selectedMenu } from '../helpers/menuHelper';
import { Equipament } from '../models/Equipament';
import { componentSequelize } from '../instances/mysql';
import { Sequelize } from 'sequelize';



type Sort = {
  sortType: "name" | "type" | "marca"
}

export const home = async (req: Request, res: Response) => { 
    // let searchQuery = document.querySelector('#left-search');
    let available_equipaments = await Equipament.findAll({
      where:{
        status: 'disponivel'
      }
    });
    let ocuped_equipmanets = await Equipament.findAll({
        where:{
          status: 'ocupado'
        }
    })
    res.render(path.join(__dirname, '../views/pages/index.ejs'), {
        pageName: 'Home',
        menu: selectedMenu('home'),
        available_equipaments,
        ocuped_equipmanets
    });
}

export const configdb = (req: Request, res: Response) => {
    res.render(path.join(__dirname, '/src/configdb.js'),{
        pageName: 'Config'
    })
}
