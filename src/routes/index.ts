import { Request, Response, Router } from "express";
import * as Home from '../controllers/homeController';
import * as Equipaments from "../controllers/equipamentsController";
import * as Clients from "../controllers/clientsController"

const routes = Router();

routes.get('/', Home.home);
routes.get('/equipaments', Equipaments.index);
routes.post('/novoequipamento', Equipaments.newEquipament);
routes.post('/updateequipamento', Equipaments.update_serialNumber);
routes.get('/clients', Clients.select_clients);
routes.post('/novocliente', Clients.newClient);


export default routes