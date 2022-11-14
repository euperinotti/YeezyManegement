import { Request, Response, Router } from "express";
import { home } from '../controllers/homeController';
import { equipaments } from "../controllers/equipamentsController";
import { clients } from "../controllers/clientsController"

const routes = Router();

routes.get('/', home);
routes.get('/equipaments', equipaments);
routes.get('/clients', clients);
// routes.get('/config', Rotas.configdb);

export default routes