import { Router } from "express";
import * as Home from '../controllers/homeController';
import * as Equipaments from "../controllers/equipamentsController";
import * as Clients from "../controllers/clientsController"

const routes = Router();

routes.get('/', Home.home);
routes.get('/search-result', Home.searchHome);

routes.get('/equipaments', Equipaments.index);
routes.post('/novoequipamento', Equipaments.newEquipament);
routes.get('/equipaments/delete-equip/idequipamento=:idequipamento', Equipaments.delete_things);
routes.post('/updateequipamento', Equipaments.update_all);
routes.get('/equipaments-result', Equipaments.search)

routes.get('/clients', Clients.select_clients);
routes.post('/novocliente', Clients.newClient);
routes.post('/updatecliente', Clients.update_all);
routes.get('/clients/delete-client/idCliente=:idCliente', Clients.delete_thing)

export default routes
