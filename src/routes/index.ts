import { Request, Response, Router } from "express";
import * as Home from '../controllers/homeController';
import * as Equipaments from "../controllers/equipamentsController";
import { clients } from "../controllers/clientsController"

const routes = Router();

routes.get('/', Home.home);
routes.get('/equipaments', Equipaments.index);
routes.post('/novoequipamento', Equipaments.newEquipament);
routes.get('/clients', clients);
// routes.get('/config', Rotas.configdb);

export default routes