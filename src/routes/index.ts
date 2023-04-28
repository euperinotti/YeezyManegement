import { Router } from "express";
import * as Home from '../controllers/homeController';
import * as Equipaments from "../controllers/equipamentsController";
import * as Clients from "../controllers/clientsController"

const routes = Router();

routes.get('/', Home.home);
routes.get('/search-result', Home.searchHome);
routes.post('/transfer/:id', Home.transferEquipament);
routes.get('/restore/:id', Home.restoreEquipament)


routes.get('/equipaments', Equipaments.index);
routes.post('/novoequipamento', Equipaments.newEquipament);
routes.get('/equipaments/delete-equip/idequipamento=:idequipamento', Equipaments.delete_things);
routes.get('/update-equip-:idequipamento', Equipaments.preUpdate);
routes.post('/update-equip-:idequipamento', Equipaments.Update);
routes.get('/equipaments-result', Equipaments.search);


routes.get('/clients', Clients.select_clients);
routes.post('/novocliente', Clients.newClient);
routes.get('/update-cliente-:idCliente', Clients.preUpdate);
routes.post('/update-cliente-:idCliente', Clients.update_all);
routes.get('/clients/delete-client/idCliente=:idCliente', Clients.delete_thing)
routes.get('/clients-result', Clients.search)


export default routes
